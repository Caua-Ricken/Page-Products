const express = require('express');
const router = express.Router();

const categoriaRoutes = require("./categoriaRoutes");
router.use('/categoria', categoriaRoutes);

const movimentacaoRoutes = require("./movimentacaoRoutes");
router.use('/movimentacoes', movimentacaoRoutes);

const produtoRoutes = require("./produtoRoutes");
router.use('/produto', produtoRoutes);

module.exports = router;