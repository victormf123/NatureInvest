/**
 * Created by matheus on 28/02/17.
 */
const Usuarios = require('../../database/models/usuarios').getModel();

exports.novaUsuarios = function (req, resp) {
    Usuarios.create(req.payload)

        .then(function () {
            console.log('ok');
            resp('');
        })

        .catch(function (err) {
            console.log(err);
            resp().code(401);
        });
};
exports.editaUsuarios = function (req, resp) {
    Usuarios.update(req.payload, {where: {id: req.params.id}})
        .then(function (equipe) {
            console.log(equipe);
            resp('');
        })

        .catch(function (err) {
            console.log(err);
            resp().code(401);
        });
};
exports.listaUsuarios = function (req, resp) {
    Usuarios.findAll()
        .then(function (equipe) {
            resp(equipe);
        })

        .catch(function (err) {
            console.log(err);
            resp().code(401);
        });

};