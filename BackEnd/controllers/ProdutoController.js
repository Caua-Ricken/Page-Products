const { Produto, Categoria } = require("../models/index");

module.exports = {

    async cadastrarProduto(req, res) {

        const { nome, descricao, categoriaId, estoque, preco } = req.body;

        try {

            const cadastrar = await Produto.create({
                nome, categoriaId, descricao, preco, estoque
            })
            res.status(201).json(cadastrar);

        } catch (error) {
            console.error("Erro ao criar produto:", error);
            res.status(500).json({ error: "Erro ao criar produto" });
        }
    },

    async listarProdutos(req, res) {
        try {
            const produtos = await Produto.findAll({ raw: true });
            const categorias = await Categoria.findAll({ raw: true });

            const produtosComCategoria = produtos.map((produto) => {
                const categoria = categorias.find(
                    (cat) => cat.id === produto.categoriaId
                );

                return {
                    ...produto,
                    categoria: categoria ? categoria.nome : "Sem categoria",
                };
            });

            res.status(200).json(produtosComCategoria);
        } catch (error) {
            console.error("Erro ao listar produtos:", error);
            res.status(500).json({ error: "Erro ao listar produtos" });
        }
    },

    async deletarProduto(req, res) {
        const { id } = req.params;

        try {
            const produto = await Produto.findByPk(id);

            if (!produto) {
                return res.status(404).json({ error: "Produto não encontrado" });
            }

            await produto.destroy();
            res.status(200).json({ message: "Produto deletado com sucesso" });
        } catch (error) {
            console.error("Erro ao deletar produto:", error);
            res.status(500).json({ error: "Erro ao deletar produto" });
        }
    },

    async editarProduto(req,res) {
        const { id } = req.params;
        const { nome, descricao, categoriaId, estoque, preco } = req.body;

        try {
            const produto = await Produto.findByPk(id);

            if (!produto) {
                return res.status(404).json({ error: "Produto não encontrado" });
            }

            await produto.update({
                nome,
                descricao,
                categoriaId,
                estoque,
                preco
            });

            res.status(200).json(produto);
        } catch (error) {
            console.error("Erro ao editar produto:", error);
            res.status(500).json({ error: "Erro ao editar produto" });
        }
    },

    async buscarProduto(req, res) {

        try {
            const produtos = await Produto.findAll({ raw: true });
            res.status(200).json(produtos);
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
            res.status(500).json({ error: "Erro ao buscar produtos" });
        }
    },
    


}