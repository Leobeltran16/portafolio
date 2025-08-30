// src/componentes/Habilidades.jsx
import React, { useState, useEffect } from "react";
import "../index.css";
import { useI18n, Txt } from "../i18n/i18n.jsx";

/* === DATA (tu misma info en ES como fallback) === */
const SKILLS = [
  {
    id: "html",
    nombre: "HTML5",
    icono:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    categoria: "Frontend",
    descripcion:
      "Estructura semántica, accesibilidad básica, formularios y optimización SEO.",
    nivelLabel: "Avanzado",
    experiencia: "2 años",
    ultimoUso: "2025",
    usos: ["Semántica", "Formularios", "SEO"],
    proyecto: {
      texto: "E-commerce Full Stack",
      url: "https://mi-app-react.vercel.app",
    },
    stack: ["CSS", "React", "SEO"],
  },
  {
    id: "css",
    nombre: "CSS3",
    icono:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    categoria: "Frontend",
    descripcion:
      "Diseño responsive, animaciones, Flexbox, Grid y personalización avanzada.",
    nivelLabel: "Avanzado",
    experiencia: "2 años",
    ultimoUso: "2025",
    usos: ["Responsive Design", "Animaciones", "Grid & Flexbox"],
    proyecto: {
      texto: "Portfolio Personal",
      url: "https://mi-portafolio.vercel.app",
    },
    stack: ["HTML5", "React", "Vite"],
  },
  {
    id: "js",
    nombre: "JavaScript",
    icono:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    categoria: "Frontend",
    descripcion:
      "Programación dinámica con ES6+, asincronismo, APIs REST y manipulación del DOM.",
    nivelLabel: "Intermedio",
    experiencia: "1.5 años",
    ultimoUso: "2025",
    usos: ["APIs REST", "Async/Await", "DOM Dinámico"],
    proyecto: { texto: "API para Tienda", url: "https://mi-app-react.vercel.app" },
    stack: ["React", "Node.js", "Express"],
  },
  {
    id: "react",
    nombre: "React",
    icono:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    categoria: "Frontend",
    descripcion:
      "Creación de interfaces dinámicas, SPA, hooks personalizados y Context API.",
    nivelLabel: "Intermedio",
    experiencia: "1.5 años",
    ultimoUso: "2025",
    usos: ["Hooks", "SPA", "Routing"],
    proyecto: {
      texto: "E-commerce Full Stack",
      url: "https://mi-app-react.vercel.app",
    },
    stack: ["JavaScript", "Vite", "CSS"],
  },
  {
    id: "node",
    nombre: "Node.js",
    icono:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    categoria: "Backend",
    descripcion:
      "Desarrollo de APIs REST seguras, middlewares personalizados y manejo de JWT.",
    nivelLabel: "Intermedio",
    experiencia: "1 año",
    ultimoUso: "2025",
    usos: ["APIs REST", "JWT", "Middlewares"],
    proyecto: {
      texto: "Backend E-commerce",
      url: "https://mi-app-backend.onrender.com",
    },
    stack: ["Express", "MongoDB", "Mongoose"],
  },
  {
    id: "express",
    nombre: "Express",
    icono:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    categoria: "Backend",
    descripcion:
      "Framework para construir APIs escalables con controladores, middlewares y seguridad básica.",
    nivelLabel: "Intermedio",
    experiencia: "1 año",
    ultimoUso: "2025",
    usos: ["Rutas REST", "Middlewares", "Validaciones"],
    proyecto: { texto: "API Usuarios", url: "https://mi-api.onrender.com" },
    stack: ["Node.js", "MongoDB", "JWT"],
  },
  {
    id: "mongo",
    nombre: "MongoDB",
    icono:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    categoria: "Base de Datos",
    descripcion:
      "Modelado de datos con Mongoose, consultas optimizadas, índices y populates.",
    nivelLabel: "Intermedio",
    experiencia: "1 año",
    ultimoUso: "2025",
    usos: ["Bases NoSQL", "Mongoose", "Optimización de consultas"],
    proyecto: { texto: "E-commerce DB", url: "https://cloud.mongodb.com" },
    stack: ["Node.js", "Express", "JWT"],
  },
  {
    id: "git",
    nombre: "Git & GitHub",
    icono:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    categoria: "Herramientas",
    descripcion:
      "Control de versiones, ramas, pull requests, manejo de conflictos y despliegue continuo.",
    nivelLabel: "Intermedio",
    experiencia: "1.5 años",
    ultimoUso: "2025",
    usos: ["Versionado", "Pull Requests", "Deploy"],
    proyecto: {
      texto: "Portfolio Personal",
      url: "https://github.com/Leobeltran16",
    },
    stack: ["GitHub", "Vercel", "Render"],
  },
  {
    id: "vercel",
    nombre: "Vercel",
    icono:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    categoria: "Deploy",
    descripcion:
      "Plataforma para despliegue de proyectos frontend con integración CI/CD y entornos dinámicos.",
    nivelLabel: "Intermedio",
    experiencia: "1 año",
    ultimoUso: "2025",
    usos: ["Deploy frontend", "CI/CD", "Variables de entorno"],
    proyecto: { texto: "Portfolio", url: "https://mi-portafolio.vercel.app" },
    stack: ["React", "GitHub", "Next.js"],
  },
  {
    id: "render",
    nombre: "Render",
    icono: "https://cdn.simpleicons.org/render/ffffff",
    categoria: "Deploy",
    descripcion:
      "Despliegue de APIs Node.js y MongoDB Atlas con certificados SSL automáticos.",
    nivelLabel: "Intermedio",
    experiencia: "1 año",
    ultimoUso: "2025",
    usos: ["Deploy backend", "Entornos", "APIs REST"],
    proyecto: {
      texto: "API E-commerce",
      url: "https://mi-app-backend.onrender.com",
    },
    stack: ["Node.js", "Express", "MongoDB"],
  },
];

