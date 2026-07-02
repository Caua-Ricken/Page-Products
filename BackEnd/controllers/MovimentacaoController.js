const { Movimentacoes, Produto } = require("../models/index");

module.exports = {

    async createMovimentacao(req, res) {
        const { produto, tipo, quantidade, data, observacao } = req.body;

        try {
            const novaMovimentacao = await Movimentacoes.create({
                produto, tipo, quantidade, data, observacao
            })
            res.status(201).json(novaMovimentacao);
        } catch (error) {
            console.error("Erro ao criar movimentação:", error);
            res.status(500).json({ error: "Erro ao criar movimentação" });
        }
    },


}