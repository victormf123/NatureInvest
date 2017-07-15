/**
 * Created by matheus on 24/02/17.
 */
const Sql = require('sequelize');
const Db = require('../');
const rlUserRoles = require('./rlUsersRoles').getModel();

var model = null;

exports.getModel = function(){
    if (model == null){
        model = Db.define('usuarios',definition, options);
        model.hasMany(rlUserRoles);
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
        allowNull       : true
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
        allowNull       : true
    },
    funcao: {
        type            : Sql.STRING,
        allowNull       : true
    },
    biografia: {
        type            : Sql.TEXT,
        allowNull       : true
    },
    website: {
        type            : Sql.STRING,
        allowNull       : true
    },
    idfacebook: {
        type            : Sql.STRING,
        allowNull       : true
    },
    idgoogle: {
        type            : Sql.STRING,
        allowNull       : true
    },
    urlimage:{
        type            : Sql.STRING,
        allowNull       : true
    }
};

const options = {
    freezeTableName     : true
};