/**
 * Created by matheus on 24/02/17.
 */
const Equipe = require('../../database/models/equipe').getModel();

exports.novaEquipe = function (req, resp) {
    Equipe.create(req.payload)

    .then(function (equipe) {
        resp(equipe);
    })

    .catch(function (err) {
        console.log(err);
        resp().code(401);
    });
};
exports.editaEquipe = function (req, resp) {
    Equipe.update(req.payload, {where: {id: req.params.id}})
    .then(function (equipe) {
        console.log(equipe);
        resp('');
    })

    .catch(function (err) {
        console.log(err);
        resp().code(401);
    });
};
exports.listaEquipe = function (req, resp) {
    Equipe.findAll()
    .then(function (equipe) {
        resp(equipe);
    })

    .catch(function (err) {
        console.log(err);
        resp().code(401);
    });

};

exports.pegarUmaEquipe = function (req, resp) {
    Equipe.findOne({where: {id: req.params.id}})
        .then(function (equipe) {
            resp(equipe);
        })

        .catch(function (err) {
            console.log(err);
            resp().code(401);
        });

};

exports.pegaEquipePorCampanha = function (request, response) {
    Equipe.findAll({where: {campanhaId: request.params.id}})
        .then(function (equipe) {
            response(equipe);
        })

        .catch(function (err) {
            console.log(err);
            response(err).code(401);
        });
};

