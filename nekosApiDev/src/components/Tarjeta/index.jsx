import style from "./Tarjeta.module.css";

const Tarjeta = (props) => {

    const {datos, key, cambiamostrar, cambiaimagen} = props;

    return (
        <section className={style.tarjeta} key={key}>
            <img src={datos.sample_url} alt="Ejemplo" className={style.imagen} onClick={() => {
                cambiamostrar();
                cambiaimagen(datos.image_url);
            }} />
       </section>
    )
}

export default Tarjeta;