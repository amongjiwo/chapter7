'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      playerOneId: {
        type: Sequelize.INTEGER
      },
      playerTwoId: {
        type: Sequelize.INTEGER
      },
      playerOneMove: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      playerTwoMove: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      roundResult: {
        type: Sequelize.ARRAY(Sequelize.STRING)
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rooms');
  }
};