import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import AuthService from './auth/auth-service';
import '../styles/NavBar.css'



class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = { loggedInUser: null, showMenu: false };
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
      console.log('LogOut success') 
    })
  }

  toggleShowMenu = () => {
    this.setState({showMenu: !this.state.showMenu});
  }

  render(){
    if (this.state.loggedInUser) {
      return (
        <nav className="nav-style">
          <Redirect to="/"/>
          <div id="menu-mostrar-boton" onClick={() => this.toggleShowMenu()}>Menú</div>

          {this.state.showMenu ? 
            <div class="desplegable">
              <ul>
                <li class="elemento-menu"><Link to='/'>Home</Link></li>
                <li class="elemento-menu"><Link to='/aulas'>Aulas</Link></li>
                <li class="elemento-menu"><Link to='/actividades'>Actividades</Link></li>
                <li class="elemento-menu"><Link to='/cursos'>Cursos</Link></li>
                <li class="elemento-menu"><Link to='/servicios'>Servicios</Link></li>
                <li class="elemento-menu"><Link to='/contacto'>Contacto</Link></li>
                <li class="elemento-menu"><Link to='/profile'>Perfil</Link></li>
                <li class="elemento-menu"><Link to='/'>
                <button onClick={()=>this.logoutUser()}>Cerrar Sesión</button>
                </Link></li>
              </ul>
            </div>
            : null
          }
        </nav>
      )
    } else {
      return(
      <nav className="logs">
        <div id="menu-mostrar-boton" onClick={() => this.toggleShowMenu()}>Menú</div>

        {this.state.showMenu ? 
          <div class="desplegable">
            <ul>  
              <li class="elemento-menu"><Link to='/'>Home</Link></li>
              <li class="elemento-menu"><Link to='/signup'>Acceso Padres</Link></li>
              <li class="elemento-menu"><Link to='/login'>Iniciar Sesión</Link></li>
            </ul>
          </div>
          : null
        }
      </nav>
      )
    }
  }
}

export default NavBar;