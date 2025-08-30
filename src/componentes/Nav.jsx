import React from "react";
import "../index.css";
import { useI18n, Txt } from "../i18n/i18n.jsx";

export default function Nav() {
  const { lang, setLang, t } = useI18n();

  const onKey = (newLang) => (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setLang(newLang);
    }
  };

  return (
    <header className="nav-scope">
      <nav className="menu">
        <div className="foto">
          <img src="/assets/foto.jpeg" alt="Foto de perfil" className="foto" />
        </div>

        <div className="contenedor-menu">
          <a href="#sobre-mi">{t("nav.about")}</a>
          <a href="#proyectos">{t("nav.projects")}</a>
          <a href="#habilidades">{t("nav.skills")}</a>
          <a href="#contacto">{t("nav.contact")}</a>
        </div>

        <div className="idiomas">
          <img
            src="/assets/español.png"
            className={`bandera ${lang === "es" ? "active" : ""}`}
            alt={t("lang.es")}
            title={t("lang.es")}
            onClick={() => setLang("es")}
            role="button"
            tabIndex={0}
            onKeyDown={onKey("es")}
          />
          <img
            src="/assets/english.png"
            className={`bandera ${lang === "en" ? "active" : ""}`}
            alt={t("lang.en")}
            title={t("lang.en")}
            onClick={() => setLang("en")}
            role="button"
            tabIndex={0}
            onKeyDown={onKey("en")}
          />
        </div>
      </nav>
    </header>
  );
}
