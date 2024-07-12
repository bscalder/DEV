import ReactDOM from 'react-dom/client'
import { conexionApi } from './conexionApi'
import App from './components/App';

console.log(conexionApi.imagenRandom());

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <h1>Hola Mundo</h1>
    <App />
  </>
)
