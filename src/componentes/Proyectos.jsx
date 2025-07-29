import React from "react";

function Proyectos() {
  return (
    <section id="proyectos" className="seccion">
      <h2>Proyectos</h2>
      <ul>
        <li className="card">
          <strong>E-commerce Full Stack</strong> – Proyecto con React, Express y MongoDB.
          <br />
          <a
            href="https://mi-app-react-git-master-mi-app-reacts-projects.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            Tienda online
          </a>
        </li>
        {/* Podés agregar más proyectos */}
      </ul>
    </section>
  );
}

export default Proyectos;
