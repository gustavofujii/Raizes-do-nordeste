import { orderSteps } from "../data.js";
import { currency } from "../utils.js";

export default function CartPage({
  navigate,
  selectedUnit,
  cart,
  cartTotal,
  updateQuantity,
  orderStatus,
  paymentFailure,
  setPaymentFailure,
  checkout,
}) {
  return (
    <section className="page-section">
      <div className="section-heading inline-heading">
        <div>
          <p className="eyebrow">Etapa 3</p>
          <h1>Carrinho e status</h1>
          <p>Pagamento e status são simulados para demonstrar o fluxo sem serviço externo real.</p>
        </div>
        <button className="secondary-action" type="button" onClick={() => navigate("cardapio")}>
          Continuar comprando
        </button>
      </div>

      <div className="cart-layout">
        <div className="cart-list">
          {cart.length ? (
            cart.map((item) => (
              <article className="cart-item" key={item.id}>
                <div>
                  <h2>{item.name}</h2>
                  <p>{currency.format(item.price)} cada</p>
                </div>

                <div className="quantity-control">
                  <button
                    type="button"
                    aria-label="Remover uma unidade"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    aria-label="Adicionar uma unidade"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </article>
            ))
          ) : (
            <p className="empty-state">Seu carrinho está vazio.</p>
          )}
        </div>

        <aside className="checkout-panel">
          <h2>Resumo</h2>
          <dl className="summary-list">
            <div>
              <dt>Unidade</dt>
              <dd>{selectedUnit.name}</dd>
            </div>
            <div>
              <dt>Total</dt>
              <dd>{currency.format(cartTotal)}</dd>
            </div>
          </dl>

          <label className="toggle-row">
            <input
              type="checkbox"
              checked={paymentFailure}
              onChange={(event) => setPaymentFailure(event.target.checked)}
            />
            Simular falha no pagamento externo
          </label>

          <button className="primary-action" type="button" onClick={checkout}>
            Finalizar pedido
          </button>

          <OrderStatus orderStatus={orderStatus} />
        </aside>
      </div>
    </section>
  );
}

function OrderStatus({ orderStatus }) {
  if (orderStatus === null) {
    return <p className="muted-note">Nenhum pedido ativo no momento.</p>;
  }

  return (
    <ol className="status-list">
      {orderSteps.map((step, index) => (
        <li className={index <= orderStatus ? "is-done" : ""} key={step}>
          <span>{index + 1}</span>
          {step}
        </li>
      ))}
    </ol>
  );
}
