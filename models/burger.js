/**
 * Burger model
 */

//Import ORM
var orm = require("../config/orm.js");

var Burger = {
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        });
    },

    create: function(col, val, cb){
        orm.create("burgers", col, val, function(res){
            cb(res);
        });
    },

    update: function(vals, condition, cb) {
        orm.update("burgers", vals, condition, function(res){
            cb(res);
        });
    }


}

module.exports = Burger;
