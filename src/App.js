import './App.css';
import Logo from './imagenes/logo.PNG'
import ListaDeTareas from './componentes/ListaDeTareas';
function App() {
  return (
    <div className="aplicacion-tareas">
     <div className='freecodecamp-logo-contenedor'>
      <img src={Logo} className='freecodecamp-logo' 
      alt='Logo de freecodecamp'/>
     </div>
     <div className='tareas-lista-principal'>
      <h1>Mis Tareas</h1>
      <ListaDeTareas />
     </div>
    </div>
  );
}
export default App;
