import React from 'react';
import '../styles/Aulas.css'

const Aulas = () => {
  return (
    <div>
      <div class="wrap">
       
        <h1>Aquí vemos todas las aulas</h1>

        <br/>
        <div class="aulas-card">
          <div class="aulas-content">
            <h2>0-1 años</h2>
            <div class="divider"></div>
            <h2>Las jirafas</h2>
            <div class="divider"></div>
            <h2>Ana</h2>
            <div class="divider"></div>
            <h2>Psicomotridad gruesa</h2>
          </div>
        </div>

        <br/>

        
        <div class="aulas-card">
          <div class="aulas-content">
            <h2>1-2 años</h2>
            <div class="divider"></div>
            <h2>Las mariquitas</h2>
            <div class="divider"></div>
            <h2>Andrea</h2>
            <div class="divider"></div>
            <h2>Qué se trabaja</h2>
          </div>
        </div>

        <br/>

        <div class="aulas-card">
          <div class="aulas-content">
            <h2>2-3 años</h2>
            <div class="divider"></div>
            <h2>Los pingüinos</h2>
            <div class="divider"></div>
            <h2>Emilio</h2>
            <div class="divider"></div>
            <h2>Psicomotricidad fina, psicología</h2>
          </div>
        </div>

        <br/>
        
      </div>
    </div>
  )
}

export default Aulas;