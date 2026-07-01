import "../../public/css/ComponentsCss/modalMovimentacoes.css";

function ModalMovimentacoes({ open, onClose, onSubmit }) {
  if (!open) return null;

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const dados = {
      produto: formData.get("produto"),
      tipo: formData.get("tipo"),
      quantidade: formData.get("quantidade"),
      data: formData.get("data"),
      observacao: formData.get("observacao"),
    };

    onSubmit(dados);
  }

  return (
    <div className="modal-mov-overlay">
      <div className="modal-mov">
        <div className="modal-mov-header">
          <h2>Nova movimentação</h2>
          <button type="button" onClick={onClose}>×</button>
        </div>

        <form className="modal-mov-form" onSubmit={handleSubmit}>
          <div className="mov-form-group">
            <label>PRODUTO</label>
            <select name="produto" defaultValue="Água Mineral 500ml">
              <option>Água Mineral 500ml (estoque: 96)</option>
              <option>Detergente Multiuso 1L (estoque: 18)</option>
              <option>Kit Higiene Premium (estoque: 3)</option>
              <option>Refrigerante Lata 350ml (estoque: 7)</option>
              <option>Sabonete Líquido Refil 5L (estoque: 4)</option>
              <option>Toalha de Banho Branca (estoque: 42)</option>
            </select>
          </div>

          <div className="mov-form-row">
            <div className="mov-form-group">
              <label>TIPO</label>
              <select name="tipo" defaultValue="entrada">
                <option value="entrada">Entrada</option>
                <option value="saida">Saída</option>
              </select>
            </div>

            <div className="mov-form-group">
              <label>QUANTIDADE</label>
              <input
                name="quantidade"
                type="number"
                min="1"
                defaultValue="1"
                required
              />
            </div>
          </div>

          <div className="mov-form-group">
            <label>DATA</label>
            <input
              name="data"
              type="date"
              defaultValue="2026-06-29"
              required
            />
          </div>

          <div className="mov-form-group">
            <label>OBSERVAÇÃO</label>
            <textarea
              name="observacao"
              placeholder="Opcional"
            ></textarea>
          </div>

          <div className="modal-mov-actions">
            <button type="button" className="btn-cancelar" onClick={onClose}>
              Cancelar
            </button>

            <button type="submit" className="btn-salvar">
              Registrar movimentação
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalMovimentacoes;