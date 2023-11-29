import "../estilos.css";
import carrito from "../imagenes/carritoCompras.png"
import inicio from "../imagenes/InicioIcono.png"
import usuarios from "../imagenes/usuariosIcono.png"
import { useState } from "react";

function Encabezado({ datosYBuscar }) {

    const [termino, configurarTermino] = useState("");

    function buscar(evento) {
        evento.preventDefault();

        datosYBuscar(termino);
    }

    function buscarTermino(evento) {
        configurarTermino(evento.target.value);
    }

    return (
        <header>
            <h1>La Feria</h1>
            <nav>
                <button className="categoriaNav">  <img className="iconoNav" src={usuarios} />
                </button>

                <button className="categoriaNav">  <img className="iconoNav" src={inicio} />
                </button>

                <button className="categoriaNav">
                    <img className="iconoNav" src={carrito} /> <span className="numeroCarrito">0</span>
                </button>
            </nav>
            <form datosYBuscar={buscar} className="barraBusqueda">
                <button className="labelBusqueda"
                    onClick={buscar}
                >Buscar</button>
                <input className="inputBusqueda" value={termino} onChange={buscarTermino}>

                </input>
            </form>
        </header>


    );
}

export default Encabezado;