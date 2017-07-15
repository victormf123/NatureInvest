const Sql = require('sequelize');
const FileSystem = require('fs');

const folderName = __dirname + '/models/';

var uri = process.env.CLEAR_DATABASE_URL || 'mysql://root:root@localhost:8889/NatureInvest?reconnect=true';
var database;

exports.getDataBase = function () {
    return database;
};

exports.connect = function (){
    uri += '&max_connections=10';
    database = new Sql(uri);

    FileSystem.readdir(folderName, loadModels);
};

exports.define = function(table, definition, option){
    return database.define(table, definition, option);
};

function loadModels(err, models){
    if (err){
        console.error('Fail to load modules from database: ' + err);
        return;
    }

    models.forEach((model) =>{
        var requiredModel = require(folderName + model);

        if (typeof requiredModel.getModel === 'function') {
            requiredModel.getModel();
        }
    });
    
    database.sync({force:true});//{force:true}
}
