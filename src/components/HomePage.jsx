const flowItems = [
  ["01", "Selecionar unidade", "Cada loja pode ter regras, horários e produtos próprios."],
  ["02", "Montar pedido", "Produtos são filtrados pela disponibilidade da unidade escolhida."],
  ["03", "Acompanhar status", "O pedido simula estados de preparo até a retirada."],
  ["04", "Fidelizar com consentimento", "A área de pontos só é ativada após aceite LGPD."],
];

export default function HomePage({ navigate, selectedUnit }) {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Atendimento multicanal para pedidos regionais</p>
          <h1>Raízes do Nordeste</h1>
          <p>
            Protótipo front-end responsivo para cardápios por unidade, retirada, carrinho,
            fidelidade e consentimento LGPD.
          </p>
          <div className="hero-actions">
            <button className="primary-action" type="button" onClick={() => navigate("unidades")}>
              Escolher unidade
            </button>
            <button className="secondary-action" type="button" onClick={() => navigate("cardapio")}>
              Ver cardápio
            </button>
          </div>
        </div>

        <div className="brand-panel" aria-label="Resumo operacional">
          {selectedUnit.imageUrl && <img src={selectedUnit.imageUrl} alt="" />}
          <div className="brand-panel-copy">
            <span>Unidade ativa</span>
            <strong>{selectedUnit.name}</strong>
            <small>
              {selectedUnit.city} | {selectedUnit.hours}
            </small>
          </div>
        </div>
      </section>

      <section className="content-band">
        <div className="section-heading">
          <p className="eyebrow">Fluxo principal</p>
          <h2>Do cardápio à retirada</h2>
        </div>

        <div className="feature-grid">
          {flowItems.map(([number, title, text]) => (
            <article className="feature-card" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
