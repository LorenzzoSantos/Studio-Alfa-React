import "./Header.css";
import lobo from "./555ef2e3cbae65c7f42127b7b0e477a5-logotipo-do-lobo-zangado-azul.webp";

function Header() {
  return (
    <header class="cabecalho">
      <div class="logo-container">
        <img id="imglogo" src={lobo} alt="" />
        <span class="logo">Studio alfa</span>
      </div>
      <nav>
        <ul class="menu">
          <li>
            <a href="#hero">Início</a>
          </li>
          <li>
            <a href="#servicos">Serviços</a>
          </li>
          <li>
            <a href="https://docs.google.com/document/d/1pomwE7GjDoVcLRNFMX0bS_lPyW6rTdIWzmqYvfhf7VM/edit?usp=sharing">
              Sobre
            </a>
          </li>
          <li>
            <a href="#footer">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
