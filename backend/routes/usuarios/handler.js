/**
 * Created by matheus on 28/02/17.
 */
const Usuarios = require('../../database/models/usuarios').getModel();
const rlUsersRoles = require('../../database/models/rlUsersRoles').getModel();
const roles = require('../../database/models/roles').getModel();
const Crypt = require('../../tools/crypt');
const Basic = require('hapi-auth-basic');
/* const Basic = require('hapi-auth-basic'); */

var self = this;



exports.novaUsuarios = function (req, resp) {

    var data =  req.payload;
    data.password = Crypt.createHash(data.password);
    self.selectEmailUser(resp, data);
};
exports.selectEmailUser = function (resp, data) {
    Usuarios.findOne({
            where: {email: data.email},
            attributes: ['email']
    }).then(function (mail) {
        let resposta = {
            existe: true,
            email: '',
            usuario: ''
        };

        if(mail == null){
            resposta.existe = false;
            Usuarios.create(data)
                .then(function (usuario) {
                    let rlDados = {
                        usuarioId : usuario.id ,
                        roleId: '1', // use o id da role Colaborador
                    };
                    self.createRlUsersRoles(rlDados);
                    resposta.usuario = usuario;
                    resp(resposta);
                })
                .catch(function (err) {
                    console.log(err);
                    resp().code(401);
                });
        }else{
            resposta.existe = true;
            resposta.email = mail.email;
            resp(resposta);
        }

    }).catch(function (err) {
        console.log(err);
        resp().code(401);

    });
};
exports.loginSocial = function (request, response) {

     var payload = request.payload;

     var responseData = {error: false, data: {} };

     //Doing the query
     Usuarios.findOne({
     where       : {
     email    : payload.email
     }
     }).then(function (data) {
     var user = data.dataValues;

     var pass = Crypt.createHash(payload.password);

     if(pass === user.password){

         var promise = authUser(request, user);

         promise.then(function(){



            response(responseData);

         }).catch(function (){

             responseData.error = true;
             responseData.data.type = 'password';
             responseData.data.value = 'auth error';

             response(responseData);

         });
     }else{
     responseData.error = true;
     responseData.data.type = 'password';
     responseData.data.value = 'login error';

     response(responseData);
     }
     }).catch(function (){
     responseData.error = true;
     responseData.data.type = 'password';
     responseData.data.value = 'db error';

    response(responseData);
    });
};

exports.getUsuarios = function (request, response) {
    Usuarios.findById(request.params.id).then(function (usuario) {
        response(usuario);
    }).catch(function (err) {
        response(err);
    });
};
exports.getUsersRole = function (request, response) {
    //let query = "SELECT * FROM rlUsersRoles WHERE usuarioId = " + request.params.id;
    //console.log(query);
    //sequelize.query(query)
    rlUsersRoles.findAll({where:{usuarioId: request.params.id}}).then(function (userRole) {
        response(userRole);
    }).catch(function (err) {
        console.log(err);
        response(err);
    })
};

exports.loginUser = function (request, response) {

    var payload = request.payload;

    var responseData = {error: false, data: {} };

    //Doing the query
    Usuarios.findOne({
        where       : {
            email    : payload.email
        }
    }).then(function (data) {

        console.log('Entrou 1');

        var user = data.dataValues;

        var pass = Crypt.createHash(payload.password);

        if(pass === user.password){
            delete user.password;

            var promise = authUser(request, user);
            promise.then(function(){
                responseData.userId = user.id;
                response(responseData);
            });

            promise.catch(function (){
                responseData.error = true;
                responseData.data.type = 'password';
                responseData.data.value = 'auth error';

                response(responseData);
            });
        }else{
            responseData.error = true;
            responseData.data.type = 'password';
            responseData.data.value = 'login error';

            response(responseData);
        }
    }).catch(function (){
        responseData.error = true;
        responseData.data.type = 'password';
        responseData.data.value = 'db error';

        response(responseData);
    });
};

function authUser(request, user){

     return new Promise(function (fulfill, reject) {

     request.server.app.cache.set(String(user.id), {account: user}, 0, (err) => {

            if (err) {
             reject(err);
             }


             request.cookieAuth.set({sid: String(user.id)});
             fulfill();
        });
     });
}

exports.createRlUsersRoles = function (rlDados) {
    rlUsersRoles.create(rlDados).then(function (response) {
        console.log(response);
        return response;
    })
        .catch(function (err) {
            console.log(err);
            return err
        });
};
exports.urlcreateRlUsersRoles = function (request, response) {
    rlUsersRoles.create(request.payload).then(function (userRoles) {
         response(userRoles);
    })
        .catch(function (err) {
            console.log(err);
            return err
        });
};
exports.editaUsuarios = function (req, resp) {
    Usuarios.update(req.payload, {where: {id: req.params.id}})
        .then(function (equipe) {
            console.log(equipe);
            resp('');
        })

        .catch(function (err) {
            console.log(err);
            resp().code(401);
        });
};
exports.listaUsuarios = function (req, resp) {
    Usuarios.findAll()
        .then(function (equipe) {
            resp(equipe);
        })

        .catch(function (err) {
            console.log(err);
            resp().code(401);
        });

};