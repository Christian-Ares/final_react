import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/aulas'>Aulas</Link></li>
        <li><Link to='/actividades'>Actividades</Link></li>
        <li><Link to='/cursos'>Cursos</Link></li>
        <li><Link to='/servicios'>Servicios</Link></li>
        <li><Link to='/contacto'>Contacto</Link></li>
        <li><Link to='/signup'>Acceso Padres</Link></li>
        <li><Link to='/login'>Iniciar Sesión</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar;