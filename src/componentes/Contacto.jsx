import React from "react";
import Footer from "./Footer";
import "../index.css";
import { Txt } from "../i18n/i18n.jsx";

export default function Contacto() {
  return (
    <>
      <section id="contacto" className="contacto">
        <h2><Txt k="contact.title">Contacto</Txt></h2>
        <p className="contacto__texto">
          <Txt k="contact.hint">
            Si deseas ponerte en contacto conmigo, puedes escribirme directamente a:
          </Txt>
        </p>

        <a href="mailto:leonardo.beltran.tarrech@gmail.com" className="contacto__email-card" title="Enviar correo">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
               className="icon">
            <path d="M4 4h16v16H4z" stroke="none" />
            <path d="M22 6L12 13 2 6" />
          </svg>
          <span>leonardo.beltran.tarrech@gmail.com</span>
        </a>

        <p className="contacto__hint">
          <Txt k="contact.hint">Haz clic en el correo para abrir tu cliente de email automáticamente.</Txt>
        </p>
      </section>

      <Footer />
    </>
  );
}
