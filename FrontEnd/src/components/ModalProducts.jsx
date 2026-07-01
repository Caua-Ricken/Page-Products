import { useState, useEffect } from "react";
import "../../public/css/ComponentsCss/modalProducts.css";

const ModalProducts = ({ open, modo, produto, onClose, onProdutoCadastrado }) => {
  if (!open) return null;

  const titulo = modo === "editar" ? "Editar produto" : "Novo produto";
  const textoBotao = modo === "editar" ? "Salvar alterações" : "Criar produto";

  const [categorias, setCategorias] = useState([]);

  const buscarCategorias = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/categoria");
      const data = await res.json();

      setCategorias(data);
    } catch (error) {
      console.log("Erro ao buscar categorias:", error);
    }
  };

  useEffect(() => {
    if (open) {
      buscarCategorias();
    }
  }, [open]);



  const [dados, setDados] = useState({
    nome: "",
    descricao: "",
    categoriaId: "",
    estoque: "",
    preco: "",
  });

  const [loading, setLoading] = useState(false);


  const handleChanche = (e) => {
    setDados({
      ...dados,
      [e.target.name]: e.target.value
    });
  };


    useEffect(() => {
  if (modo === "editar" && produto) {
    setDados({
      nome: produto.nome || "",
      descricao: produto.descricao || "",
    });
  } else {
    setDados({
      nome: "",
      descricao: "",
      categoriaId: "",
      estoque: "",
      preco: "",
    });
  };
}, [produto, modo, open]);


  const salvarProduto = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const url =
      modo === "editar"
        ? `http://localhost:3000/api/produto/editar/${produto.id}`
        : "http://localhost:3000/api/produto";

    const method = modo === "editar" ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    });

    const data = await res.json();

    if (!res.ok) {
      console.log("Erro da API:", data);
      return;
    }

    setDados({
      nome: "",
      descricao: "",
      categoriaId: "",
      estoque: "",
      preco: "",
    });

    onClose();
    onProdutoCadastrado();

  } catch (error) {
    console.log("Erro ao salvar produto:", error);
  } finally {
    setLoading(false);
  }
};



  return (
    <div className="modal-products-overlay">
      <div className="modal-products">
        <div className="modal-products-header">
          <h2>{titulo}</h2>
          <button type="button" onClick={onClose}>×</button>
        </div>

        <form className="modal-products-form" onSubmit={salvarProduto}>
          <div className="products-form-group">
            <label>NOME</label>
            <input
              name="nome"
              placeholder="Ex.: Água Mineral 500ml"
              value={dados.nome}
              onChange={handleChanche}
              required
            />
          </div>

          <div className="products-form-group">
            <label>DESCRIÇÃO</label>
            <textarea
              name="descricao"
              placeholder="Opcional"
              value={dados.descricao}
              onChange={handleChanche}
            />
          </div>

          <div className="products-form-group">
            <label>CATEGORIA</label>
            <select
              name="categoriaId"
              value={dados.categoriaId}
              onChange={handleChanche}
              required
            >
              <option value="">Selecione</option>

              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.nome}
                </option>
              ))}
            </select>
          </div>

          <div className="products-form-row">
            <div className="products-form-group">
              <label>PREÇO (R$)</label>
              <input
                name="preco"
                placeholder="0,00"
                value={dados.preco}
                onChange={handleChanche}
                required
              />

            </div>

            <div className="products-form-group">
              <label>ESTOQUE INICIAL</label>
              <input
                name="estoque"
                type="number"
                min="0"
                placeholder="0"
                value={dados.estoque}
                onChange={handleChanche}
                required
              />
            </div>
          </div>

          <div className="modal-products-actions">
            <button type="button" className="btn-cancelar" onClick={onClose}>
              Cancelar
            </button>

            <button type="submit" className="btn-salvar">
              {textoBotao}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalProducts;