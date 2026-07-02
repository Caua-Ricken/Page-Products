import "../../public/css/PagesCss/dashboard.css";
import { useEffect, useState } from "react";

function Dashboard() {
  const [categorias, setCategorias] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(false);

  const buscarDados = async () => {
    setLoading(true);

    try {
      const [resCategorias, resProdutos] = await Promise.all([
        fetch("https://todo-list-ajcm.onrender.com/api/categoria"),
        fetch("https://todo-list-ajcm.onrender.com/api/produto"),
      ]);

      const dataCategorias = await resCategorias.json();
      const dataProdutos = await resProdutos.json();

      setCategorias(dataCategorias);
      setProdutos(dataProdutos);
    } catch (error) {
      console.error("Erro ao buscar dados do dashboard:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    buscarDados();
  }, []);

  const totalCategorias = categorias.length;
  const totalProdutos = produtos.length;

  const totalEstoque = produtos.reduce((total, produto) => {
    return total + Number(produto.estoque || 0);
  }, 0);

  const produtosBaixoEstoque = produtos.filter((produto) => {
    return Number(produto.estoque) < 5;
  });

  if (loading) {
    return <p>Carregando dashboard...</p>;
  }

  return (
    <section className="dashboard">
      <div className="title">
        <h2>Visão geral</h2>
        <p>Resumo do catálogo e do estoque atual.</p>
      </div>

      <div className="cards">
        <div className="card">
          <span>CATEGORIAS</span>
          <strong>{totalCategorias}</strong>
        </div>

        <div className="card">
          <span>PRODUTOS</span>
          <strong>{totalProdutos}</strong>
        </div>

        <div className="card">
          <span>ITENS EM ESTOQUE</span>
          <strong>{totalEstoque}</strong>
          <p>soma de todas as unidades</p>
        </div>

        <div className="card">
          <span>ESTOQUE BAIXO</span>
          <strong className="red">{produtosBaixoEstoque.length}</strong>
          <p>produto(s) abaixo de 5 un.</p>
        </div>
      </div>

      <div className="alerts">
        <h3>⚠ Alertas de estoque baixo</h3>
        <span className="small">(menos de 5 unidades)</span>

        <div className="alert-list">
          {produtosBaixoEstoque.length > 0 ? (
            produtosBaixoEstoque.map((produto) => (
              <div className="alert-item" key={produto.id}>
                <div>
                  <h4>{produto.nome}</h4>
                  <p>{produto.categoria || "Sem categoria"}</p>
                </div>

                <strong>{produto.estoque} un.</strong>
              </div>
            ))
          ) : (
            <p>Nenhum produto com estoque baixo.</p>
          )}
        </div>
      </div>
      {loading && (
        <div className="loading-container">
          <p className="loading-message">Carregando...</p>
        </div>
      )}
    </section>
  );
}

export default Dashboard;