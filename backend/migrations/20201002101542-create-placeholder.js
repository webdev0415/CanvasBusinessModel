'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Placeholders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      canvas_id: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      desc: {
        type: Sequelize.STRING
      },
      lock: {
        type: Sequelize.BOOLEAN
      },
      order: {
        type: Sequelize.INTEGER
      },
      color: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.INTEGER
      },
      coordinate_x: {
        type: Sequelize.INTEGER
      },
      coordinate_y: {
        type: Sequelize.INTEGER
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Placeholders');
  }
};