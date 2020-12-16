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

  add_child = (name, lastName, gender, birth, lunch, morning) =>{
    return this.service.post("/add_child", { name, lastName, gender, birth, lunch, morning })
    .then(response => response.data)
  }

  edit_parent = (id, address, phone) => {
    return this.service.post(`/edit_parent/${id}`, {phone, address })
    .then(response => response.data)
  }
}

export default AuthService;