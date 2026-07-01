import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo-area">
          <div className="logo-icon">
            <span></span>
            <span></span>
          </div>

          <div>
            <h1>Catálogo·Estoque</h1>
            <p>painel de produtos & movimentações</p>
          </div>
        </div>

        <nav className="nav">
          <NavLink to="/" end
          className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>
            VISÃO GERAL
          </NavLink>

          <NavLink to="/categorias" 
          className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>
            CATEGORIAS
          </NavLink>

          <NavLink to="/produtos"
          className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>
            PRODUTOS
          </NavLink>

          <NavLink to="/movimentacoes"
          className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>
            MOVIMENTAÇÕES
          </NavLink>
        </nav>

      </header>

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}

export default App;