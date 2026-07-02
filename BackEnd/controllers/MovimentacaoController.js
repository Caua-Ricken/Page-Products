const { Movimentacoes, Produto } = require("../models/index");

module.exports = {

    async createMovimentacao(req, res) {
        const { tipo, quantidade, data, observacao } = req.body;
        const produtoId = Number(req.body.produtoId);
        const qtd = Number(quantidade);

        try {
            const produto = await Produto.findByPk(produtoId);

            if (!produto) {
                return res.status(404).json({ error: "Produto não encontrado" });
            }

            if (tipo === "saida" && produto.estoque < qtd) {
                return res.status(400).json({
                    error: "Estoque insuficiente para realizar a saída.",
                });
            }

            const novaMovimentacao = await Movimentacoes.create({
                produtoId,
                tipo,
                quantidade: qtd,
                data,
                observacao,
            });

            if (tipo === "entrada") {
                produto.estoque += qtd;
            }

            if (tipo === "saida") {
                produto.estoque -= qtd;
            }

            await produto.save();

            res.status(201).json({
                message: "Movimentação criada e estoque atualizado com sucesso",
                movimentacao: novaMovimentacao,
                estoqueAtual: produto.estoque,
            });
        } catch (error) {
            console.error("Erro ao criar movimentação:", error);
            res.status(500).json({ error: "Erro ao criar movimentação" });
        }
    },

    async getAllMovimentacoes(req, res) {
        try {
            const movimentacoes = await Movimentacoes.findAll({
                include: [{ model: Produto, attributes: ['nome'] }]
            });
            res.status(200).json(movimentacoes);
        } catch (error) {
            console.error("Erro ao buscar movimentações:", error);
            res.status(500).json({ error: "Erro ao buscar movimentações" });
        }
    },

    async deletarMovimentacao(req, res) {
        const { id } = req.params;

        try {
            const movimentacao = await Movimentacoes.findByPk(id);

            if (!movimentacao) {
                return res.status(404).json({
                    error: "Movimentação não encontrada",
                });
            }

            const produto = await Produto.findByPk(movimentacao.produtoId);

            if (!produto) {
                return res.status(404).json({
                    error: "Produto não encontrado",
                });
            }

            if (movimentacao.tipo === "entrada") {
                produto.estoque -= movimentacao.quantidade;
            } else if (movimentacao.tipo === "saida") {
                produto.estoque += movimentacao.quantidade;
            }

            await produto.save();

            await movimentacao.destroy();

            return res.status(200).json({
                message: "Movimentação excluída e estoque atualizado com sucesso.",
            });

        } catch (error) {
            console.error("Erro ao excluir movimentação:", error);

            return res.status(500).json({
                error: "Erro ao excluir movimentação",
            });
        }
    },

}