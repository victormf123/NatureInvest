/**
 * Created by matheus on 04/07/17.
 */
var fs = require('fs');
var multer  = require('multer')
var upload = multer({ dest: './uploads/' })

module.exports = function(req, res){
    res.setHeader("Access-Control-Allow-Origin", "*");
    var arquivo = req.files.file;
    var temporario = req.files.file.path;
    var novo = './uploads/' + req.files.file.name;

    fs.rename(temporario, novo, function(err){
        if(err){
            res.status(500).json({error: err})
        }
        res.send(req.files.file.name);
    })
}