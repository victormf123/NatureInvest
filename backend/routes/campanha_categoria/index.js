/**
 * Created by matheus on 27/02/17.
 */

var Handler = require('./handler.js');
var Project = require('../../project');

var Joi = require('joi');

exports.route = function (server) {

    server.route({
        method: 'POST',
        path: '/campanhaCategoria/',
        config: {
            handler: Handler.novaCampanhaCategoria,
            validate: {
                payload: {
                    categoria: Joi.string(),
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
        path: '/campanhaCategoria/{id}',
        config: {
            handler: Handler.editaCampanhaCategoria,
            validate: {
                params: {
                    id: Joi.number().required()
                },
                payload: {
                    categoria: Joi.string(),
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
        path: '/campanhaCategoria/',
        config: {
            handler: Handler.listaCampanhaCategoria
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
        path: '/campanhaCategoria/{id}',
        config: {
            handler: Handler.pegarUmaCampanhaCategoria,
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
}