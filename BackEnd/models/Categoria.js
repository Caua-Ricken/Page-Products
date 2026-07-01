const { DataTypes } = require('sequelize');
const conn = require("../db/conn");

const Categoria = conn.define('categoria', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'cat_id'
    },
    nome: {
        type: DataTypes.STRING(60),
        allowNull: false,
        field: 'cat_nome'
      },
  
      descricao: {
        type: DataTypes.STRING(200),
        allowNull: true,
        field: 'cat_descricao'
      },
  
      criado_em: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        field: 'cat_cem'
      },
    },
    {
      tableName: "categorias",
      timestamps: false,
    }
)

module.exports = Categoria;