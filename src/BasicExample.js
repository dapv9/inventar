import React from 'react'
import Agenda from './Agenda';
import Consulta from './Consulta';
import Paciente from './Paciente';
import Doctor from './Doctor';
import App from './App';
import Recaudos from './Recaudos'
import HorarioDoctores from './HorarioDoctores';
import logo from './logo.png';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const BasicExample = () => (
  <Router>
    <div>
          <nav className="navbar navbar-inverse"> 

          <div className="container-fluid"> 

              <div className="navbar-header"> 

                  <button type="button" className="collapsed navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-9" aria-expanded="false"> 

                      <span className="sr-only">Toggle navigation</span> 

                      <span className="icon-bar"></span> 

                      <span className="icon-bar"></span> 

                      <span className="icon-bar"></span> 

                  </button> 

                 <Link to="/"><img src={logo} alt="logo" className="App-logo-header" /></Link> 

              </div> 

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-9">

              <ul className="nav navbar-nav"> 

              <li><Link to="/">Inicio</Link></li>

              <li><Link to="/pacientes">Pacientes</Link></li>
              <li><Link to="/doctores">Doctores</Link></li>
              <li><Link to="/citas_agendadas">Agenda Citas</Link></li>
              <li><Link to="/consulta">Consulta</Link></li>
              <li><Link to="/horario_doctores">Horario Doctores</Link></li>
              <li><Link to="/recaudado_mes">Recaudado por mes</Link></li>
              
              </ul> 
              
              </div>
          
          </div>
      </nav>

      <Route exact path="/" component={App}/>
      <Route path="/pacientes" component={Paciente}/>
      <Route path="/doctores" component={Doctor}/>
      <Route exact path="/citas_agendadas" component={Agenda}/>
      <Route path="/consulta" component={Consulta}/>
      <Route path="/horario_doctores" component={HorarioDoctores}/>
      <Route path="/recaudado_mes" component={Recaudos}/>
    </div>
  </Router>
)
export default BasicExample
