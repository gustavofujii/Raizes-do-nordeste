import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="app-header">
      <a className="brand" href="#home" aria-label="Ir para a página inicial">
        <span className="brand-mark">RN</span>
        <span>
          <strong>Raízes do Nordeste</strong>
          <small>Protótipo acadêmico</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Abrir menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`main-nav ${isOpen ? "is-open" : ""}`} aria-label="Navegação principal">
        <a href="#home">Início</a>
        <a href="#unidades">Unidades</a>
        <a href="#cardapio">Cardápio</a>
        <a href="#carrinho">Carrinho</a>
        <a href="#fidelidade">Fidelidade</a>
        <a href="#tecnico">Técnico</a>
      </nav>
    </header>
  );
}
