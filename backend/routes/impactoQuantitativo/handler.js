/**
 * Created by matheus on 27/03/17.
 */
const ImpactoQuantitativo = require('../../database/models/impactoQuantitativo').getModel();

exports.novaImpactoQuantitativo = function (req, resp) {
    ImpactoQuantitativo.create(req.payload)
        .then(function (impacto) {
            resp(impacto);
        })
        .catch(function (err) {
            console.log(err);
            resp().code(401);
        });
};
exports.editaImpactoQuantitativo = function (req, resp) {
    ImpactoQuantitativo.update(req.payload, {where: {id: req.params.id}})
        .then(function (impacto) {
            console.log(impacto);
            resp(impacto);
        })

        .catch(function (err) {
            console.log(err);
            resp().code(401);
        });
};
exports.listaImpactoQuantitativo = function (req, resp) {
    ImpactoQuantitativo.findAll()
        .then(function (impacto) {
            resp(impacto);
        })

        .catch(function (err) {
            console.log(err);
            resp().code(401);
        });
}

