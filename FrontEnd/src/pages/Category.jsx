import "../../public/css/PagesCss/category.css";
import ModalCategory from "../components/ModalCategory.jsx";
import { useState, useEffect } from "react";

function Category() {
  const [open, setOpen] = useState(false);
  const [modo, setModo] = useState("");
  const [categoria, setCategoria] = useState(null);

  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(false);

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
  }, []);



  const deleteCategoria = async (id) => {
    const confirmDelete = window.confirm(
      "Deseja realmente excluir esta categoria?"
    );

    if (!confirmDelete) return;

    setLoading(true);

    try {
      const res = await fetch(`http://localhost:3000/api/categoria/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();
      console.log(data)

      if (!res.ok) {
        console.log("Erro ao excluir categoria:", data);
        return;
      }

      buscarCategorias();

    } catch (error) {
      console.log("erro ao excluir categoria:", error);
    } finally {
      setLoading(false);
    }
  };





  return (
    <section className="categorias">
      <div className="categorias-header">
        <div>
          <h2>Categorias</h2>
          <p>Agrupe produtos por categoria. Uma categoria pode ter vários produtos.</p>
        </div>

        <button onClick={() => { setOpen(true), setModo("criar") }}>+ Nova categoria</button>
      </div>

      <div className="categorias-table">
        <div className="table-header">
          <span>NOME</span>
          <span>DESCRIÇÃO</span>
          <span>PRODUTOS VINCULADOS</span>
          <span></span>
        </div>

        {categorias.length === 0 ? (
          <p className="empty-message">Nenhuma categoria cadastrada.</p>
        ) : (
          categorias.map((categoria) => (
            <div className="table-row" key={categoria.id}>
              <strong>{categoria.nome}</strong>
              <p>{categoria.descricao}</p>
              <b>
                {categoria.produtos?.length || 0}
              </b>

              <div className="actions">
                <button className="edit" onClick={() => { setOpen(true), setCategoria(categoria), setModo("editar") }}>✎</button>
                <button className="delete" onClick={() => deleteCategoria(categoria.id)}>🗑</button>
              </div>
            </div>
          ))
        )}
      </div>

      <ModalCategory open={open} modo={modo} categoria={categoria} onClose={() => setOpen(false)} onCategoriaCadastrada={buscarCategorias} />
    </section>
  );
}

export default Category;