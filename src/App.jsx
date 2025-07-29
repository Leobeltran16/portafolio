import React from "react";
import SobreMi from "./componentes/SobreMi";
import Proyectos from "./componentes/Proyectos";
import Contacto from "./componentes/Contacto";
import Nav from "./componentes/Nav";

function App() {
  return (
    <div>
      <Nav />
      <main>
        <SobreMi />
        <Proyectos />
        <Contacto />
      </main>
    </div>
  );
}

export default App;
