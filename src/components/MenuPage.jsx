import { currency } from "../utils.js";

export default function MenuPage({
  navigate,
  selectedUnit,
  category,
  setCategory,
  availableProducts,
  filteredProducts,
  addToCart,
}) {
  const categories = ["Todos", ...new Set(availableProducts.map(({ category }) => category))];

  return (
    <section className="page-section">
      <div className="section-heading inline-heading">
        <div>
          <p className="eyebrow">Etapa 2</p>
          <h1>Cardápio de {selectedUnit.name}</h1>
          <p>{selectedUnit.rules}</p>
        </div>
        <button className="secondary-action" type="button" onClick={() => navigate("unidades")}>
          Trocar unidade
        </button>
      </div>

      <div className="filter-bar" aria-label="Filtros de categoria">
        {categories.map((option) => (
          <button
            className={option === category ? "is-active" : ""}
            type="button"
            key={option}
            onClick={() => setCategory(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <article className="product-card" key={product.id}>
            <button
              className="product-media"
              type="button"
              aria-label={`Ver ${product.name}`}
              onClick={() => navigate(`produto/${product.id}`)}
            >
              {product.imageUrl ? (
                <img src={product.imageUrl} alt="" loading="lazy" />
              ) : (
                <span>{product.name}</span>
              )}
            </button>

            <div className="product-body">
              <div>
                <p className="eyebrow">
                  {product.category}
                  {product.seasonal ? " | Sazonal" : ""}
                </p>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
              </div>

              <div className="product-footer">
                <strong>{currency.format(product.price)}</strong>
                <button
                  className="icon-action"
                  type="button"
                  aria-label={`Adicionar ${product.name}`}
                  onClick={() => addToCart(product.id)}
                >
                  +
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
