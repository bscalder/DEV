import style from "./Mostrar.module.css";

const Mostrar = (props) => {

    const {cambiamostrar, esimagen} = props;

    return (
        <section className={style.mostrar}>
            <img src="imgs/cerrar.png" alt="cerrar" className={style.cerrar} onClick={cambiamostrar} />
            <img src={esimagen} alt="La imagen solicitada" className={style.esimagen} />
        </section>
    )
}

export default Mostrar;