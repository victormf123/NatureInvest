/**
 * Created by matheus on 24/02/17.
 */
const Campanha = require('../../database/models/campanha').getModel();

exports.novaCampanha = function (req, resp) {
    Campanha.create(req.payload)

        .then(function () {
            console.log('ok');
            resp();
        })

        .catch(function (err) {
            console.log(err);
            resp().code(401);
        });
};

exports.listaCampanha = function (req, resp) {
    Campanha.findAll()
        .then(function (campanha) {
            resp(campanha);
        })

        .catch(function (err) {
            console.log(err);
            resp().code(401);
        });

};

exports.pegarUmaCampanha = function (req, resp) {
    Campanha.findOne({where: {id: req.params.id}})
        .then(function (campanha) {
            resp(campanha);
        })

        .catch(function (err) {
            console.log(err);
            resp().code(401);
        });
};

exports.editaCampanha = function (req, resp) {
    Campanha.update(req.payload, {where: {id: req.params.id}})
        .then(function (campanha) {
            console.log(campanha);
            resp('');
        })

        .catch(function (err) {
            console.log(err);
            resp().code(401);
        });
};
