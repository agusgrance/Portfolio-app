import React from "react";
import DotLogo from "../logo.png";
import CV from "../Agustin Lautaro Grance.pdf";
import "../experience.css";

function Experience() {
  return (
    <div className="experience" id="job">
      <h2>Experiencia de trabajo</h2>
      <a className="cv" href={CV} target="_BLANK">
        Descargar CV
      </a>

      <div className="job">
        <div className="year">
          <div className="job-logo">
            <img src={DotLogo} alt="" />
          </div>
          <div className="job-data">
            <h3>Dot Cloud</h3>
            <h4>Diseñador Web</h4>
            <h6>Noviembre 2020 - Actual</h6>
            <p>
              Programacion Front End y Backend. Elaboracion de Maquetas. Diseño
              de imagenes y Soporte Técnico.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
