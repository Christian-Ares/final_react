import React, { Component } from 'react';
import '../styles/Home.css'
import anaImg from '../Teachers/Ana.jpeg';
import andreaImg from '../Teachers/Andrea.jpeg';
import emilioImg from '../Teachers/Emilio.jpeg';


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {...this.state, loggedInUser:this.props.loggedInUser};
  }
  
  render () {
    const profesores = [
      {
        nombre: "Ana",
        Img: anaImg,
        educacion: "Maestra de Educación Infantil",
        especialidad: "Especialista en Psicología infantil"
      },
      {
        nombre: "Andrea",
        Img: andreaImg,
        educacion: "Maestra de Educación Infantil",
        especialidad: " Especialista en Transtornos del lenguaje"
      },
      {
        nombre: "Emilio",
        Img: emilioImg,
        educacion: "Maestro de Educación Infantil",
        especialidad: "Especialista en Autismo Infantil"
      },

    ];

    return (
      <div class="home">
        {this.props.loggedInUser ?
          <div class="wrapper">
            <h1>Nuestros profesores</h1>

            <div class="profesores-wrapper">
              {
                profesores.map((profe, index) => {
                  return(
                    <div class="card" key={index}>
                      <div class="card-content">
                        <img src={profe.Img} alt={profe.nombre} width="auto" height="350px"></img>
                        <p><strong>Nombre:</strong> {profe.nombre}</p>
                        <div class="divider"></div>
                        <p><strong>Educación:</strong> {profe.educacion}</p>
                        <div class="divider"></div>
                        <p><strong>Especialidad:</strong> {profe.especialidad}</p>
                      </div>
                    </div>
                    ) 
                  }
                )
              }
            </div> 
          </div> 
          : null
        }
      </div>
    )
  }
}

export default Home;