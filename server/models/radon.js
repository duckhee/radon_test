'use strict';
module.exports = function(sequelize, DataTypes) {
  var radon = sequelize.define('radon', {
    radon_sensor: DataTypes.STRING,
    radon_value:{ 
      type:DataTypes.STRING,
      defaults:'0'
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return radon;
};