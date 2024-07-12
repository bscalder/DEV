import ReactDOM from 'react-dom/client'
import { conexionApi } from './conexionApi'
import App from './components/App';
import { StrictMode } from 'react';
const resultados = conexionApi.imagenRandom();
console.log(typeof resultados);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Hola Mundo</h1>
    <App />
  </StrictMode>
)
