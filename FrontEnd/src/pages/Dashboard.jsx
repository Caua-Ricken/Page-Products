import "../../public/css/PagesCss/dashboard.css";

function Dashboard() {
  const produtosBaixoEstoque = [
    {
      nome: "Kit Higiene Premium",
      categoria: "Amenities de Quarto",
      quantidade: 3,
    },
    {
      nome: "Sabonete Líquido Refil 5L",
      categoria: "Limpeza & Lavanderia",
      quantidade: 4,
    },
  ];

  return (
    <section className="dashboard">
      <div className="title">
        <h2>Visão geral</h2>
        <p>Resumo do catálogo e do estoque atual.</p>
      </div>

      <div className="cards">
        <div className="card">
          <span>CATEGORIAS</span>
          <strong>3</strong>
        </div>

        <div className="card">
          <span>PRODUTOS</span>
          <strong>6</strong>
        </div>

        <div className="card">
          <span>ITENS EM ESTOQUE</span>
          <strong>170</strong>
          <p>soma de todas as unidades</p>
        </div>

        <div className="card">
          <span>ESTOQUE BAIXO</span>
          <strong className="red">2</strong>
          <p>produto(s) abaixo de 5 un.</p>
        </div>
      </div>

      <div className="alerts">
        <h3>⚠ Alertas de estoque baixo</h3>
        <span className="small">(menos de 5 unidades)</span>

        <div className="alert-list">
          {produtosBaixoEstoque.map((produto, index) => (
            <div className="alert-item" key={index}>
              <div>
                <h4>{produto.nome}</h4>
                <p>{produto.categoria}</p>
              </div>

              <strong>{produto.quantidade} un.</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
