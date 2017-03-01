/**
 * Created by matheus on 24/02/17.
 */
const Sql = require('sequelize');
const Db = require('../');
//const Campanha = require('./campanha').getModel();

var model = null;

exports.getModel = function(){
    if (model == null){
        model = Db.define('usuarios',definition, options);
  //      model.hasMany(Campanha);
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
    email : {
        type            : Sql.STRING,
        allowNull       : false
    },
    password : {
        type            : Sql.STRING,
        allowNull       : false
    },
    localidade : {
        type            : Sql.STRING,
        allowNull       : false
    },
    funcao: {
        type            : Sql.STRING,
        allowNull       : false
    },
    biografia: {
        type            : Sql.TEXT,
        allowNull       : false
    },
    website: {
        type            : Sql.STRING,
        allowNull       : false
    }
};

const options = {
    freezeTableName     : true
};