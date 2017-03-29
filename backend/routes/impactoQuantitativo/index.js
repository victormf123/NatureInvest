/**
 * Created by matheus on 27/03/17.
 */
var Handler = require('./handler.js');
var Project = require('../../project');

var Joi = require('joi');

exports.route = function (server) {
    server.route({
        method: 'POST',
        path: '/impactoQuantitativo/',
        config: {
            handler: Handler.novaImpactoQuantitativo,
            validate: {
                payload: {
                    descricao: Joi.string().allow(''),
                    quantidade: Joi.string().allow(''),
                    campanhaId: Joi.number().allow('')
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
        path: '/impactoQuantitativo/{id}',
        config: {
            handler: Handler.editaImpactoQuantitativo,
            validate: {
                params:{
                    id : Joi.number().required()
                },
                payload: {
                    descricao: Joi.string().allow(''),
                    quantidade: Joi.string().allow(''),
                    campanhaId: Joi.number().allow('')
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
        path: '/impactoQuantitativo/',
        config: {
            handler: Handler.listaImpactoQuantitativo
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