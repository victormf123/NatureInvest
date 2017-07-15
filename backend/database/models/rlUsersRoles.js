/**
 * Created by matheus on 25/04/17.
 */
const Sql = require('sequelize');
const Db = require('../');



var model = null;

exports.getModel = function(){
    if (model == null){
        model = Db.define('rlUsersRoles',definition, options);
    }
    return model;
};
const definition = {
    id : {
        type            : Sql.INTEGER,
        primaryKey      : true,
        autoIncrement   : true,
        unique          : true
    }
};

const options = {
    freezeTableName     : true
};