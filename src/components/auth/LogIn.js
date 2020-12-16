  
import React, { Component } from 'react'
import AuthService from './auth-service';

class LogIn extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service.login(username, password)
    .then( response => {
        this.setState({ username: "", password: "" });
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
      <div>
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
      </div>
    )
  }
}
export default LogIn;