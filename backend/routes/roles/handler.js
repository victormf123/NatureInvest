/**
 * Created by matheus on 26/04/17.
 */

const roles = require('../../database/models/roles').getModel();
/*const Bcrypt = require('bcrypt');
 const Basic = require('hapi-auth-basic');*/

exports.novaRole = function (req, resp) {
    roles.create(req.payload)
        .then(function (role) {
            console.log(role);
            resp(role);
        })
        .catch(function (err) {
            console.log(err);
            resp(err).code(401);
        });
};
exports.editaRole = function (req, resp) {
    roles.update(req.payload, {where: {id: req.params.id}})
        .then(function (role) {
            console.log(role);
            resp(role);
        })

        .catch(function (err) {
            console.log(err);
            resp(err).code(401);
        });
};
exports.getRoleName = function (req, resp) {
    roles.findAll({ where: {roleName: req.params.roleName}})
        .then(function (role) {
            console.log(role);
            resp(role);
        })
        .catch(function (err) {
            console.log(err);
            resp(err).code(401);
        });
};
exports.listaRoles = function (req, resp) {
    roles.findAll()
        .then(function (roles) {
            resp(roles);
        })

        .catch(function (err) {
            console.log(err);
            resp(err).code(401);
        });

};