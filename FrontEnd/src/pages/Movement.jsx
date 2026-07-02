import "../../public/css/PagesCss/movement.css";
import ModalMovimentacoes from "../components/ModalMovimentacoes";
import { useState, useEffect } from "react";

function Movement() {
  const [open, setOpen] = useState(false);
  const [movimentacoes, setMovimentacoes] = useState([]);
  const [loading, setLoading] = useState(false);

  const buscarMovimentações = async () => {
    setLoading(true);

    try {
      const res = await fetch("https://localhost:3000/api/movimentacoes");
      if (!res.ok) {
        throw new Error("Erro ao buscar movimentações");
      }
      
      const data = await res.json();
      setMovimentacoes(data);
      console.log("Movimentações:", data);

    } catch (error) {
      console.error("Erro ao buscar movimentações:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    buscarMovimentações();
  }, []);

  return (
    <section className="movimentacoes">
      <div className="movimentacoes-top">
        <div>
          <h2>Movimentações de estoque</h2>
          <p>
            Toda entrada ou saída ajusta automaticamente o estoque do produto.
          </p>
        </div>

        <div className="movimentacoes-actions">
          <select>
            <option>Entradas e saídas</option>
            <option>Entradas</option>
            <option>Saídas</option>
          </select>

          <button onClick={() => setOpen(true)}>+ Nova movimentação</button>
        </div>
      </div>


      <div className="table-box">
        <table>
          <thead>
            <tr>
              <th>DATA</th>
              <th>PRODUTO</th>
              <th>TIPO</th>
              <th>QUANTIDADE</th>
              <th>OBSERVAÇÃO</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
  {movimentacoes.length > 0 ? (
    movimentacoes.map((item) => (
      <tr key={item.id}>
        <td>{item.data}</td>
        <td>{item.produto?.nome || "Produto não encontrado"}</td>
        <td>
          <span
            className={`badge ${
              item.tipo === "ENTRADA" ? "entrada" : "saida"
            }`}
          >
            {item.tipo}
          </span>
        </td>
        <td>{item.quantidade}</td>
        <td>{item.observacao}</td>
        <td>
          <button className="delete-btn">🗑</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="6" className="empty-table">
        Nenhuma movimentação cadastrada.
      </td>
    </tr>
  )}
</tbody>
        </table>
      </div>
      <ModalMovimentacoes open={open} onClose={() => setOpen(false)} />
    </section>
  );
}

export default Movement;