/**
 * Created by matheus on 24/02/17.
 */
const bodyParser = require('body-parser');
const multer = require('multer');

const Campanha = require('../../database/models/campanha').getModel();

exports.novaCampanha = function (req, resp) {

    //console.log(req.payload);
    Campanha.create(req.payload)
        .then(function (campanha) {
            resp(campanha);
        })

        .catch(function (err) {
            console.log(err);
            resp().code(401);
        });
};

exports.listarCampanhasEmAvaliacao = function (request, response) {
  Campanha.findAll({where:{status: 'Em Analise'}}).then(function (campanhasEmAnalise) {
      response(campanhasEmAnalise);
  }).catch(function (err) {
      response(err);
  })
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
          console.log(req.params.id)
            console.log(campanha);
            resp(campanha);
        })
        .catch(function (err) {
            console.log(err);
            resp(err).code(401);
        });
};

exports.uploadImgCampanha = function (req, res) {
    setTimeout(
        function () {
            res.setHeader('Content-Type', 'text/html');
            if (req.files.length == 0 || req.files.file.size == 0)
                res.send({ msg: 'No file uploaded at ' + new Date().toString() });
            else {
                var file = req.files.file;
                fs.unlink(file.path, function (err) {
                    if (err)
                        throw err;
                    else
                    //res.end("Hello");
                        res.send({ msg: '<b>"' + file.name + '"</b> uploaded to the server at ' + new Date().toString() });
                });
            }
        },
        (req.param('delay', 'yes') == 'yes') ? 2000 : -1
    );
};