/* Helper: convierte la categoría en una clase CSS segura
   p.ej. "Base de Datos" -> "chip-base-de-datos" */
const catToSlug = (cat) =>
  `chip-${cat
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")}`;

/* ===== Traducción por skill (no tocamos SKILLS) ===== */
function trSkill(s, t) {
  const baseKey = `skills.items.${s.id}`;
  const tr = (sub, fallback) => {
    const k = `${baseKey}.${sub}`;
    const val = t(k);
    return val === k ? fallback : val;
  };

  // Arrays traducidos por índice
  const usos = (s.usos || []).map((_, i) => {
    const k = `${baseKey}.uses.${i}`;
    const val = t(k);
    return val === k ? s.usos[i] : val;
  });

  const stack = (s.stack || []).map((_, i) => {
    const k = `${baseKey}.stack.${i}`;
    const val = t(k);
    return val === k ? s.stack[i] : val;
  });

  const proyecto = s.proyecto
    ? { ...s.proyecto, texto: tr("project.text", s.proyecto.texto) }
    : s.proyecto;

  return {
    ...s,
    nombre: tr("name", s.nombre),
    categoria: tr("category", s.categoria),
    descripcion: tr("desc", s.descripcion),
    nivelLabel: tr("levelLabel", s.nivelLabel),
    experiencia: tr("experienceValue", s.experiencia),
    ultimoUso: tr("lastUsedValue", s.ultimoUso),
    usos,
    stack,
    proyecto,
    // slug estable para clases CSS (basado en la categoría original en ES)
    slug: catToSlug(s.categoria),
  };
}

export default function Habilidades() {
  const { t } = useI18n();
  const [skillActiva, setSkillActiva] = useState(null);

  const abrir = (skill) => setSkillActiva(skill);
  const cerrar = () => setSkillActiva(null);

  // Cerrar modal con tecla ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && cerrar();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="habilidades" className="seccion habilidades-seccion">
      <h2 className="titulo centrado">
        <Txt k="skills.heading">Habilidades &amp; Herramientas</Txt>
      </h2>

      <div className="grid-habilidades">
        {SKILLS.map((s) => {
          const sx = trSkill(s, t);
          return (
            <article key={s.id} className="skill-card">
              <div className="skill-media">
                <img src={s.icono} alt={sx.nombre} className="skill-img" />
                <div className="skill-overlay">
                  <h3>{sx.nombre}</h3>
                  <p>{sx.categoria}</p>
                </div>

                <button
                  className="skill-plus"
                  aria-label={`Ver detalle de ${sx.nombre}`}
                  aria-haspopup="dialog"
                  onClick={() => abrir(sx)} // pasamos la traducida al modal
                >
                  +
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* MODAL */}
      {skillActiva && (
        <div
          className="skill-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="skill-title"
          onClick={cerrar}
        >
          <div
            className="skill-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="skill-modal-close"
              onClick={cerrar}
              aria-label="Cerrar"
            >
              ×
            </button>

            <header className="skill-modal-header">
              <div className="skill-avatar">
                <img src={skillActiva.icono} alt="" aria-hidden="true" />
              </div>
              <div className="skill-headings">
                <h3 id="skill-title">{skillActiva.nombre}</h3>
                <span className="badge">{skillActiva.categoria}</span>
              </div>
            </header>

            <p className="skill-modal-desc">{skillActiva.descripcion}</p>

            <ul className="facts">
              {skillActiva.nivelLabel && (
                <li>
                  <span className="muted">{t("skills.level")} </span>
                  <strong>{skillActiva.nivelLabel}</strong>
                </li>
              )}
              {skillActiva.experiencia && (
                <li>
                  <span className="muted">{t("skills.experience")} </span>
                  {skillActiva.experiencia}
                </li>
              )}
              {skillActiva.ultimoUso && (
                <li>
                  <span className="muted">{t("skills.lastUsed")} </span>
                  {skillActiva.ultimoUso}
                </li>
              )}
            </ul>

            {skillActiva.usos?.length > 0 && (
              <div className="chips">
                {skillActiva.usos.map((u) => (
                  <span key={u} className={`chip ${skillActiva.slug}`}>
                    {u}
                  </span>
                ))}
              </div>
            )}

            {skillActiva.stack?.length > 0 && (
              <p className="skill-modal-desc small">
                <span className="muted">{t("skills.relatedStack")} </span>
                {skillActiva.stack.join(" • ")}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
