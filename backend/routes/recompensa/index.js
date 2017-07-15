/**
 * Created by matheus on 27/02/17.
 */
var Handler = require('./handler.js');
var Project = require('../../project');

var Joi = require('joi');

exports.route = function (server) {
    server.route({
        method: 'POST',
        path: '/recompensa/',
        config: {
            handler: Handler.novaRecompensa,
            validate: {
                payload: {
                    recompensa: Joi.boolean(),
                    valor: Joi.string().max(255).allow(''),
                    descricao: Joi.string().allow(''),
                    entrega: Joi.date().allow(''),
                    detalhes: Joi.string().allow(''),
                    limitado: Joi.boolean().allow(''),
                    limite: Joi.number().allow(''),
                    campanhaId: Joi.number()
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
        path: '/recompensa/{id}',
        config: {
            handler: Handler.editaRecompensa,
            validate: {
                params:{
                    id : Joi.number().required()
                },
                payload: {
                    valor: Joi.string().max(255),
                    descricao: Joi.string(),
                    entrega: Joi.date(),
                    detalhes: Joi.string(),
                    limitado: Joi.boolean(),
                    limite: Joi.number()
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
        path: '/recompensa/',
        config: {
            handler: Handler.listaRecompensa
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
        path: '/recompensa/{id}',
        config: {
            handler: Handler.pegarRecompensasPorCampanha,
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