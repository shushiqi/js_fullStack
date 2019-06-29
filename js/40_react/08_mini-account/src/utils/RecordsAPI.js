import axios from 'axios'
const api = "https://www.easy-mock.com/mock/5cfa41df40971927560c5d57/account"

export const getAll = () => axios.get(`${api}`)   

export const create = (body) => 
  axios.post(`${api}`, body)
