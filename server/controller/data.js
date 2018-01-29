var models = require('../models/index');
var radon = require('../models/radon');

exports.insert = function(data_info, callback){
    models.radon.create({
        radon_sensor:data_info.name,
        radon_value:data_info.value
    }).then(function(row){
        callback(row, null);
    }).catch(function(err){
        callback(null, err);
    })
};

exports.findlist = function(data_info, callback){
    models.radon.findAll({
        where:data_info.name
    }).then(function(rows){
        callback(rows, null);
    }).catch(function(err){
        callback(null, err);
    });
}