import { Route, Switch } from 'react-router';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home'
import Aulas from './components/Aulas'
import Actividades from './components/Actividades'
import Cursos from './components/Cursos'
import Contacto from './components/Contacto'
import Servicios from './components/Servicios'


function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/aulas' component={Aulas} />
        <Route exact path='/actividades' component={Actividades} />
        <Route exact path='/cursos' component={Cursos} />
        <Route exact path='/contacto' component={Contacto} />
        <Route exact path='/servicios' component={Servicios} />
      </Switch>
    </div>
  );
}

export default App;
