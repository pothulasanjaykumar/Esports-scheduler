'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('games', 'date', {
      type: Sequelize.DATEONLY,
      allowNull: true, // or false based on your requirement
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('games', 'date');
  },
};

