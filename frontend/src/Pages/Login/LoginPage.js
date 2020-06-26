import React from 'react'
import history from '../../history'
import {routes} from '../../constants'
import LoginForm from './LoginForm';
import './LoginPage.css'
import authenticationService from '../../Services/authentication.service'

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: {
        email: '',
        password: ''
      },
      errorMessage: ''
    }
  }

  onInputHandler = (event)=>{
    const target = event.target;
    const {name,value} = target;
    this.setState((prev)=>{
      const credentials = {...prev.credentials,[name]:value};
      return {
        credentials
      }
    })
  }

  onConfirmHandler = async(event)=>{
    try{
      const result = await authenticationService.authenticate(this.state.credentials)
      if(result){
        this.setState({errorMessage: ''})
        history.push(routes.ADM);
      }else{
        this.setState({errorMessage: 'Login ou senha inválidos!'})
      }
    }catch(error) {
      alert('Falha ao acessar o login')
    }
    this.setState({
      credentials:{
        email:'',
        password:''
      }
    })
  }

render(){
  return (
    <div className="container">
      <LoginForm
      errorMessage={this.state.errorMessage}
      credentials={this.state.credentials}
      onInputChange={this.onInputHandler}
      onConfirm={this.onConfirmHandler}

      />
    </div>
  )
}
}


export default LoginPage;