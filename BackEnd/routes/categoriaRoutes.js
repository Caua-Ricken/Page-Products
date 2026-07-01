const express = require('express');
const router = express.Router();

const CategoriaController = require("../controllers/CategoriaController");

router.post('/', CategoriaController.cadastrarCategoria);

router.put('/editar/:id', CategoriaController.editarCategoria);

router.get('/', CategoriaController.buscarCategorias);

router.delete('/:id', CategoriaController.deleteCategoria);

module.exports = router;