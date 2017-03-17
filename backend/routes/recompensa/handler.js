/**
 * Created by matheus on 27/02/17.
 */
const Recompensa = require('../../database/models/recompensa').getModel();

exports.novaRecompensa = function (req, resp) {
    Recompensa.create(req.payload)
        .then(function (equipe) {
            resp(equipe);
        })
        .catch(function (err) {
            console.log(err);
            resp().code(401);
        });
};
exports.editaRecompensa = function (req, resp) {
    Recompensa.update(req.payload, {where: {id: req.params.id}})
        .then(function (equipe) {
            console.log(equipe);
            resp('');
        })

        .catch(function (err) {
            console.log(err);
            resp().code(401);
        });
};
exports.listaRecompensa = function (req, resp) {
    Recompensa.findAll()
        .then(function (equipe) {
            resp(equipe);
        })

        .catch(function (err) {
            console.log(err);
            resp().code(401);
        });

};