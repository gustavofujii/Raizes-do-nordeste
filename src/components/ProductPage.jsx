import { currency } from "../utils.js";

export default function ProductPage({ navigate, product, addToCart }) {
  if (!product) {
    return (
      <section className="page-section">
        <p className="empty-state">Produto não encontrado.</p>
        <button className="primary-action" type="button" onClick={() => navigate("cardapio")}>
          Voltar ao cardápio
        </button>
      </section>
    );
  }

  const availability = `${product.availableIn.length} unidade(s)`;

  return (
    <section className="page-section product-detail">
      <button className="back-action" type="button" onClick={() => navigate("cardapio")}>
        Voltar ao cardápio
      </button>

      <div className="detail-layout">
        <div className="detail-media">
          {product.imageUrl ? (
            <img src={product.imageUrl} alt={product.name} />
          ) : (
            <span>{product.name}</span>
          )}
        </div>

        <div className="detail-copy">
          <p className="eyebrow">
            {product.category}
            {product.seasonal ? " | Produto sazonal" : ""}
          </p>
          <h1>{product.name}</h1>
          <p>{product.description}</p>

          <ul className="tag-list">
            {product.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>

          <dl className="summary-list">
            <div>
              <dt>Preço</dt>
              <dd>{currency.format(product.price)}</dd>
            </div>
            <div>
              <dt>Preparo estimado</dt>
              <dd>{product.prepTime}</dd>
            </div>
            <div>
              <dt>Disponibilidade</dt>
              <dd>{availability}</dd>
            </div>
          </dl>

          <button className="primary-action" type="button" onClick={() => addToCart(product.id)}>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </section>
  );
}
