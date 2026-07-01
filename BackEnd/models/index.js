const Categoria = require("./Categoria");
const Produto = require("./Produtos")
const Movimentacoes = require("./Movimentacoes")

//produtos
Produto.belongsTo(Categoria, {
  foreignKey: {
    name: "categoriaId",
    field: "pro_categoria_id",
  },
});

Categoria.hasMany(Produto, {
  foreignKey: {
    name: "categoriaId",
    field: "pro_categoria_id",
  },
});

  //movimentacoes
  Movimentacoes.belongsTo(Produto, {
    foreignKey: {
      name: "produtoId",
      field: "mov_produto_id",
    },
  });
  
  Produto.hasMany(Movimentacoes, {
    foreignKey: {
      name: "produtoId",
      field: "mov_produto_id",
    },
  });
  

module.exports = {
    Categoria,
    Produto,
    Movimentacoes
};