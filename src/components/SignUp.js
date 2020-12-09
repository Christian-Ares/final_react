import React from 'react'

const SignUp = (props)=>{
  return(
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={props.submitSignUp}>

        <label htmlFor="username">Usuario: </label>
        <input 
          type="text" 
          name="username" 
          value={props.newParent.username} 
          onChange={(event)=>props.changeHandlerSignUp(event.target)}
        />

        <label htmlFor="password">Contraseña: </label>
        <input 
          type="password" 
          name="password" 
          value={props.newParent.password} 
          onChange={(event)=>props.changeHandlerSignUp(event.target)}
        />

        <button type="submit">Crear Usuario</button>

      </form>
    </div>
  )
}

export default SignUp;