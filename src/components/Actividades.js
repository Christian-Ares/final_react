import React from 'react';
import '../styles/Actividades.css'

const Actividades = () => {
  const actividades = [
    {
      titulo: 'Excursión al zoo',
      profesor: 'Andrea',
      fecha: 'Lunes 21 de Diciembre, desde las 9:00 hasta las 14:00',
      descripcion: 'Haremos una visita al zoo, en la cual podremos ver a los animales en sus habitats.',
      instrucciones: 'Para apuntarse, llamar al telefono que aparece en la pestaña de contacto, o mandar un mail.'
    },
    {
      titulo: 'Vamos al parque!',
      profesor: 'Emilio',
      fecha: 'Miercoles 23 de Diciembre, desde las 10:00 hasta las 12:00',
      descripcion: 'Aprovechando que hace buen tiempo, hemos decidido ir al parque que hay al lado de la escuela a jugar un poco',
      instrucciones: 'Para apuntarse, llamar al telefono que aparece en la pestaña de contacto, o mandar un mail.'
    },
    {
      titulo: 'Feliz Navidad',
      profesor: 'Ana',
      fecha: 'Viernes 25 de Dicmebre, desde las 10:00 hasta las 13:00',
      descripcion: 'Con los más mayores, haremos algunos dibujos y regalos para darle a los papis por navidad!',
      instrucciones: 'Para apuntarse, llamar al telefono que aparece en la pestaña de contacto, o mandar un mail.'
    }
  ]
  return (
      <div class="wrap">
        <h1>Actividades para los niños</h1>

        {
          actividades.map((actividad, index) => 
            <div>
              <div class="actividades-card" key={index}>
                <div class="actividades-content">
                  <h3> {actividad.titulo}</h3>
                  <div class="divider"></div>
                  <p><strong>Profesor a cargo:</strong> {actividad.profesor}</p>
                  <div class="divider"></div>
                  <p><strong>Fecha:</strong> {actividad.fecha} </p>
                  <div class="divider"></div>
                  <p>{actividad.descripcion}</p>
                  <div class="divider"></div>
                  <p> {actividad.instrucciones}</p>
                </div>
              </div>
              <br/>
          </div>
       ) 
      }   
    </div>
  )
}

export default Actividades;