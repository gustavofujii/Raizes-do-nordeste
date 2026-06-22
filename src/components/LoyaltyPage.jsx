export default function LoyaltyPage({
  cartTotal,
  lgpdConsent,
  setLgpdConsent,
  loyaltyId,
  setLoyaltyId,
  showToast,
}) {
  const estimatedPoints = Math.floor(cartTotal);

  function savePreference() {
    const message = lgpdConsent
      ? "Preferência de fidelidade salva."
      : "Consentimento LGPD desativado.";

    showToast(message);
  }

  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="eyebrow">Etapa 4</p>
        <h1>Fidelidade e LGPD</h1>
        <p>Esta área usa dados fictícios e pede consentimento antes de habilitar a simulação.</p>
      </div>

      <div className="loyalty-layout">
        <div className="loyalty-panel">
          <h2>Clube Raízes</h2>
          <p>Ganhe pontos simulados em pedidos de retirada e acompanhe benefícios por unidade.</p>

          <label>
            Identificador fictício
            <input
              type="text"
              value={loyaltyId}
              placeholder="Ex.: cliente-teste-01"
              onChange={(event) => setLoyaltyId(event.target.value)}
            />
          </label>

          <label className="toggle-row">
            <input
              type="checkbox"
              checked={lgpdConsent}
              onChange={(event) => setLgpdConsent(event.target.checked)}
            />
            Aceito participar da simulação de fidelidade com dados fictícios.
          </label>

          <button className="primary-action" type="button" onClick={savePreference}>
            Salvar preferência
          </button>
        </div>

        <aside className={`points-panel ${lgpdConsent ? "is-enabled" : ""}`}>
          <span>Pontos estimados</span>
          <strong>{lgpdConsent ? estimatedPoints : "--"}</strong>
          <p>
            {lgpdConsent
              ? "Consentimento registrado no estado local do protótipo."
              : "Ative o consentimento para visualizar pontos."}
          </p>
        </aside>
      </div>
    </section>
  );
}
