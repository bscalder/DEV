import ReactDOM from 'react-dom/client'
import { conexionAPI } from './conexionApi'
import App from './components/App';

async function tomaDatos() {

  const datos = await conexionAPI.imagenRandom();

  console.log(datos.items);

  ReactDOM.createRoot(document.getElementById('root')).render(

    <App datos={datos.items} />
    
  )

}

tomaDatos();


