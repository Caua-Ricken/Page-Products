const express = require('express');
const router = express.Router();

const ProdutoController = require("../controllers/ProdutoController");

router.post('/', ProdutoController.cadastrarProduto);

router.put('/editar/:id', ProdutoController.editarProduto);

router.get('/', ProdutoController.listarProdutos);

router.delete('/:id', ProdutoController.deletarProduto);

module.exports = router;