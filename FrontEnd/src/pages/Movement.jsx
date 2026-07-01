import "../../public/css/PagesCss/movement.css";

function Movement() {
  return (
    <section className="movimentacoes">
      <div className="movimentacoes-header">
        <div>
          <h2>Movimentações de estoque</h2>
          <p>Controle de entradas e saídas de produtos.</p>
        </div>
      </div>

      <div className="coming-soon">
        <div className="coming-soon-icon">🚧</div>

        <h3>Em breve...</h3>

        <p>
          O módulo de movimentações de estoque está em desenvolvimento e será
          disponibilizado em uma próxima atualização do sistema.
        </p>
      </div>
    </section>
  );
}

export default Movement;