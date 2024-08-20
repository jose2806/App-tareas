import React, {useState} from "react";
import '../hojas-de-estilo/Formulario.css';
import {v4 as uuidv4} from 'uuid';

function Formulario(props) {

  const [input,setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value)
  };

  const manejarEnvio = e => {
    e.preventDefault(); //evita que se vuelva a cargar toda la app cada vez que se envi en formulario
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };

    props.onSubmit(tareaNueva); //permite enviar la tarea a la lista de tareas
  };

  return (
    <form className="tarea-formulario"
    onSubmit={manejarEnvio}>
      <input className="tarea-input"
      type="text"
      placeholder="Escribe una Tarea"
      name="texto" 
      onChange={manejarCambio}/>
      <button className="tarea-boton">
        Agregar Tarea
      </button>
    </form>
  )
};

export default Formulario;