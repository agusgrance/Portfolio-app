import React from "react";

function Works({ img, title, url }) {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <a href={url} target="_BLANK" className="btn btn-primary">
          Visitar Sitio
        </a>
      </div>
    </div>
  );
}

export default Works;
