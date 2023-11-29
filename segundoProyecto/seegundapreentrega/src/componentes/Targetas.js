import { useState } from "react";
import "../estilos.css";
import { imagen } from "./Catalogo";
let carrito = (0 + 0);

function handleClick() {
    carrito = (carrito + 1);
    console.log(carrito);
}

function Targetas({ imagen }) {


    
    return (<div className="targeta">

        <div className="marcoTargeta">
            <img src={imagen.urls.small} alt={imagen.alt_description} />
        </div>

        <h3>titulo</h3>


        <span className="presioProducto">
            $0
        </span>


        <button className="botonComprar" >{handleClick} añadir al carrito</button>
    </div>);

}


export default Targetas;