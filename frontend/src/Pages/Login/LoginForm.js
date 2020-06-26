import React from 'react'
import './LoginForm.css'


const LoginForm = (props) => {
  let error = null;
  if (props.errorMessage) {
    error = (
      <p>{props.errorMessage}</p>
    )
  }
  return (
    <div className="box">
      <h1>Login</h1>
      <div className="form">
        <label>Email</label>
        <input onChange={props.onInputChange} type="email" name="email" value={props.credentials.email} placeholder="Digite seu email" />
        <label>Senha</label>
        <input onChange={props.onInputChange} type="password" name="password" value={props.credentials.password} placeholder="Digite sua senha" />
        {error}
      </div>
      <button className="button-entrar" onClick={props.onConfirm}>ENTRAR</button>
    </div>
  )
}

export default LoginForm