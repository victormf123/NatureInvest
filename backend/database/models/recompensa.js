/**
 * Created by matheus on 24/02/17.
 */
const Sql = require('sequelize');
const Db = require('../');
//const Campanha = require('./campanha').getModel();


var model = null;

exports.getModel = function(){
    if (model == null){
        model = Db.define('recompensa',definition, options);
        //model.belongsTo(Campanha);
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
    valor : {
        type            : Sql.STRING,
        allowNull       : false
    },
    descricao : {
        type            : Sql.TEXT,
        allowNull       : false
    },
    entrega : {
        type            : Sql.DATE,
        allowNull       : false
    },
    detalhes : {
        type            : Sql.STRING,
        allowNull       : false
    },
    limitado: {
        type            : Sql.BOOLEAN,
        allowNull       : true
    },
    limite: {
        type            : Sql.INTEGER,
        allowNull       : true
    }


};

const options = {
    freezeTableName     : true
};