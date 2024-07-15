import style from "./App.module.css";
import Tarjeta from "../Tarjeta";
import Mostrar from "../Mostrar";
import { useState } from "react";
import Encabezado from "../Encabezado";

const App = (props) => {

    const [esMostrar,cambiaEsMostrar] = useState(false);
    const [esImagen, cambiaEsImagen] = useState("");

    function cambiaMostrar () {
        cambiaEsMostrar(!esMostrar);
    }

    function cambiaImagen(imagen) {
        cambiaEsImagen(imagen);
    }
    

    const { datos } = props;
    return (
        <div>
            {esMostrar && <Mostrar cambiamostrar={cambiaMostrar} esimagen={esImagen} />}
            <Encabezado />
            <section className={style.app}>
                {datos.map((item, key) => (
                    <Tarjeta datos={item} key={key} cambiamostrar={cambiaMostrar} cambiaimagen={cambiaImagen} />
                ))}
            </section>
        </div>
    )
}

export default App;