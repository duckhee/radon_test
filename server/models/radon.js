'use strict';
module.exports = function(sequelize, DataTypes) {
  var radon = sequelize.define('radon', {
    radon_sensor: DataTypes.STRING,
    radon_value:{ 
      type:DataTypes.TEXT,
      //defaults:'0'
    },
    door_value1:{
      type:DataTypes.STRING
    },
    door_value2:{
      type:DataTypes.STRING
    },
    door_value3:{
      type:DataTypes.STRING
    },
    door_value4:{
      type:DataTypes.STRING
    },
    door_value5:{
      type:DataTypes.STRING
    },

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return radon;
};