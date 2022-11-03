import React from "react";
import '../styles/Boton.css';

function Boton({ texto, esbotondeClick, manejarClick }) {
  return (
    <button className={esbotondeClick ? "boton-click" : "boton-reiniciar"}
    onClick={manejarClick}>
      {texto}
    </button>
  );
}

export default Boton;
