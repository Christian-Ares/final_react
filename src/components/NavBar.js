import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import AuthService from './auth/auth-service';
import './NavBar.css'
// import Navbar from 'react-bootstrap/Navbar'
// import Button from 'react-bootstrap/Button'
// import FormControl from 'react-bootstrap/FormControl'
// import Form from 'react-bootstrap/Form'
// import NavDropdown from 'react-bootstrap/DropdownMenu'
// import Nav from 'react-bootstrap/Nav'


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
      console.log('LogOut success') 
    })
  }

  render(){
    if(this.state.loggedInUser){
          return (
//           <nav>
//             <Navbar bg="light" expand="lg">
//   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="mr-auto">
//       <Nav.Link href="/">Home</Nav.Link>
//       <Nav.Link href="#link">Link</Nav.Link>
//       <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//       </NavDropdown>
//     </Nav>
//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant="outline-success">Search</Button>
//     </Form>
//   </Navbar.Collapse>
// </Navbar>
// </nav>
        <nav className="nav-style">
        <Redirect to="/"/>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/aulas'>Aulas</Link></li>
            <li><Link to='/actividades'>Actividades</Link></li>
            <li><Link to='/cursos'>Cursos</Link></li>
            <li><Link to='/servicios'>Servicios</Link></li>
            <li><Link to='/contacto'>Contacto</Link></li>
            <li><Link to='/profile'>Perfil</Link></li>
            <li><Link to='/'>
            <button onClick={()=>this.logoutUser()}>Cerrar Sesión</button>
            </Link></li>
            </ul>
        </nav>
            )
            } else {
              return(
            <nav className="logs">
            <ul>  
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/signup'>Acceso Padres</Link></li>
            <li><Link to='/login'>Iniciar Sesión</Link></li>
          </ul>
{/* <Navbar fixed="top" bg="light" expand="lg">
   <Navbar.Brand href="https://github.com/Christian-Ares">Logo</Navbar.Brand>
   <Navbar.Toggle aria-controls="basic-navbar-nav" />
   <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="mr-auto">
       <Nav.Link href="/">Home</Nav.Link>
       <Nav.Link href="/login">Link</Nav.Link>
       <NavDropdown title="Dropdown" id="basic-nav-dropdown">
         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
         <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
       </NavDropdown>
     </Nav>
  </Navbar.Collapse>
 </Navbar> */}
        </nav>
      )
    }
  }
}

export default NavBar;