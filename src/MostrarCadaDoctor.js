import React, { Component } from 'react';
import BotonAgregarHorario from './BotonAgregarHorario.js';

export default class MostrarCadaDoctor extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<tr>
				
					<td>{this.props.doctor.idDoctor} </td>
					<td>{this.props.doctor.nombre} </td>
					<td>{this.props.doctor.apellido}</td>
					<td>{this.props.doctor.horario}</td>
			</tr>
			);
	}
}