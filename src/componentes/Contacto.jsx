import React from "react";

function Contacto() {
  return (
    <section id="contacto" className="seccion">
      <h2>Contacto</h2>
      <p>Email: leonardo.beltran.tarrech@gmail.com</p>
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/Leobeltran16"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          github.com/Leobeltran16
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/leonardo-beltran-5b6117375/"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          linkedin.com/in/leonardo-beltran-5b6117375
        </a>
      </p>
    </section>
  );
}

export default Contacto;
