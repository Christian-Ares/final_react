  import React, { Component } from 'react'
import AuthService from './auth-service';
import './LogIn.css'

class LogIn extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', error: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service.login(username, password)
    .then( response => {
        this.setState({ username: "", password: "", error: "" });
        this.props.getUser(response)
    })
    .catch( this.setState({error: "El usuario o la contraseña son incorrectos"}) )
  }
    
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
  
  render(){
        return(
      <div>
        <div class="login-card">
          <div class="login-content">
            <h2>Log In</h2>
            <form onSubmit={this.handleFormSubmit}>

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

              <button type="submit">Log In</button>
            </form>

            <div>{this.state.error}</div>
          </div>
        </div>
      </div>
    )
  }
}
export default LogIn;