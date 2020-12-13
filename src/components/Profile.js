import React from 'react';
import { Component } from 'react';
import AuthService from './auth/auth-service';

class Profile extends Component {
    
    constructor(props){
        super(props);
        this.state = {loggedInUser: true };
        this.state = {name: '', lastName: '', gender: '', birth: '', lunch: '', morning: ''}
        this.service = new AuthService();
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const name = this.state.name;
        const lastName = this.state.lastName;
        const gender = this.state.gender;
        const birth = this.state.birth;
        const lunch = this.state.lunch;
        const morning = this.state.morning;
   

    this.service.add_child(name, lastName, gender, birth, lunch, morning)
    .then( response => {
        this.setState({
            name: "",
            lastName: "",
            gender: "",
            birth: "",
            lunch: "",
            morning: ""
        });
        console.log(response)
    })
    .catch( error => console.log(error) )
  }
 
    handleChange = (e) => {  
        const {name, value} = e.target;
        this.setState({[name]: value});
      }

    render(){
        return (
            <div>
                <h1>Bienvenido, {this.props.loggedInUser.name}</h1>
                <button type="submit">Editar datos</button>

                <br/>

                <form onSubmit={this.handleFormSubmit}>

                <br/>

                    <label htmlFor="name">Nombre:</label>
                    <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={(e)=>this.handleChange(e)}
                    />

                    <br/>

                    <label htmlFor="lastName">Apellidos:</label>
                    <input
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={(e)=>this.handleChange(e)}
                    />

                    <br/>

                    <label htmlFor="gender">Género:</label>
                    <input
                    type="text"
                    name="gender"
                    value={this.state.gender}
                    onChange={(e)=>this.handleChange(e)}
                    />

                    <br/>

                    <label htmlFor="birth">Nacimiento:</label>
                    <input
                    type="date"
                    name="birth"
                    value={this.state.birth}
                    onChange={(e)=>this.handleChange(e)}
                    />

                    <br/>

                    <label htmlFor="lunch">Servicio de comedor:</label>
                    <input
                    type="checkbox"
                    name="lunch"
                    value={this.state.lunch}
                    onChange={(e)=>this.handleChange(e)}
                    />

                    <br/>

                    <label htmlFor="morning">Servicio de buenos días cole:</label>
                    
                    <input
                    type="checkbox"
                    name="morning"
                    value={this.state.morning}
                    onChange={(e)=>this.handleChange(e)}
                    />

                    <br/>

                    <button type="submit">Añadir niño</button>

                </form>

            </div>
        )
    }
}
export default Profile;