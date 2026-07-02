const { Movimentacoes, Produto } = require("../models/index");

module.exports = {

    async createMovimentacao(req, res) {
        const { tipo, quantidade, data, observacao } = req.body;
        const produtoId = Number(req.body.produtoId); 

        try {
            const novaMovimentacao = await Movimentacoes.create({
                produtoId, tipo, quantidade, data, observacao
            })
            res.status(201).json(novaMovimentacao);
        } catch (error) {
            console.error("Erro ao criar movimentação:", error);
            res.status(500).json({ error: "Erro ao criar movimentação" });
        }
    },


}