/**
 * Created by matheus on 27/02/17.
 */
const campanha_categoria = require('../../database/models/campanha_categoria').getModel();
const campanha = require('../../database/models/campanha').getModel();

exports.novaCampanhaCategoria = function (req, resp) {

    campanha_categoria.create(req.payload)
        .then(function (bio) {
            resp(bio);
        })

        .catch(function (err) {
            console.log(err);
            resp().code(401);
        });
};
exports.editaCampanhaCategoria = function (req, resp) {
    campanha_categoria.update(req.payload, {where: {id: req.params.id}})
        .then(function (equipe) {
            console.log(equipe);
            resp('');
        })

        .catch(function (err) {
            console.log(err);
            resp().code(401);
        });
};
exports.listaCampanhaCategoria = function (req, resp) {
    campanha_categoria.findAll()
        .then(function (equipe) {
            resp(equipe);
        })

        .catch(function (err) {
            console.log(err);
            resp().code(401);
        });
};
exports.pegarUmaCampanhaCategoria = function (request, response) {
    campanha_categoria.findOne({where: {id: request.params.id}})
        .then(function (biografia) {
            response(biografia);
        }).catch(function (err) {
            console.log(err);
            response(err);
        });
};
