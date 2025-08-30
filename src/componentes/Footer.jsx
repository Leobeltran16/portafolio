import React from "react";
import { useI18n } from "../i18n/i18n.jsx";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="contenedor">
        <div className="redes-sociales" id="contacto">
          {/* LinkedIn */}
          <a className="social linkedin" href="https://www.linkedin.com/in/leonardo-beltran-5b6117375/" target="_blank" rel="noreferrer" title="LinkedIn" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3zM14.5 9c-2.17 0-3.5 1.18-3.5 2.86V21h4v-6.5c0-.89.6-1.5 1.5-1.5s1.5.61 1.5 1.5V21h4v-7.36C22 10.38 20.39 9 18.2 9c-1.24 0-2.31.55-2.7 1.35H15V9h-.5z" />
            </svg>
          </a>

          {/* Instagram */}
          <a className="social instagram" href="https://www.instagram.com/leobeltran.16/" target="_blank" rel="noreferrer" title="Instagram" aria-label="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM18 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </a>

          {/* GitHub */}
          <a className="social github" href="https://github.com/Leobeltran16" target="_blank" rel="noreferrer" title="GitHub" aria-label="GitHub">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M12 .5A12 12 0 0 0 0 12.7c0 5.4 3.4 10 8.2 11.6.6.1.8-.2.8-.5v-2c-3.3.8-4-1.6-4-1.6-.6-1.4-1.5-1.8-1.5-1.8-1.2-.8.1-.8.1-.8 1.3.1 2 .9 2 .9 1.1 2 2.9 1.4 3.6 1.1.1-.8.4-1.4.7-1.7-2.7-.3-5.6-1.4-5.6-6.2 0-1.4.5-2.6 1.3-3.5-.1-.3-.6-1.6.1-3.3 0 0 1-.3 3.5 1.3a12.3 12.3 0 0 1 6.4 0c2.5-1.6 3.4-1.3 3.4-1.3.7 1.7.2 3 .1 3.3.8.9 1.3 2.1 1.3 3.5 0 4.8-2.9 5.9-5.6 6.2.5.4.8 1.1.8 2.2v3.2c0 .3.2.6.8.5A12.2 12.2 0 0 0 24 12.7 12 12 0 0 0 12 .5z" />
            </svg>
          </a>
        </div>
      </div>

      <p className="autor">{t("footer.copy", { year })}</p>
    </footer>
  );
}
