import "../../public/css/ComponentsCss/modalCategory.css";
import { useEffect, useState } from "react";

function ModalCategory({
  open,
  modo,
  categoria,
  onClose,
  onCategoriaCadastrada,
}) {
  if (!open) return null;

  const titulo = modo === "editar" ? "Editar categoria" : "Nova categoria";
  const textoBotao = modo === "editar" ? "Salvar alterações" : "Criar categoria";

    const [dados, setDados] = useState({
      nome: "",
      descricao: "",
    });
  
    const [loading, setLoading] = useState(false);

   const handleChanche = (e) => {
    setDados({
      ...dados,
      [e.target.name]: e.target.value
    });
  };


  useEffect(() => {
  if (modo === "editar" && categoria) {
    setDados({
      nome: categoria.nome || "",
      descricao: categoria.descricao || "",
    });
  } else {
    setDados({
      nome: "",
      descricao: "",
    });
  }
}, [categoria, modo, open]);

const salvarCategoria = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const url =
      modo === "editar"
        ? "https://todo-list-ajcm.onrender.com/api/categoria/editar/${categoria.id}"
        : "https://todo-list-ajcm.onrender.com/api/categoria";

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
    });

    onClose();
    onCategoriaCadastrada();

  } catch (error) {
    console.log("Erro ao salvar categoria:", error);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="modal-overlay">
      <div className="categoria-modal">
        <div className="modal-header">
          <h2>{titulo}</h2>
          <button onClick={onClose}>×</button>
        </div>

        <form onSubmit={salvarCategoria} className="modal-form">
          <div className="form-group">
            <label>NOME</label>
            <input
              name="nome"
              type="text"
              placeholder="Ex.: Bebidas & Frigobar"
              value={dados.nome}
              onChange={handleChanche}
              required
            />
          </div>

          <div className="form-group">
            <label>DESCRIÇÃO</label>
            <textarea
              name="descricao"
              placeholder="Opcional"
              value={dados.descricao}
              onChange={handleChanche}
              required
            ></textarea>
          </div>

          <div className="modal-actions">
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
}

export default ModalCategory;