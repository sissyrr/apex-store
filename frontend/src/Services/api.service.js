import axios from 'axios';

export const get = (path)=>{
  return  axios.get(path);
}

export const post = (path,data)=>{
  return  axios.post(path,data);
}

export const put = (path,data)=>{
  return  axios.put(path,data);
}

export const remove = (path)=>{
  return  axios.delete(path);
}

