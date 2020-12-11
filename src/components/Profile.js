import React from 'react';
import { Component } from 'react';

class Profile extends Component {
    
    constructor(props){
        super(props);
        this.state = {loggedInUser: true };
    }
    render(){
        return (
            <div>
                <h1>Bienvenido, {this.props.loggedInUser.name}</h1>
            </div>
        )
    }
}
export default Profile;