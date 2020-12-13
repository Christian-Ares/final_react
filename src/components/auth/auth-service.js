import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:3000',
      withCredentials: true
    });
    this.service = service;
  }

  signup = (name, lastName, address, username, password) => {
    return this.service.post('/signup', {name, lastName, address, username, password})
    .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post("/login", {username, password})
    .then(response => response.data)
  }

  loggedin = () =>{
    return this.service.get("/loggedin")
    .then(response => response.data)
  }

  logout = () =>{
    return this.service.post("/logout", {})
    .then(response => response.data)
  }

  add_child = async (name, lastName, gender, birth, lunch, morning) =>{
    const response = await this.service.post("/add_child", { name, lastName, gender, birth, lunch, morning });
    return response.data;
  }

}

export default AuthService;
