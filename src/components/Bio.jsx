import React from "react";
import Me from "../agus.jpg";
import "../bio.css";

function Bio({ img, location }) {
  return (
    <>
      <div className="presentacion" id="inicio">
        <div className="imagen-bio">
          <img src={img} alt="" />
        </div>
        <h2>Agustin Lautaro Grance</h2>
        <h5>Desarrollador Front End</h5>
        <h6>
          <i className="fas fa-map-marker-alt"></i>

          {location}
        </h6>
        <h6>
          <i className="fas fa-mobile-alt"></i>
          <a href="tel:+5491124935528">+54 9 1124935528</a>
        </h6>
        <div className="redes">
          <a href="https://www.linkedin.com/in/agustin-grance/" target="_BLANK">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/agusgrance" target="_BLANK">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.behance.net/agustingrance" target="_BLANK">
            <i className="fab fa-behance"></i>
          </a>
        </div>
      </div>
      <div className="sobre-mi" id="about">
        <div className="sobremi">
          <img src={Me} alt="" />
        </div>

        <div className="bio">
          <h2>Sobre Mi</h2>
          <p>
            Tecnico Electromecanico y estudiante de Programacion de Sistemas en
            la UCES, actualmente trabajo como Diseñador Web utlilizando
            herramientas como HTMl, CSS, JavaScript,JQuery,ReactJS, PHP y MySQL
          </p>
        </div>
      </div>
    </>
  );
}

export default Bio;
