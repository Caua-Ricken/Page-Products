const express = require('express');
const router = express.Router();

const MovimentacaoController = require('../controllers/MovimentacaoController');

router.post('/', MovimentacaoController.createMovimentacao);

router.get('/', MovimentacaoController.getAllMovimentacoes);

router.delete('/:id', MovimentacaoController.deletarMovimentacao);

module.exports = router;