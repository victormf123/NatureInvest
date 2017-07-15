/**
 * Created by matheus on 24/02/17.
 */
var Handler = require('./handler.js');
var Project = require('../../project');

var Joi = require('joi');

exports.route = function (server) {
    server.route({
        method: 'POST',
        path: '/equipe/',
        config: {
            handler: Handler.novaEquipe,
            validate: {
                payload: {
                    nome: Joi.string().max(255).required(),
                    mail: Joi.string().email().max(255).required(),
                    telefone: Joi.string().required(),
                    funcao: Joi.string().max(255).required(),
                    campanhaId: Joi.number().required()
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
        path: '/equipe/{id}',
        config: {
            handler: Handler.editaEquipe,
            validate: {
                params:{
                    id : Joi.number().required()
                },
                payload: {
                    nome: Joi.string().max(255).required(),
                    mail: Joi.string().email().max(255).required(),
                    telefone: Joi.string().required(),
                    funcao: Joi.string().max(255).required(),
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
        path: '/equipe/',
        config: {
            handler: Handler.listaEquipe
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
        path: '/equipe/{id}',
        config: {
            handler: Handler.pegaEquipePorCampanha,
            validate: {
                params: {
                    id: Joi.number().required()
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
};
