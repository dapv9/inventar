import React, { Component } from 'react';
import MostrarCadaDoctor from './MostrarCadaDoctor.js';
import ListaDoctores from './ListaDoctores';


export default class doctor extends Component{
	render(){
		let cadadoctor =[];
		let boton = [];
		let termino = null;

		ListaDoctores.forEach((doctor) =>{
				if(doctor.id !== termino) {
					cadadoctor.push(<MostrarCadaDoctor doctor={doctor} key={doctor.idDoctor}/>);
					
				}
				termino = doctor.idDoctor;
			});	


		return(<center>
				<div><h3>DOCTORES</h3>
				<table className= "App-tablas">
					<thead>
						<tr>
							<th>Identificacion</th>
							<th>Nombre</th>
							<th>Apellido</th>
							<th>Horario</th>
						</tr>
					</thead>
					<tbody>
						{cadadoctor}
					</tbody>
				</table>
				</div>
			 </center>
			);
	}
}