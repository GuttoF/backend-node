const { DataTypes } = require('sequelize');
const { sequelize } = require('../core/sequelize');

const Agenda = sequelize.define('Agenda', {
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  celular: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
  },
  rua: {
    type: DataTypes.STRING(100),
  },
  numero: {
    type: DataTypes.STRING(10),
  },
  bairro: {
    type: DataTypes.STRING(50),
  },
  cidade: {
    type: DataTypes.STRING(50),
  },
  estado: {
    type: DataTypes.STRING(2),
  },
  cep: {
    type: DataTypes.STRING(10),
  },
  complemento: {
    type: DataTypes.STRING(100),
  },
}, {
  tableName: 'Agendas'
});

module.exports = Agenda;