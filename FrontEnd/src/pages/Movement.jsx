import "../../public/css/PagesCss/movement.css";
import ModalMovimentacoes from "../components/ModalMovimentacoes";
import { useState } from "react";

function Movement() {
  const [open, setOpen] = useState(false);
  const [movimentacoes, setMovimentacoes] = useState([]);
  

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

      <div className="movimentacoes-empty">
        <p className="movimentacoes-text">Em Breve!</p>
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
            {movimentacoes.map((item) => (
              <tr key={item.id}>
                <td>{item.data}</td>
                <td>{item.produto}</td>
                <td>
                  <span className={`badge ${item.tipo === "ENTRADA" ? "entrada" : "saida"}`}>
                    {item.tipo}
                  </span>
                </td>
                <td>{item.quantidade}</td>
                <td>{item.observacao}</td>
                <td>
                  <button className="delete-btn">🗑</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ModalMovimentacoes open={open} onClose={() => setOpen(false)} />
    </section>
  );
}

export default Movement;