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
}