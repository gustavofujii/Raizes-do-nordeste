const technicalSections = [
  {
    title: "Requisitos atendidos",
    items: [
      "Seleção de unidade com regras locais.",
      "Cardápio filtrado por disponibilidade.",
      "Detalhes de produto, carrinho e status de pedido.",
      "Consentimento LGPD antes da fidelidade.",
      "Falha simulada no pagamento externo.",
    ],
  },
  {
    title: "Arquitetura front-end",
    items: [
      "React com Vite.",
      "Dados simulados separados em src/data.js.",
      "Navegação por hash para manter o protótipo leve.",
      "Componentes reutilizáveis em src/components.",
    ],
  },
  {
    title: "Limitações",
    items: [
      "Sem back-end, autenticação ou pagamento real.",
      "Consentimento salvo apenas em memória durante a sessão.",
      "Status do pedido é temporizado e simulado.",
    ],
  },
];

function renderTechnicalItem(item) {
  if (!item.includes("src/")) return item;

  const [before, pathWithRest] = item.split("src/");
  const [path, after] = pathWithRest.split(".");

  return (
    <>
      {before}
      <code>src/{path}</code>
      .{after}
    </>
  );
}

export default function TechnicalPage() {
  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="eyebrow">Documentação no protótipo</p>
        <h1>Decisões técnicas</h1>
        <p>Resumo dos requisitos atendidos, limitações e próximos passos.</p>
      </div>

      <div className="tech-grid">
        {technicalSections.map((section) => (
          <article key={section.title}>
            <h2>{section.title}</h2>
            <ul>
              {section.items.map((item) => (
                <li key={item}>{renderTechnicalItem(item)}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
