import "../../public/css/ComponentsCss/modalMovimentacoes.css";
import { useState, useEffect } from "react";

function ModalMovimentacoes({ open, onClose, onSubmit }) {
  if (!open) return null;

  const [dados, setDados] = useState([]);

  const [loading, setLoading] = useState(false);
  const [produto, setProduto] = useState({
    produto: "",
    tipo: "entrada",
    quantidade: 1,
    data: new Date().toISOString().split("T")[0],
    observacao: "",
  });

  const handleChange = (e) => {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
    })
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("https://todo-list-ajcm.onrender.com/api/movimentacoes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(produto),
      });

      const data = await res.json();

      if (!res.ok) {
      console.log("Erro da API:", data);
      return;
    }

    setProduto({
      produto: "",
      tipo: "entrada",
      quantidade: 1,
      data: new Date().toISOString().split("T")[0],
      observacao: "",
    });

    onClose();

    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const buscarProdutos = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://todo-list-ajcm.onrender.com/api/produto/buscar");
      const data = await res.json();

      setDados(data);

      if (!res.ok) {
        console.log("Erro da API:", data);
      }
  } catch (error) {
      console.error("Erro ao buscar produtos:", error);
  } finally {
      setLoading(false);
    }
};

useEffect(() => {
  if (open) {
    buscarProdutos();
  }
}, [open]);

  

  return (
    <div className="modal-mov-overlay">
      <div className="modal-mov">
        <div className="modal-mov-header">
          <h2>Nova movimentação</h2>
          <button type="button" onClick={onClose}>×</button>
        </div>

        <form className="modal-mov-form" onSubmit={handleFormSubmit}>
          <div className="mov-form-group">
            <label>PRODUTO</label>
            <select name="produto" value={produto.produto} onChange={handleChange}>
              <option value="">Selecione um produto</option>
              {dados.map((item) => (
                <option key={item.id} value={item.nome}>
                  {item.nome}
                </option>
                ))}
            </select>
          </div>

          <div className="mov-form-row">
            <div className="mov-form-group">
              <label>TIPO</label>
              <select name="tipo" value={produto.tipo} onChange={handleChange}>
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
                value={produto.quantidade} 
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mov-form-group">
            <label>DATA</label>
            <input
              name="data"
              type="date"
              value={produto.data}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mov-form-group">
            <label>OBSERVAÇÃO</label>
            <textarea
              name="observacao"
              value={produto.observacao}
              onChange={handleChange}
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