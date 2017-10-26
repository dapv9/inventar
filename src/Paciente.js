import React, { Component } from 'react';
import MostrarCadaPaciente from './MostrarCadaPaciente';
import ListaPacientes from './ListaPacientes';


export default class paciente extends Component{
	render(){
		let cadapaciente =[];
		let boton = [];
		let termino = null;

		ListaPacientes.forEach((paciente) =>{
				if(paciente.id !== termino) {
					cadapaciente.push(<MostrarCadaPaciente paciente={paciente} key={paciente.idPaciente}/>);
					
				}
				termino = paciente.idPaciente;
			});	


		return(
				<center>
				<div><h3>PACIENTES</h3>
				<table className= "App-tablas">
					<thead>
						<tr>
							<th>Identificacion</th>
							<th>Nombre</th>
							<th>Apellido</th>
							<th>Direccion</th>
							<th>Telefono</th>
							<th>Fecha de Nacimiento</th>
							<th>Edad</th>
							<th>Genero</th>
						</tr>
					</thead>
					<tbody>
						{cadapaciente}
					</tbody>
				</table>
				</div>
				</center>
			);
	}
}