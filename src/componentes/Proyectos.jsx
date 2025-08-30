import React from "react";
import "../index.css";
import { Txt } from "../i18n/i18n.jsx";

export default function Proyectos() {
  return (
    <section id="proyectos" className="seccion proyectos-seccion">
      <h2 className="titulo centrado">
        <Txt k="projects.heading">Algunos proyectos realizados</Txt>
      </h2>

      <div className="grid-proyectos">
        {proyectos.map((p) => (
          <article key={p.id} className="card-proyecto">
            <a href={p.url} target="_blank" rel="noreferrer" className="card-link" aria-label={p.titulo}>
              <img src={p.img} alt={p.titulo} className="card-img" />
              <div className="card-overlay">
                <h3 className="card-title">{p.titulo}</h3>
                {p.tags && <p className="card-tags">{p.tags.join(" • ")}</p>}
                {p.repo && <span className="card-cta"><Txt k="projects.view">Ver proyecto</Txt></span>}
              </div>
            </a>
            {p.repo && (
              <a className="card-repo" href={p.repo} target="_blank" rel="noreferrer">
                <Txt k="projects.repoCode">Código en GitHub</Txt>
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

const proyectos = [
  {
    id: 1,
    titulo: "E-commerce Full Stack",
    img: "/assets/ecommerce.svg",
    url: "https://mi-app-react-git-master-mi-app-reacts-projects.vercel.app/",
    tags: ["React", "Node", "MongoDB"]
  },
  {
    id: 2,
    titulo: "Proyecto2",
    img: "/assets/galeria.svg",
    url: "https://tusitio.com/turismo"
  },
  {
    id: 3,
    titulo: "Proyecto2",
    img: "/assets/turismo.svg",
    url: "https://tusitio.com/blog"
  },
  {
    id: 4,
    titulo: "Proyecto4",
    img: "/assets/blog.svg",
    url: "https://tusitio.com/galeria"
  }
];
