/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

const Contacto = () => {
  return (
    <div>
      <div>
       
        <h1>Aquí telefono del colegio, email, ubicacion, y distintos papeles</h1>
        <h2>(+34) - 651-504-840</h2>
        <h2>christianaresvillan@hotmail.com</h2>
        <iframe
         width="425"
          height="350"
           frameBorder="0" 
           scrolling="no"
            marginHeight="0" 
            marginWidth="0" 
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1407676935195923%2C38.57593798967837%2C-0.1336866617202759%2C38.57977102759976&amp;layer=mapnik&amp;marker=38.57785453420666%2C-0.13722717761993408">
            </iframe>
            <br/>
            <small>
            <a href="https://www.openstreetmap.org/?mlat=38.57785&amp;mlon=-0.13723#map=18/38.57785/-0.13723">Ver mapa más grande</a></small>
        
      </div>
    </div>
  )
}

export default Contacto;