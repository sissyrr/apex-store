
import * as serviceAPI from '../../Services/api.service'

export const addRecord = (record)=>{
  const payload = {record}
  return {
    type: "productADDRecord",
    payload
  }
}

export const setRecords = (records)=>{
  const payload = {records};
  return {
    type: "productSetRecords",
    payload
  }
}

export const loadRecords = ()=>{
  return (dispatch) => {
    serviceAPI.get('/api/v1/products')
    .then(response => {
      console.log("Preciso enviar os dados da resposta para a store");
      dispatch(setRecords(response.data));
    })
  }
}