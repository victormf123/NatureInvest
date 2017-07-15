/**
 * Created by bruno on 06/18/16.
 */
const Db = require('./database');

const routesDirName = './routes/';
const FileSystem = require('fs');
const Path = require('path');
const Project = require('./project');
const Hapi = require('hapi');



var server = new Hapi.Server();


server.connection({
    host: '0.0.0.0',
    port: process.env.PORT || 8001,
    routes: {
        cors: {
            origin: ['*'], //Change this to the correct one on production!
            credentials: true
        },
        files:{
            relativeTo: Path.join(__dirname, 'app')
        }
    }
});



function createRoutes(err, files){
    if (err){
        console.log('Fail to load routes, exiting program');
        return;
    }

    preRouteAction();

    files.forEach((file) => {
        var route = require(routesDirName + file);
        route.route(server);
    });

    preStartAction();

    server.start((err) => {
        if (err) {
            throw err;
        }
        console.log('Server running at:', server.info.uri);
    });

    postStartAction();
}

function preRouteAction(){
    Db.connect();
    var roles = [];

    for (role in Project.values.roles){
        roles.push(Project.values.roles[role]);
    }
    
    var plugins = [
        {register: require('hapi-auth-cookie')},
        {register: require('inert')},
        {
            register: require('hapi-authorization'),
            options: {
                roles: roles
            }
        },
        {register: require('vision')},
        {register: require('lout')}
    ];

    const cache = server.cache({ segment: 'sessions', expiresIn: 3 * 24 * 60 * 60 * 1000 });
    server.app.cache = cache;

    server.register(plugins, (err) => {
        if (err){
            console.log('preRouteAction Fail to register plugins: ' + err);
        }

        server.auth.strategy('session', 'cookie', {
            password: '0d076fff0266d7f130b73e231b4f82e2',
            cookie: 'nature',
            isSecure: false,
            clearInvalid: true,
            appendNext: 'returnURL',
            validateFunc: (request, session, callback) => {
                cache.get(session.sid, (err, cached) => {
                    var account = (cached == undefined ? null : cached.account);

                    return callback(err, cached != undefined, account);
                });
            }
        });

    });
}
function preStartAction(){

}
function postStartAction(){
    console.log('#REMOVE THIS LOG actions to run after starting the server if it all works')
}

FileSystem.readdir(routesDirName, createRoutes);