import React from "react";
import SobreMi from "./componentes/SobreMi";
import Proyectos from "./componentes/Proyectos";
import Contacto from "./componentes/Contacto";
import Nav from "./componentes/Nav";
import Habilidades from "./componentes/Habilidades";
import { I18nProvider, Txt } from "./i18n/i18n.jsx";

function App() {
  return (
    <I18nProvider>
      <section id="home" className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">
            <Txt k="hero.title">Leonardo Beltrán</Txt>
          </h1>
          <p className="hero-subtitle">
            <Txt k="hero.subtitle">Desarrollador Web Full Stack</Txt>
          </p>
        </div>
      </section>
      <Nav />
      <main>
        <SobreMi />
        <Proyectos />
        <Habilidades />
        <Contacto />
      </main>
    </I18nProvider>
  );
}

export default App;
