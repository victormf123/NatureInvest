/**
 * Created by bruno on 06/18/16.
 */
var Handler = require('./handler.js');
var Project = require('../../project');

var Joi = require('joi');

exports.route = function (server) {
    server.route({
        method: 'POST',
        path: '/user/',
        config: {
            handler: Handler.registerAdmin,
            validate:{
                payload:{
                    name    : Joi.string().max(255).required(),
                    mail    : Joi.string().email().max(255).required(),
                    phone   : Joi.number().integer().required(),
                    cpf     : Joi.string().max(255).required(),
                    pass    : Joi.string().min(6).max(255).required()
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
        method: 'POST',
        path: '/user/{id}',
        config: {
            handler: Handler.updateUser,
            validate:{
                payload:{
                    name    : Joi.string().max(255).required(),
                    mail    : Joi.string().email().max(255).required(),
                    phone   : Joi.number().integer().required(),
                    cpf     : Joi.string().max(255).required(),
                    pass    : Joi.string().min(6).max(255).required()
                },
                params:{
                    id      : Joi.number().integer().required()
                }
            },
            auth: {
                strategy: 'session'
            },
            plugins: {
                'hapiAuthorization': {
                    role: Project.values.roles.admin
                }
            }
        }
    });

    server.route({
        method: 'POST',
        path: '/user/login',
        config: {
            handler: Handler.loginUser,
            validate:{
                payload:{
                    mail    : Joi.string().email().max(255).required(),
                    pass    : Joi.string().max(255).required()
                }
            },
            auth: {
                strategy: 'session',
                mode: 'try'
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/user/logout',
        config: {
            handler: Handler.logout,
            auth: {
                strategy: 'session'
            }
        }
    });
};