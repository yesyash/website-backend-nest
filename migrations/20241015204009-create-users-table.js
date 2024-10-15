'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        firstName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        lastName: {
          type: Sequelize.STRING,
        },
        phone: {
          type: Sequelize.STRING,
          unique: true,
        },
      });
    } catch (error) {
      console.error(error);
      await transaction.rollback();
      Promise.reject(error);
    }
  },

  async down(queryInterface, Sequelize) {
    try {
      await queryInterface.dropTable('users');
    } catch (error) {
      console.error(error);
      Promise.reject(error);
    }
  },
};
