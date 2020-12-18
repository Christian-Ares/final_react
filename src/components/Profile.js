import React from 'react';
import { Component } from 'react';
import '../styles/Profile.css';
import AuthService from './auth/auth-service';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            lastName: '',
            gender: '',
            birth: '',
            lunch: false,
            morning: false,
            loggedInUser: this.props.loggedInUser,
            address: '',
            phone: '' ,
            childrens: null
        }
        this.service = new AuthService();
    }

    componentDidMount = () => {
        const { address, phone} = this.props.loggedInUser
        this.setState({ address, phone })
        this.service.get_child(this.props.loggedInUser._id)
        .then(response=>{
            this.setState({
                childrens: response
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const name = this.state.name;
        const lastName = this.state.lastName;
        const gender = this.state.gender;
        const birth = this.state.birth;
        const lunch = this.state.lunch;
        const morning = this.state.morning;

    this.service.add_child(name, lastName, gender, birth, lunch, morning, this.props.loggedInUser._id)
    .then( response => {
        this.setState({
            name: "",
            lastName: "",
            gender: "",
            birth: "",
            lunch: false,
            morning: false,
        });
        console.log(response)
    })
    .catch( error => console.log(error) )
    }

   renderChilds = () => {
       return this.state.childrens.map((children, index)=>{
           return (
            <div class="wrap" key={index}>
                <div className="child-card" >
                    <div class="child-content">
                        <p><strong>Nombre:</strong> {children.name}</p>
                        <div class="divider"></div>
                        <p><strong>Apellidos:</strong> {children.lastName}</p>
                        <div class="divider"></div>
                        <p><strong>Género:</strong> {children.genre}</p>
                        <div class="divider"></div>
                        <p><strong>Fecha de nacimiento:</strong> {children.birth}</p>
                    </div>
                </div>
            </div>
           )
       })
    }
    
    handleFormAddress = (e) => {
        e.preventDefault();
        const address = this.state.address
        this.service.edit_address(this.state.loggedInUser._id, {address})
        .then(response=>{
            this.setState({
                newAddress: address
            })
            const editedUser = {...this.props.loggedInUser, address: this.state.newAddress}
            this.props.getTheUser(editedUser)
            })
            .catch(err => console.log(err))
    }

    handleFormPhone = (e) => {
        e.preventDefault();
        const phone = this.state.phone
        this.service.edit_phone(this.state.loggedInUser._id, {phone})
        .then(response=>{
            this.setState({
                newPhone: phone
            })
            const editedPhone = {...this.props.loggedInUser, phone: this.state.newPhone}
            this.props.getTheUser(editedPhone)
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
        if (name === 'lunch'){
           this.setState({[name]: value, lunch: e.target.checked }); 
        } else if(name === 'morning'){
            this.setState({[name]: value, morning: e.target.checked }); 
        } else{
            this.setState({[name]: value});
        }
      }

    render(){
        return (
            <div>
                <h1>Bienvenido, {this.state.loggedInUser.name}</h1>
                <h2>Dirección actual:</h2> {this.state.newAddress ? <h2>{this.state.newAddress}</h2> : <h2>{this.props.loggedInUser.address}</h2>}
                <h2>Teléfono actual:</h2> {this.state.newPhone ? <h2>{this.state.newPhone}</h2> : <h2>{this.props.loggedInUser.phone}</h2>}

                <div id="profile-form">
                    <div class="columna-formulario">
                        <form onSubmit={e => this.handleFormAddress(e)}>
                            <label class="form-label" htmlFor="address">Direccion:</label>
                            <input
                                type="text"
                                name="address"
                                onChange={(e)=>this.handleChange(e)}
                            />
                            <button type="submit" class="submit-button">Editar direccion</button>
                        </form>
                    </div>

                    <div class="columna-formulario">
                        <form onSubmit={e => this.handleFormPhone(e)}>
                        <label class="form-label" htmlFor="phone">Teléfono:</label>
                        <input
                            type="text"
                            name="phone"
                            onChange={(e)=>this.handleChange(e)}
                        />
                        <button type="submit" class="submit-button">Editar teléfono</button>
                        </form>
                    </div>

                    <div class="columna-formulario">
                        
                    <form onSubmit={this.handleFormSubmit}>
                        <div class="columna-formulario">
                            <label class="form-label" htmlFor="name">Nombre:</label>
                            <input
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={(e)=>this.handleChange(e)}
                            />
                            <div class="submit-button"></div>
                        </div>

                        <div class="columna-formulario">
                            <label class="form-label" htmlFor="lastName">Apellidos:</label>
                            <input
                                type="text"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={(e)=>this.handleChange(e)}
                            />
                            <div class="submit-button"></div>
                        </div>

                        <div class="columna-formulario">
                            <label class="form-label" htmlFor="gender">Género:</label>
                            <input
                                type="text"
                                name="gender"
                                value={this.state.gender}
                                onChange={(e)=>this.handleChange(e)}
                            />
                            <div class="submit-button"></div>
                        </div>

                        <div class="columna-formulario">
                            <label class="form-label" htmlFor="birth">Nacimiento:</label>
                            <input
                                type="date"
                                name="birth"
                                value={this.state.birth}
                                onChange={(e)=>this.handleChange(e)}
                            />
                            <div class="submit-button"></div>
                        </div>

                        <div class="columna-formulario">
                            <label class="form-label" htmlFor="lunch">Servicio de comedor:</label>
                            <input
                                type="checkbox"
                                name="lunch"
                                value={this.state.lunch}
                                onChange={(e)=>this.handleChange(e)}
                            />
                            <div class="submit-button"></div>
                        </div>
                        
                        <div>
                            <label class="form-label" htmlFor="morning">Servicio de buenos días cole:</label>
                            <input
                                type="checkbox"
                                name="morning"
                                value={this.state.morning}
                                onChange={(e)=>this.handleChange(e)}
                            />
                            <button type="submit" class="submit-button">Añadir</button>
                        </div>
                    </form>
                    </div>

                    <br/>
                </div>

                <div class="clear"></div>
                {this.state.childrens && this.renderChilds()}

            </div>
        )
    }
}

export default Profile;