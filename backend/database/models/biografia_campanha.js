/**
 * Created by matheus on 27/02/17.
 */
const Sql = require('sequelize');
const Db = require('../');


var model = null;

exports.getModel = function(){
    if (model == null){
        model = Db.define('biografia_campanha',definition, options);

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
    link_youtube: {
        type            :Sql.STRING,
        allowNull       : true
    },
    descricao_projeto: {
        type            :Sql.TEXT,
        allowNull       : true
    },
    pessoas_envolvida: {
        type            :Sql.TEXT,
        allowNull       : true
    }

};

const options = {
    freezeTableName     : true
};