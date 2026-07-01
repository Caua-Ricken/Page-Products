const { DataTypes } = require("sequelize");
const conn = require("../db/conn");

const Produto = conn.define('produtos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'pro_id'
    },
    nome: {
        type: DataTypes.STRING(80),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
        field: 'pro_nome'
      },
  
      descricao: {
        type: DataTypes.STRING(200),
        allowNull: true,
        field: 'pro_descricao'
      },
  
      preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          min: 0,
        },
        field: 'pro_preco'
      },
  
      estoque: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          min: 0,
        },
        field: 'pro_qes'
      },
    },
    {
      tableName: "produtos",
      timestamps: false,
    }
)

module.exports = Produto;
