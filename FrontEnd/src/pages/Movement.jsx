import { useState } from "react";
import "../../public/css/PagesCss/movement.css";
import ModalMovimentacoes from "../components/ModalMovimentacoes";

function Movement() {
  const [filtro, setFiltro] = useState("todos");
  const [open, setOpen] = useState(false);

  const movimentacoes = [
    { data: "28/06/2026", produto: "Detergente Multiuso 1L", tipo: "saida", quantidade: "6 un.", observacao: "Uso em áreas comuns" },
    { data: "27/06/2026", produto: "Kit Higiene Premium", tipo: "saida", quantidade: "17 un.", observacao: "Reposição em 17 apartamentos" },
    { data: "26/06/2026", produto: "Toalha de Banho Branca", tipo: "saida", quantidade: "8 un.", observacao: "Lavanderia - peças danificadas" },
    { data: "25/06/2026", produto: "Sabonete Líquido Refil 5L", tipo: "saida", quantidade: "6 un.", observacao: "Reposição lavanderia térreo" },
    { data: "19/06/2026", produto: "Detergente Multiuso 1L", tipo: "entrada", quantidade: "24 un.", observacao: "Compra mensal" },
    { data: "17/06/2026", produto: "Toalha de Banho Branca", tipo: "entrada", quantidade: "50 un.", observacao: "Compra inicial" },
    { data: "17/06/2026", produto: "Kit Higiene Premium", tipo: "entrada", quantidade: "20 un.", observacao: "Compra inicial - fornecedor padrão" },
    { data: "09/06/2026", produto: "Sabonete Líquido Refil 5L", tipo: "entrada", quantidade: "10 un.", observacao: "Compra inicial" },
  ];

  const movimentacoesFiltradas =
    filtro === "todos"
      ? movimentacoes
      : movimentacoes.filter((item) => item.tipo === filtro);

  return (
    <section className="movimentacoes">
      <div className="movimentacoes-header">
        <div>
          <h2>Movimentações de estoque</h2>
          <p>Toda entrada ou saída ajusta automaticamente o estoque do produto.</p>
        </div>

        <div className="movimentacoes-actions">
          <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
            <option value="todos">Entradas e saídas</option>
            <option value="entrada">Apenas entradas</option>
            <option value="saida">Apenas saídas</option>
          </select>

          <button onClick={() => setOpen(true)}>+ Nova movimentação</button>
        </div>
      </div>

      <div className="movimentacoes-table">
        <div className="mov-table-header">
          <span>DATA</span>
          <span>PRODUTO</span>
          <span>TIPO</span>
          <span>QUANTIDADE</span>
          <span>OBSERVAÇÃO</span>
          <span></span>
        </div>

        {movimentacoesFiltradas.map((item, index) => (
          <div className="mov-table-row" key={index}>
            <strong>{item.data}</strong>
            <strong>{item.produto}</strong>

            <span className={`tipo ${item.tipo}`}>
              {item.tipo.toUpperCase()}
            </span>

            <strong>{item.quantidade}</strong>
            <p>{item.observacao}</p>

            <div className="mov-actions">
              <button>🗑</button>
            </div>
          </div>
        ))}
      </div>

      <ModalMovimentacoes open={open} onClose={() => setOpen(false)}/>
    </section>
  );
}

export default Movement;