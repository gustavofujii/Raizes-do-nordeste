import { useEffect, useMemo, useState } from "react";
import { orderSteps, products, units } from "./data.js";
import Header from "./components/Header.jsx";
import HomePage from "./components/HomePage.jsx";
import UnitsPage from "./components/UnitsPage.jsx";
import MenuPage from "./components/MenuPage.jsx";
import ProductPage from "./components/ProductPage.jsx";
import CartPage from "./components/CartPage.jsx";
import LoyaltyPage from "./components/LoyaltyPage.jsx";
import TechnicalPage from "./components/TechnicalPage.jsx";
import Toast from "./components/Toast.jsx";
import { getInitialRoute } from "./utils.js";

const knownPages = new Set([
  "home",
  "unidades",
  "cardapio",
  "produto",
  "carrinho",
  "fidelidade",
  "tecnico",
]);

export default function App() {
  const [route, setRoute] = useState(getInitialRoute);
  const [selectedUnitId, setSelectedUnitId] = useState(units[0].id);
  const [category, setCategory] = useState("Todos");
  const [cart, setCart] = useState([]);
  const [orderStatus, setOrderStatus] = useState(null);
  const [lgpdConsent, setLgpdConsent] = useState(false);
  const [loyaltyId, setLoyaltyId] = useState("");
  const [paymentFailure, setPaymentFailure] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    function syncRoute() {
      setRoute(getInitialRoute());
    }

    window.addEventListener("hashchange", syncRoute);
    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  const selectedUnit = useMemo(
    () => units.find((unit) => unit.id === selectedUnitId) || units[0],
    [selectedUnitId],
  );

  const availableProducts = useMemo(
    () => products.filter((product) => product.availableIn.includes(selectedUnitId)),
    [selectedUnitId],
  );

  const filteredProducts = useMemo(() => {
    if (category === "Todos") return availableProducts;
    return availableProducts.filter((product) => product.category === category);
  }, [availableProducts, category]);

  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart],
  );

  function navigate(nextRoute) {
    window.location.hash = nextRoute;
  }

  function showToast(message) {
    setToast(message);
    window.setTimeout(() => setToast(""), 2600);
  }

  function selectUnit(unitId) {
    setSelectedUnitId(unitId);
    setCategory("Todos");
    setCart([]);
    setOrderStatus(null);
    showToast("Unidade atualizada. Carrinho reiniciado para evitar produtos indisponíveis.");
    navigate("cardapio");
  }

  function addToCart(productId) {
    const product = products.find((item) => item.id === productId);
    if (!product) return;

    setCart((items) => {
      const itemAlreadyAdded = items.some((item) => item.id === productId);

      if (!itemAlreadyAdded) {
        return [...items, { ...product, quantity: 1 }];
      }

      return items.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      );
    });

    showToast(`${product.name} adicionado ao carrinho.`);
  }

  function updateQuantity(productId, amount) {
    setCart((items) =>
      items
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + amount } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function checkout() {
    if (!cart.length) {
      showToast("Adicione produtos antes de finalizar.");
      return;
    }

    if (paymentFailure) {
      setOrderStatus(null);
      showToast("Pagamento recusado pelo serviço externo. Tente novamente.");
      return;
    }

    setOrderStatus(0);
    showToast("Pedido recebido. Acompanhe o status no carrinho.");

    orderSteps.slice(1).forEach((_, index) => {
      window.setTimeout(() => setOrderStatus(index + 1), 1800 * (index + 1));
    });
  }

  const [page, productId] = route.split("/");
  const product = products.find((item) => item.id === productId);

  const pageProps = {
    navigate,
    selectedUnit,
    selectedUnitId,
    selectUnit,
    category,
    setCategory,
    availableProducts,
    filteredProducts,
    addToCart,
    cart,
    cartTotal,
    updateQuantity,
    orderStatus,
    paymentFailure,
    setPaymentFailure,
    checkout,
    lgpdConsent,
    setLgpdConsent,
    loyaltyId,
    setLoyaltyId,
    showToast,
  };

  function renderPage() {
    if (!knownPages.has(page)) return <HomePage {...pageProps} />;

    switch (page) {
      case "unidades":
        return <UnitsPage {...pageProps} />;
      case "cardapio":
        return <MenuPage {...pageProps} />;
      case "produto":
        return <ProductPage product={product} {...pageProps} />;
      case "carrinho":
        return <CartPage {...pageProps} />;
      case "fidelidade":
        return <LoyaltyPage {...pageProps} />;
      case "tecnico":
        return <TechnicalPage />;
      default:
        return <HomePage {...pageProps} />;
    }
  }

  return (
    <>
      <Header />

      <main id="app" tabIndex="-1">{renderPage()}</main>

      <footer className="app-footer">
        <span>Rede Raízes do Nordeste</span>
        <span>Projeto acadêmico sem dados pessoais reais</span>
      </footer>

      <Toast message={toast} />
    </>
  );
}
