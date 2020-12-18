import React from 'react';
import '../styles/Servicios.css'

const Servicios = () => {
  return (
    <div>
      <div class="wrap">
       
        <h1>Servicios ofertados por el centro, tales como comedor, y buenos días cole.</h1>

        <br/>

        <div class="services-card">
          <div class="services-content">
            <h2>Servicio de comedor</h2>
            <p>Ofrecemos un servicio de comedor para las familias que tienen una jornada laboral larga, donde los niños puedan comer de forma saludable, todo asesorado por una nutricionista externa, y con todos los servicios de cocina integrados en el centro</p>
          </div>
        </div>
        <br/>

        <div class="services-card">
          <div class="services-content">
            <h2>Servicio de "Buenos días cole"</h2>
            <p>Ofrecemos un servicio de buenos días cole, para aquellas familias que comiencen su jornada laboral temprano, para así poder dejar a sus peques en la escuela desde primera hora, el horario de este servicio comienza a las 7:00 AM</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Servicios;