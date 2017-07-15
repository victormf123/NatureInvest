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
                    imagem: Joi.string().allow(''),
                    status: Joi.string().required(),
                    localidade: Joi.string().required(),
                    dataInicial: Joi.date().required(),
                    dataFinal: Joi.date().required(),
                    campanhaCategoriumId: Joi.number().allow(''),
                    usuarioId: Joi.number().allow(''),
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
        path: '/campanhaEmAnalise/',
        config: {
            handler: Handler.listarCampanhasEmAvaliacao
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
                    titulo: Joi.string().allow(''),
                    orcamento: Joi.number().allow(''),
                    moeda: Joi.string().allow(''),
                    status: Joi.string().allow(''),
                    imagem:Joi.string().max(255).allow(''),
                    localidade: Joi.string().allow(''),
                    dataInicial: Joi.date().allow(''),
                    dataFinal: Joi.date().allow(''),
                    createdAt: Joi.date().allow(''),
                    updatedAt: Joi.date().allow(''),
                    usuarioId: Joi.number().allow(null),

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