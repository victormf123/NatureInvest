/**
 * Created by matheus on 05/07/17.
 */
const Sql = require('sequelize');
const Db = require('../');


var model = null;

exports.getModel = function(){
    if (model == null){
        model = Db.define('campanha_categoria',definition, options);
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
    categoria: {
        type            :Sql.STRING,
        allowNull       : false
    },
    icon:{
        type            :Sql.STRING,
        allowNull       : false
    }
};

const options = {
    freezeTableName     : true
};