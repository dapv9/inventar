import React, { Component } from 'react';

export default class MostrarCadaPaciente extends Component{
	render(){
		return(
			<tr>
				
					<td>{this.props.paciente.idPaciente} </td>
					<td>{this.props.paciente.nombre} </td>
					<td>{this.props.paciente.apellido}</td>
					<td>{this.props.paciente.direccion}</td>
					<td>{this.props.paciente.telefono}</td>
					<td>{this.props.paciente.fechaNacimiento}</td>
					<td>{this.props.paciente.edad}</td>
					<td>{this.props.paciente.genero}</td>
			</tr>
			);
	}
}