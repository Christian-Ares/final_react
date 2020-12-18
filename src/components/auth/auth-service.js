import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      // baseURL: 'http://localhost:3000',

      baseURL: 'https://escuela-infantil.herokuapp.com/',
      withCredentials: true
    });
    this.service = service;
  }

  signup = (name, lastName, address, phone, username, password) => {
    return this.service.post('/signup', {name, lastName, address, phone, username, password})
    .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post("/login", {username, password})
    .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get("/loggedin")
    .then(response => response.data)
  }

  logout = () => {
    return this.service.post("/logout", {})
    .then(response => response.data)
  }

  add_child = (name, lastName, gender, birth, lunch, morning, userId) =>{
    return this.service.post("/add_child", { name, lastName, gender, birth, lunch, morning, userId })
    .then(response => response.data)
  }

  edit_address = (id, address) => {
    return this.service.post(`/edit_address/${id}`, address)
    .then(response => response.data)
  }

  edit_phone = (id, phone) => {
    return this.service.post(`/edit_phone/${id}`, phone)
    .then(response => response.data)
  }

  get_child = (id) => {
    return this.service.get(`/children/${id}`)
    
    .then(response => response.data)
  }

}

export default AuthService;