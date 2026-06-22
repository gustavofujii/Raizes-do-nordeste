export const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function getInitialRoute() {
  return window.location.hash.replace("#", "") || "home";
}
