import style from "./Encabezado.module.css";

const Encabezado = () => {
    return (
        <section className={style.encabezado}>
            <h2>El Baul de las Monas Chinas</h2>
            <div>Aplicacion en Vite+React para leer una REST API y despliega 15 monas chinas en miniatura.  Al dar clic en alguna podras verlas en mayor tamaño en una ventana emergente.</div>
        </section>
    )
}

export default Encabezado;