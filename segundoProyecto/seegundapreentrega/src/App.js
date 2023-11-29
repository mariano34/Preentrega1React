

import Catalogo from "./componentes/Catalogo.js";
import Encabezado from "./componentes/Encabezado.js";
import buscarImagen from "./Api.js";
import { useState } from "react";


function App() {
  const [listaImagenes, configurarlista] = useState([]);


  const buscar = async (termino) => {

    let resultado = await buscarImagen(termino);

    configurarlista(resultado);
  }


  return (
    <div className="laApp">

      <Encabezado datosYBuscar={buscar} />

      <Catalogo imagenesResultado={listaImagenes} />


    </div >
  );
}

export default App;
