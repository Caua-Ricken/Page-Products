const { Categoria, Produto } = require("../models/index");

module.exports = {

    async cadastrarCategoria(req, res) {
        const { nome, descricao } = req.body;

        try {
            const cadastrar = await Categoria.create({
                nome, descricao
            })
            res.status(201).json(cadastrar);

        } catch (error) {
            console.error("Erro ao criar produto:", error);
            res.status(500).json({ error: "Erro ao criar produto" });
        }
    },

    async buscarCategorias(req, res) {

        try {
            const buscarCategorias = await Categoria.findAll({
                include: {
                    model: Produto,
                    attributes: ["id"],
                },
            });
            res.json(buscarCategorias);

        } catch (error) {
            console.error("Erro ao listar categorias:", error);
            res.status(500).json({ error: "Erro ao listar categorias" });
        }
    },

    async deleteCategoria(req, res) {
  const { id } = req.params;

  try {
    const categoria = await Categoria.findByPk(id);

    if (!categoria) {
      return res.status(404).json({
        error: "Categoria não encontrada",
      });
    }

    const produtoVinculado = await Produto.findOne({
      where: { categoriaId: id },
    });

    if (produtoVinculado) {
      return res.status(400).json({
        error: "Não é possível excluir esta categoria, pois existem produtos vinculados a ela.",
      });
    }

    await categoria.destroy();

    return res.status(200).json({
      message: "Categoria excluída com sucesso.",
    });

  } catch (error) {
    console.error("Erro ao excluir categoria:", error);

    return res.status(500).json({
      error: "Erro ao excluir categoria",
    });
  }
},

    async editarCategoria(req, res) {
        const { id } = req.params;
        const { nome, descricao } = req.body;

        try {
            const categoria = await Categoria.findByPk(id);

            if (!categoria) {
                return res.status(404).json({ error: "Categoria não encontrada" });
            }

            await Categoria.update({ nome, descricao }, { where: { id: id } });
            res.json({ message: "Categoria atualizada com sucesso" });
        } catch (error) {
            console.error("Erro ao editar categoria:", error);
            res.status(500).json({ error: "Erro ao editar categoria" });
        }
    },


}