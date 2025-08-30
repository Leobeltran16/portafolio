import React from "react";
import "../index.css";
import { useI18n, Txt } from "../i18n/i18n.jsx";

export default function SobreMi() {
  const { lang } = useI18n();

  return (
    <section id="sobre-mi" className="sobre-mi">
      <div className="contenedor contenedor-sobre-mi">
        <h2 className="titulo">
          <Txt k="about.title">Sobre mí</Txt>
        </h2>

        <div className="texto">
          <p className="direccion">
            <span className="dir">C: portafolio/leonardo-beltran</span>
          </p>

          {lang === "en" ? (
            /* ===== Versión EN ===== */
            <p className="descripcion">
              <span className="simbolo">$</span> Welcome:
              <br /><br />
              I’m <span className="nombre">Leonardo Beltrán</span>, a{" "}
              <span className="resaltar">Full-Stack</span> web developer with experience
              building modern applications using{" "}
              <span className="tecnologias">React</span>,{" "}
              <span className="tecnologias">Node.js</span>,{" "}
              <span className="tecnologias">Express</span> and{" "}
              <span className="tecnologias">MongoDB</span>. I love turning ideas into{" "}
              <span className="importante">efficient, scalable and easy-to-use</span>{" "}
              digital solutions.
              <br /><br />
              I enjoy working on the{" "}
              <span className="resaltar">frontend</span>, creating{" "}
              <span className="importante">attractive and dynamic interfaces</span>,
              as well as on the{" "}
              <span className="resaltar">backend</span>, building{" "}
              <span className="importante">robust APIs</span> and{" "}
              <span className="importante">optimized databases</span>. I’m always learning{" "}
              <span className="importante">new technologies</span> and{" "}
              <span className="importante">best practices</span>.
              <br /><br />
              My goal is to join a team where I can{" "}
              <span className="importante">provide real value</span> and keep growing.
              I’m currently looking for{" "}
              <span className="resaltar">remote opportunities</span> to take on{" "}
              <span className="importante">new challenges</span> and contribute to{" "}
              <span className="importante">innovative projects</span>.
              <br /><br />
              <span className="frase">
                “Programming isn’t just writing code — it’s crafting experiences.”
              </span>
            </p>
          ) : (
            /* ===== Versión ES (la que ya tenías) ===== */
            <p className="descripcion">
              <span className="simbolo">$</span> Bienvenido:
              <br /><br />
              Soy <span className="nombre">Leonardo Beltrán</span>, desarrollador web{" "}
              <span className="resaltar">Full Stack</span> con experiencia en la
              creación de aplicaciones modernas utilizando{" "}
              <span className="tecnologias">React</span>,{" "}
              <span className="tecnologias">Node.js</span>,{" "}
              <span className="tecnologias">Express</span> y{" "}
              <span className="tecnologias">MongoDB</span>. Me apasiona transformar
              ideas en <span className="importante">soluciones digitales</span>{" "}
              eficientes, escalables y fáciles de usar.
              <br /><br />
              Disfruto trabajar tanto en el{" "}
              <span className="resaltar">frontend</span>, creando{" "}
              <span className="importante">interfaces atractivas y dinámicas</span>,
              como en el{" "}
              <span className="resaltar">backend</span>, construyendo{" "}
              <span className="importante">APIs sólidas</span> y{" "}
              <span className="importante">bases de datos optimizadas</span>.
              Siempre estoy aprendiendo{" "}
              <span className="importante">nuevas tecnologías</span> y{" "}
              <span className="importante">mejores prácticas</span> para seguir
              creciendo como profesional.
              <br /><br />
              Mi objetivo es formar parte de un equipo donde pueda{" "}
              <span className="importante">aportar valor real</span> y seguir
              desarrollando mis habilidades. Actualmente, busco{" "}
              <span className="resaltar">oportunidades de trabajo remoto</span> que
              me permitan enfrentar{" "}
              <span className="importante">nuevos desafíos</span> y contribuir a{" "}
              <span className="importante">proyectos innovadores</span>.
              <br /><br />
              <span className="frase">
                “La programación no es solo escribir código, es crear experiencias.”
              </span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
