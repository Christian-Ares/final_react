import React, { Component } from 'react'
import AuthService from './auth-service.js'
import './SignUp.css'

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {name: '', lastName: '', address: '', phone: '', username: '', password: ''};
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const lastName = this.state.lastName;
    const address = this.state.address;
    const phone = this.state.phone;
    const username = this.state.username;
    const password = this.state.password;

    this.service.signup(name, lastName, address, phone, username, password)
    .then( response => {
        this.setState({
            name: '',
            lastName: '',
            address: '',
            phone: '',
            username: '', 
            password: '',
        });
        this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }
   
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render(){
          return(
        <div class="signup-card">
          <div class="signup-content">
            <h2>Sign Up</h2>
            <form onSubmit={this.handleFormSubmit}>

              <label htmlFor="name">Nombre: </label>
              <input 
                type="text" 
                name="name" 
                value={this.state.name} 
                onChange={(event)=>this.handleChange(event)}
              />

  <br/>

              <label htmlFor="lastName">Apellidos: </label>
              <input 
                type="text" 
                name="lastName" 
                value={this.state.lastName} 
                onChange={(event)=>this.handleChange(event)}
              />

  <br/>

              <label htmlFor="address">Dirección: </label>
              <input 
                type="text" 
                name="address" 
                value={this.state.address} 
                onChange={(event)=>this.handleChange(event)}
              />

  <br/>

              <label htmlFor="phone">Teléfono: </label>
              <input 
                type="text" 
                name="phone" 
                value={this.state.phone} 
                onChange={(event)=>this.handleChange(event)}
              />

  <br/>

              <label htmlFor="username">Usuario: </label>
              <input 
                type="text" 
                name="username" 
                value={this.state.username} 
                onChange={(event)=>this.handleChange(event)}
              />

  <br/>

              <label htmlFor="password">Contraseña: </label>
              <input 
                type="password" 
                name="password" 
                value={this.state.password} 
                onChange={(event)=>this.handleChange(event)}
              />

  <br/>
            <p>* La contraseña tiene que tener mínimo 12 caracteres</p>

              <button type="submit">Crear Usuario</button>

            </form>
            </div>
        </div>
      )
    }
  }

export default SignUp;