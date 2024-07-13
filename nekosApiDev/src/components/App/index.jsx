import style from "./App.module.css";
import Tarjeta from "../Tarjeta";

const App = (props) => {

    const { datos } = props;
    return (
        <section className={style.app}>
            {datos.map((item) => (
                <Tarjeta datos={item} />
            ))}
        </section>
    )
}

export default App;