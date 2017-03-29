/**
 * Created by matheus on 27/03/17.
 */

/**
 * Created by matheus on 27/02/17.
 */
const Sql = require('sequelize');
const Db = require('../');

var model = null;

exports.getModel = function(){
    if (model == null){
        model = Db.define('impactoQuantitativo',definition, options);

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
    descricao: {
        type            :Sql.TEXT,
        allowNull       : true
    },
    quantidade: {
        type            :Sql.TEXT,
        allowNull       : true
    }
};

const options = {
    freezeTableName     : true
};