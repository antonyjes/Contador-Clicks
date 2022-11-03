import React from "react";
import '../styles/Boton.css';

function Boton({ texto, esbotondeClick, manejarClick }) {
  return (
    <button className={`boton-${texto.toLowerCase()}`}
    onClick={manejarClick}>
      {texto}
    </button>
  );
}

export default Boton;
