/**
 * Created by matheus on 24/02/17.
 */
const Sql = require('sequelize');
const Db = require('../');
//const Campanha = require('./campanha').getModel();

var model = null;

exports.getModel = function(){
    if (model == null){
        model = Db.define('equipe',definition, options);
    //    model.belongsTo(Campanha);
    }
    return model;
};
const definition = {
    id : {
        type            : Sql.INTEGER,
        primaryKey      : true,
        autoIncrement   : true,
        unique          : true
    },
    nome : {
        type            : Sql.STRING,
        allowNull       : false
    },
    mail : {
        type            : Sql.STRING,
        allowNull       : false
    },
    telefone : {
        type            : Sql.STRING,
        allowNull       : false
    },
    funcao : {
        type            : Sql.STRING,
        allowNull       : false
    }

};

const options = {
    freezeTableName     : true
};