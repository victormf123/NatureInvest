/**
 * Created by matheus on 25/04/17.
 */
/**
 * Created by matheus on 24/02/17.
 */
const Sql = require('sequelize');
const Db = require('../');
const rlUserRoles = require('./rlUsersRoles').getModel();

var model = null;

exports.getModel = function(){
    if (model == null){
        model = Db.define('roles',definition, options);
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
    roleName : {
        type            : Sql.STRING,
        allowNull       : false
    }
};

const options = {
    freezeTableName     : true
};