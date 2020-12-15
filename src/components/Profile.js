import React from 'react';
import { Component } from 'react';
import AuthService from './auth/auth-service';

class Profile extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            name: '',
            lastName: '',
            gender: '',
            birth: '',
            lunch: '',
            morning: '',
            loggedInUser: this.props.loggedInUser,
            address: '',
            phone: '' }
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
    
    handleFormAddress = (e) => {
        e.preventDefault();
        const address = this.state.address
        this.service.edit_parent(this.state.loggedInUser._id, address)
        .then(response=>{
            this.setState({
                address: ''
            })
            this.fetchUser()
            })
            .catch(err => console.log(err))
    }

    handleFormPhone = (e) => {
        e.preventDefault();
        const phone = this.state.phone
        this.service.edit_parent(this.state.loggedInUser._id, phone)
        .then(response=>{
            this.setState({
                phone: ''
            })
            this.fetchUser()
            })
            .catch(err => console.log(err))
    }

    fetchUser(){
          this.service.loggedin()
          .then(response =>{
            this.setState({
              loggedInUser:  response
            })
            this.props.getTheUser(response) 
          })
          .catch( err =>{
            this.setState({
              loggedInUser:  false
            }) 
          })
      }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value, lunch: e.target.checked, morning: e.target.checked });
      }

    render(){
        return (
            <div>
                <h1>Bienvenido, {this.state.loggedInUser.name}</h1>
                <h2>{this.state.loggedInUser.lastName}</h2>
                <h2>{this.state.loggedInUser.address}</h2>

                <form onSubmit={this.handleFormAddress}>
                
                    <label htmlFor="address">Direccion:</label>
                        <input
                        type="text"
                        name="address"
                        value={this.state.address}
                        onChange={(e)=>this.handleChange(e)}
                        />

                    <button type="submit">Editar direccion</button>

                </form>

                <form onSubmit={this.handleFormPhone}>
                
                <label htmlFor="phone">Teléfono:</label>
                    <input
                    type="text"
                    name="phone"
                    value={this.state.phone}
                    onChange={(e)=>this.handleChange(e)}
                    />

                <button type="submit">Editar teléfono</button>

                </form>

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