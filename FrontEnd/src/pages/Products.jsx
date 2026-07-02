import "../../public/css/PagesCss/products.css";
import { useState, useEffect } from "react";
import ModalProducts from "../components/ModalProducts";

function Products() {
  const [open, setopen] = useState(false);
  const [produto, setProduto] = useState(null);
  const [modo, setModo] = useState("");


  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categorias, setCategorias] = useState([]);

  const [categoriaFiltro, setCategoriaFiltro] = useState("");

  const buscarCategorias = async () => {
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/api/categoria");
      const data = await res.json();
      setCategorias(data);

    } catch (error) {
      console.log("erro ao carregar dados:", error)

    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    buscarCategorias();
    buscarProdutos();
  }, []);

  const buscarProdutos = async () => {
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/api/produto");
      const data = await res.json();
      setProdutos(data);

    } catch (error) {
      console.log("erro ao carregar dados:", error)

    } finally {
      setLoading(false)
    }
  }


  const deleteProduto = async (id) => {
     const confirmDelete = window.confirm(
      "Deseja realmente excluir este produto? Esta ação também excluirá todas as movimentações relacionadas a ele."
    );

    if (!confirmDelete) return;

    setLoading(true);

    try {
      const res = await fetch(`http://localhost:3000/api/produto/${id}`, {
        method: "DELETE",
      });

      if(!res.ok) {
        throw new Error("Erro ao deletar produto");
      }
      const data = await res.json();
      console.log(data);
      buscarProdutos();

  } catch (error) {
    console.log("erro ao deletar produto:", error);

  } finally {
    setLoading(false);
  }
};


const produtosFiltrados = categoriaFiltro
  ? produtos.filter(
      (produto) => String(produto.categoriaId) === String(categoriaFiltro)
    )
  : produtos;

  return (
    <section className="produtos">

      <div className="produtos-header">

        <div>
          <h2>Produtos</h2>
          <p>Cadastro de produtos vinculados a uma categoria, com preço e estoque atual.</p>
        </div>

        <div className="header-actions">

          <select 
            value={categoriaFiltro}
  onChange={(e) => setCategoriaFiltro(e.target.value)}>
            <option>Todas as categorias</option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
            ))}

          </select>

          <button onClick={() => { setopen(true), setProduto(produto), setModo("criar") }}>+ Novo produto</button>

        </div>

      </div>

      <div className="produtos-table">

        <div className="table-header">
          <span>PRODUTO</span>
          <span>CATEGORIA</span>
          <span>PREÇO</span>
          <span>ESTOQUE</span>
          <span></span>
        </div>

        {produtosFiltrados.length === 0 ? (
          <p className="empty-message">Nenhum produto cadastrado.</p>
        ) : (

          produtosFiltrados.map((produto, index) => (

            <div className="table-row" key={index}>

              <div>
                <strong>{produto.nome}</strong>
                <p>{produto.descricao}</p>
              </div>

              <div>
                <span className="categoria">
                  {produto.categoria}
                </span>
              </div>  

              <strong>{produto.preco}</strong>

              <div className="estoque">
                <span className={`valor ${produto.estoque < 10 ? "baixo" : produto.estoque < 50 ? "medio" : "alto"}`}>
                  {produto.estoque}
                </span>

                {produto.estoque < 10 && (
                  <small>BAIXO</small>
                )}

              </div>

              <div className="actions">
                <button className="edit" onClick={() => { setopen(true), setProduto(produto), setModo("editar") }}>✎</button>
                <button className="delete" onClick={() => deleteProduto(produto.id)}>🗑</button>
              </div>

            </div>

          ))
        )}
      </div>

      <ModalProducts open={open} onClose={() => setopen(false)} onProdutoCadastrado={buscarProdutos} produto={produto} modo={modo} />

    </section>
  );
}

export default Products;
