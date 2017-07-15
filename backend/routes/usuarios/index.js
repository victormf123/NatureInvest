/**
 * Created by matheus on 28/02/17.
 */
var Handler = require('./handler.js');
var Project = require('../../project');

var Joi = require('joi');

exports.route = function (server) {

    server.route({
        method: 'POST',
        path: '/usuarios/',
        config: {
            handler: Handler.novaUsuarios,
            validate: {
                payload: {
                    nome: Joi.string().allow(''),
                    email: Joi.string().email().required(),
                    password: Joi.string().required(),
                    localidade: Joi.string().allow(''),
                    funcao: Joi.string().allow(''),
                    biografia: Joi.string().allow(''),
                    website:Joi.string().allow(''),
                    idfacebook:Joi.string().allow(''),
                    idgoogle:Joi.string().allow(''),
                    urlimage:Joi.string().allow('')
                }
            }
            /* for now user will be created default,
             auth: {
             strategy: 'session'
             },
             plugins: {
             'hapiAuthorization': {
             role: Project.values.roles.admin
             }
             }*/
        }
    });

    server.route({
        method: 'PUT',
        path: '/usuarios/{id}',
        config: {
            handler: Handler.editaUsuarios,
            validate: {
                params:{
                    id : Joi.number().required()
                },
                payload: {
                    nome: Joi.string().required(),
                    email: Joi.string().email().required(),
                    password: Joi.string().required(),
                    localidade: Joi.string().required(),
                    funcao: Joi.string().required(),
                    biografia: Joi.string().required(),
                    website:Joi.string().required()
                }
            }/* for now user will be created default,
             auth: {
             strategy: 'session'
             },
             plugins: {
             'hapiAuthorization': {
             role: Project.values.roles.admin
             }
             }*/
        }
    });

    server.route({
        method: 'GET',
        path: '/usuarios/',
        config: {
            handler: Handler.listaUsuarios
            /* for now user will be created default,
             auth: {
             strategy: 'session'
             },
             plugins: {
             'hapiAuthorization': {
             role: Project.values.roles.admin
             }
             }*/
        }
    });
    server.route({
        method: 'GET',
        path: '/usuarios/{id}',
        config: {
            handler: Handler.getUsuarios,
            validate: {
                params:{
                    id : Joi.number().required()
                },
            }/* for now user will be created default,
            /* for now user will be created default,
             auth: {
             strategy: 'session'
             },
             plugins: {
             'hapiAuthorization': {
             role: Project.values.roles.admin
             }
             }*/
        }
    });

    server.route({
        method: 'GET',
        path: '/usuariosRole/{id}',
        config: {
            handler: Handler.getUsersRole,
            validate: {
                params:{
                    id : Joi.number().required()
                },
            }/* for now user will be created default,
             /* for now user will be created default,
             auth: {
             strategy: 'session'
             },
             plugins: {
             'hapiAuthorization': {
             role: Project.values.roles.admin
             }
             }*/
        }
    });

    server.route({
        method: 'POST',
        path: '/usuarios/login',
        config: {
            handler: Handler.loginUser,
            validate:{
                payload:{
                    email    : Joi.string().email().max(255).required(),
                    password    : Joi.string().max(255).required()
                }
            },
            /*
             auth: {
             strategy: 'session',
             mode: 'try'
             }*/
        }
    });
    server.route({
        method: 'POST',
        path: '/usuarios/rlUsersRoles',
        config: {
            handler: Handler.urlcreateRlUsersRoles,
            validate:{
                payload:{
                    usuarioId    : Joi.number().required(),
                    roleId    : Joi.number().required()
                }
            },
            /*
             auth: {
             strategy: 'session',
             mode: 'try'
             }*/
        }
    });
}