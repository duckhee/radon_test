'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('radons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      radon_sensor: {
        type: Sequelize.STRING
      },
      radon_value: {
        type: Sequelize.TEXT
      },
      door_value1:{
        type:Sequelize.STRING
      },
      door_value2:{
        type:Sequelize.STRING
      },
      door_value3:{
        type:Sequelize.STRING
      },
      door_value4:{
        type:Sequelize.STRING
      },
      door_value5:{
        type:Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('radons');
  }
};