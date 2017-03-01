/**
 * Created by matheus on 24/02/17.
 */
const Sql = require('sequelize');
const Db = require('../');
const Usuario = require('./usuarios').getModel();
const Equipe = require('./equipe').getModel();
const Recompensa = require('./recompensa').getModel();
const biografia_campanha = require('./biografia_campanha').getModel();

var model = null;

exports.getModel = function(){
    if (model == null){
        model = Db.define('campanha',definition, options);

        model.hasMany(Recompensa);
        model.hasMany(Equipe);
        model.belongsTo(Usuario);
        model.hasOne(biografia_campanha);
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
    titulo: {
        type            :Sql.STRING,
        allowNull       : false
    },
    orcamento: {
        type            :Sql.DECIMAL(10, 2),
        allowNull       : false
    },
    moeda: {
      type              :Sql.STRING,
      allowNull         : false
    },
    localidade: {
      type              :Sql.STRING,
      allowNull         :false
    },
    dataInicial: {
        type            :Sql.DATE,
        allowNull       :false
    },
    dataFinal: {
        type            :Sql.DATE,
        allowNull       :false
    }


};

const options = {
    freezeTableName     : true
};