import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './auth/auth-service';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({...this.state, loggedInUser: nextProps["userInSession"]})
  }

  logoutUser = () =>{
    this.service.logout()
    .then(() => {
      this.setState({ loggedInUser: null });
      this.props.getTheUser(null);  
    })
  }

  render(){
    if(this.state.loggedInUser){
          return (
        <nav className="nav-style">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/aulas'>Aulas</Link></li>
            <li><Link to='/actividades'>Actividades</Link></li>
            <li><Link to='/cursos'>Cursos</Link></li>
            <li><Link to='/servicios'>Servicios</Link></li>
            <li><Link to='/contacto'>Contacto</Link></li>
            <li><Link to='/'>
            <button onClick={()=>this.logoutUser()}>Cerrar Sesión</button>
            </Link></li>
            </ul>
        </nav>
            )
            } else {
              return(
            <nav className="nav-style">
            <ul>  
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/signup'>Acceso Padres</Link></li>
            <li><Link to='/login'>Iniciar Sesión</Link></li>
          </ul>
        </nav>
      )
    }
  }
}

export default NavBar;