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
                    valor: Joi.string().max(255).required(),
                    descricao: Joi.string().required(),
                    entrega: Joi.date().required(),
                    detalhes: Joi.string().max(255).required(),
                    limitado: Joi.boolean().required(),
                    limite: Joi.number().optional()
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
                    valor: Joi.string().max(255).required(),
                    descricao: Joi.string().required(),
                    entrega: Joi.date().required(),
                    detalhes: Joi.string().max(255).required(),
                    limitado: Joi.boolean().required(),
                    limite: Joi.number().optional()
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
}