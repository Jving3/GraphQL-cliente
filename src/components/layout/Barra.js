import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../index.css';

const Barra = () => {
    return ( 
        <header className="app-header">
            <p className="nombre-usuario">Hola <span>Jorge</span> </p>
            
            <nav className="nav-principal">
            <ul>
                <li>
                    <NavLink className= {({isActive}) => (isActive ? "active" : "btn btn-blank cerrar-sesion")} to="/">Inicio</NavLink>  
                </li>
                <li>
                    <NavLink className= {({isActive}) => (isActive ? "active" : "btn btn-blank cerrar-sesion")} to="/produccion">Producción</NavLink>  
                </li>
                <li>
                     <NavLink className= {({isActive}) => (isActive ? "active" : "btn btn-blank cerrar-sesion")} to="/proyectos">Proyectos</NavLink>  
                </li>
                
            </ul>
                
            </nav>
        </header>
     );
}
 
export default Barra;