import { units } from "../data.js";

export default function UnitsPage({ selectedUnitId, selectUnit }) {
  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="eyebrow">Etapa 1</p>
        <h1>Seleção de unidade</h1>
        <p>Escolha a loja para ajustar cardápio, regras locais e canais de atendimento.</p>
      </div>

      <div className="unit-grid">
        {units.map((unit) => {
          const selected = unit.id === selectedUnitId;

          return (
            <article className={`unit-card ${selected ? "is-selected" : ""}`} key={unit.id}>
              <div className="unit-media">
                {unit.imageUrl ? (
                  <img src={unit.imageUrl} alt={unit.name} />
                ) : (
                  <span>{unit.name}</span>
                )}
              </div>

              <div>
                <h2>{unit.name}</h2>
                <p>{unit.city}</p>
              </div>

              <dl>
                <div>
                  <dt>Atendimento</dt>
                  <dd>{unit.channel}</dd>
                </div>
                <div>
                  <dt>Horário</dt>
                  <dd>{unit.hours}</dd>
                </div>
                <div>
                  <dt>Regra local</dt>
                  <dd>{unit.rules}</dd>
                </div>
              </dl>

              <ul className="tag-list">
                {unit.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <button className="primary-action" type="button" onClick={() => selectUnit(unit.id)}>
                {selected ? "Unidade selecionada" : "Selecionar"}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
