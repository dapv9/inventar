import BigCalendar from 'react-big-calendar';
import React from 'react';
import ReactDOM from 'react-dom';
import Paciente from './Paciente';
import Agenda from './Agenda';
import { PropTypes } from 'react';
import Doctor from './Doctor.js';
import HorarioDoctores from './HorarioDoctores';
import Consulta from './Consulta';
import BasicExample from './BasicExample';


import ListaPacientes from './ListaPacientes';
import ListaDoctores from './ListaDoctores';

//import App from './App';
//import './index.css';

const app = document.getElementById('app');
//ReactDOM.render(<Paciente />, app);
//ReactDOM.render(<Doctor informacion ={ListaDoctores}/>, app);
//ReactDOM.render(<Agenda />, document.getElementById('calen'));
//ReactDOM.render(<HorarioDoctores informacion ={ListaDoctores}/>, app);
ReactDOM.render(<BasicExample/>, app);


//require("react-big-calendar/lib/css/react-big-calendar.css");
