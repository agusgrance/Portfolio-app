import React from "react";
import "../header.css";
function Header() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <a href="#inicio">Inicio</a>
        </li>
        <li>
          <a href="#about">Sobre Mi</a>
        </li>
        <li>
          <a href="#job">Experiencia</a>
        </li>

        <li>
          <a href="#projects">Projectos</a>
        </li>
        {/* <li>
          <a href="#contact">Contacto</a>
        </li> */}
      </ul>
    </nav>
  );
}

export default Header;
