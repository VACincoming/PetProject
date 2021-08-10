import axios from 'axios';

const apiUrl = 'https://back-finder.herokuapp.com/registration'

const registrationApi = (data:any) => {
  return axios.post(`${apiUrl}/registration`, data)
};

const activationCodeApi = (code:string) => {
  return axios.get(`${apiUrl}/${code}`)
};

const loginApi = (data:any) => {
  return axios.post(`${apiUrl}/login`, data)
};

export {
  registrationApi,
  loginApi,
  activationCodeApi
}