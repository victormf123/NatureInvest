/**
 * Created by matheus on 24/02/17.
 */
var Handler = require('./handler.js');
var Project = require('../../project');

var Joi = require('joi');

exports.route = function (server) {
    server.route({
        method: 'POST',
        path: '/campanha/',
        config: {
            handler: Handler.novaCampanha,
            validate: {
                payload: {
                    titulo: Joi.string().max(255).required(),
                    orcamento: Joi.number().required(),
                    moeda: Joi.string().required(),
                    status: Joi.string().required(),
                    localidade: Joi.string().required(),
                    dataInicial: Joi.date().required(),
                    dataFinal: Joi.date().required(),
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
        path: '/campanha/',
        config: {
            handler: Handler.listaCampanha
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
        path: '/campanha/{id}',
        config: {
            handler: Handler.pegarUmaCampanha,
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
    server.route({
        method: 'PUT',
        path: '/campanha/{id}',
        config: {
            handler: Handler.editaCampanha,
            validate: {
                params:{
                    id : Joi.number().required()
                },
                payload: {
                    titulo: Joi.string().max(255).required(),
                    orcamento: Joi.number().required(),
                    moeda: Joi.string().required(),
                    localidade: Joi.string().required(),
                    dataInicial: Joi.date().required(),
                    dataFinal: Joi.date().required(),
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
}