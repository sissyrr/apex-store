import * as apiService from './api.service'

class Authentication{
  constructor(){
    this.store = window.localStorage;
    this.authenticate = this.authenticate.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }
  async authenticate(credentials){
    try{
      const response = await apiService.post('/api/v1/authenticate',{credentials})
      if(response.data){
        this.store.setItem('CURRENT_USER',JSON.stringify(response.data));
        return true;
      }else{
        this.store.setItem('CURRENT_USER',null)
        return false;
      }
    }catch(error){
      return false
    }
  }
  isAuthenticated(){
    return this.store.getItem('CURRENT_USER') != null;

  }
}

export default new Authentication