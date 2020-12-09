  
import React from 'react'

const LogIn = (props)=>{
  return(
    <div>
      <h2>Log In</h2>
      <form onSubmit={props.submitLogIn}>

        <label htmlFor="username">Usuario: </label>
        <input 
          type="text" 
          name="username" 
          value={props.loggingParent.username} 
          onChange={(event)=>props.changeHandlerLogIn(event.target)}
        />

        <label htmlFor="password">Contraseña: </label>
        <input 
          type="password" 
          name="password" 
          value={props.loggingParent.password} 
          onChange={(event)=>props.changeHandlerLogIn(event.target)}
        />

        <button type="submit">Log In</button>

      </form>
    </div>
  )
}

export default LogIn