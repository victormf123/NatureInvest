/**
 * Created by matheus on 27/02/17.
 */
const biografia_campanha = require('../../database/models/biografia_campanha').getModel();
const campanha = require('../../database/models/campanha').getModel();

exports.novaBiografiaCampanha = function (req, resp) {

    biografia_campanha.create(req.payload)
        .then(function (bio) {
            resp(bio);
        })

        .catch(function (err) {
            console.log(err);
            resp().code(401);
        });
};
exports.editaBiografiaCampanha = function (req, resp) {
    biografia_campanha.update(req.payload, {where: {id: req.params.id}})
        .then(function (equipe) {
            console.log(equipe);
            resp('');
        })

        .catch(function (err) {
            console.log(err);
            resp().code(401);
        });
};
exports.listaBiografiaCampanha = function (req, resp) {
    biografia_campanha.findAll()
        .then(function (equipe) {
            resp(equipe);
        })

        .catch(function (err) {
            console.log(err);
            resp().code(401);
        });
};
exports.pegarUmaBiografia = function (request, response) {
    biografia_campanha.findOne({where: {campanhaId: request.params.id}})
        .then(function (biografia) {
            response(biografia);
        }).catch(function (err) {
            console.log(err);
            response(err);
        });
};
