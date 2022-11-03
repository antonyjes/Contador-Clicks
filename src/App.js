import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './images/FreeCodeCamp_logo.svg.png';
import { useState } from 'react';

function App() {
  const [numClicks, setnumClicks] = useState(0);

  const manejarClick = () => {
    setnumClicks(numClicks + 1);
  }

  const reducirContador = () =>{
    setnumClicks(numClicks - 1);
  }

  const reiniciarContador = () => {
    setnumClicks(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='logo de freecodecamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks}/>
        <Boton texto="Click" esbotondeClick={true} manejarClick={manejarClick}/> 
        <Boton texto="Restar" esbotondeClick={false} manejarClick={reducirContador}/>
        <Boton texto="Reiniciar" esbotondeClick={false} manejarClick={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
