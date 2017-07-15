/**
 * Created by matheus on 26/04/17.
 */

var Handler = require('./handler.js');
var Project = require('../../project');

var Joi = require('joi');

exports.route = function (server) {
    server.route({
        method: 'POST',
        path: '/roles/',
        config: {
            handler: Handler.novaRole,
            validate: {
                payload: {
                    roleName: Joi.string().required(),
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
        path: '/roles/{id}',
        config: {
            handler: Handler.editaRole,
            validate: {
                params:{
                    id : Joi.number().required()
                },
                payload: {
                    roleNome: Joi.string().required(),
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
        path: '/roles/',
        config: {
            handler: Handler.listaRoles
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