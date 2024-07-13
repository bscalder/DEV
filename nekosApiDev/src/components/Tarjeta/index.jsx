import style from "./Tarjeta.module.css";

const Tarjeta = (props) => {

    const {datos, key} = props;

    return (
        <section className={style.tarjeta}>
            <img src={datos.sample_url} alt="Ejemplo" className={style.imagen} />
       </section>
    )
}

export default Tarjeta;