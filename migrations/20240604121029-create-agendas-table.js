'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Agendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      celular: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(100)
      },
      rua: {
        type: Sequelize.STRING(100)
      },
      numero: {
        type: Sequelize.STRING(10)
      },
      bairro: {
        type: Sequelize.STRING(50)
      },
      cidade: {
        type: Sequelize.STRING(50)
      },
      estado: {
        type: Sequelize.STRING(2)
      },
      cep: {
        type: Sequelize.STRING(10)
      },
      complemento: {
        type: Sequelize.STRING(100)
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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Agendas');
  }
};
