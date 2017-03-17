/**
 * Created by matheus on 27/02/17.
 */

var Handler = require('./handler.js');
var Project = require('../../project');

var Joi = require('joi');

exports.route = function (server) {
    server.route({
        method: 'POST',
        path: '/biografiacampanha/',
        config: {
            handler: Handler.novaBiografiaCampanha,
            validate: {
                payload: {
                    descricao_projeto: Joi.string().required(),
                    pessoas_envolvida: Joi.string().required(),
                    impacto_quantitativo: Joi.string().required(),
                    quantificador: Joi.string().required(),
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
        path: '/biografiacampanha/{id}',
        config: {
            handler: Handler.editaBiografiaCampanha,
            validate: {
                params: {
                    id: Joi.number().required()
                },
                payload: {
                    descricao_projeto: Joi.string().required(),
                    pessoas_envolvida: Joi.string().required(),
                    impacto_quantitativo: Joi.string().max(255).required(),
                    quantificador: Joi.string().optional()
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
        path: '/biografiacampanha/',
        config: {
            handler: Handler.listaBiografiaCampanha
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