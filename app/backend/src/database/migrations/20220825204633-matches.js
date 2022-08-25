'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('matches', {
      id: { 
        type: Sequelize.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true,
      },
      homeTeam: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        field: 'home_team',
        references: {
          model: 'teams',
          key: 'id',
        },
      },
      homeTeamGoals: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        field: 'home_team_goals'
      },
      awayTeam: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        field: 'away_team',
        references: {
          model: 'teams',
          key: 'id',
        },
      },
      awayTeamGoals: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        field: 'away_team_goals'
      },
      inProgress: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        field: 'in_progress'
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('matches');
  }
};