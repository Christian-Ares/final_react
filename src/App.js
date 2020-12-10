import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home'
import Aulas from './components/Aulas'
import Actividades from './components/Actividades'
import Cursos from './components/Cursos'
import Contacto from './components/Contacto'
import Servicios from './components/Servicios'
import SignUp from './components/auth/SignUp';
import LogIn from './components/auth/LogIn';
import ProtectedRoute from './components/auth/ProtectedRoute'
import AuthService from './components/auth/auth-service';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }
 
  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  render(){
    this.fetchUser()
      return (
        <div className="App">
          <NavBar userInSession={this.state.loggedInUser} getTheUser={this.getTheUser} />

          <Switch>
            <Route exact path='/' component={Home} />
            <ProtectedRoute userInSession={true} exact path='/aulas' component={Aulas} />
            <ProtectedRoute userInSession={this.state.loggedInUser} exact path='/actividades' component={Actividades} />
            <ProtectedRoute userInSession={this.state.loggedInUser} exact path='/cursos' component={Cursos} />
            <ProtectedRoute userInSession={this.state.loggedInUser} exact path='/contacto' component={Contacto} />
            <ProtectedRoute userInSession={this.state.loggedInUser} exact path='/servicios' component={Servicios} />
            <Route exact path='/signup' render={() => <SignUp getUser={this.getTheUser}/>}/>
            <Route exact path='/login' render={() => <LogIn getUser={this.getTheUser}/>}/>
          </Switch>
        </div>
      );
    }
  }

export default App;
