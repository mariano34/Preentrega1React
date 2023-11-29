import "../estilos.css";

import Targetas from "./Targetas.js";


function Catalogo({ imagenes }) {
    
    function mostrarImagenes (imagen) {
        
        return <Targetas key={imagen.id} imagen={imagen} />
    }

    [imagenes].map(mostrarImagenes);
    

    return (<main>

        <h2>Catalogo</h2>

        <section
            className="catalogo">

            {mostrarImagenes}

        </section>

    </main>);

}


export default Catalogo; 