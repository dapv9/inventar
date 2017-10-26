import React, { Component } from 'react';
import BotonAgregarHorario from './BotonAgregarHorario.js';

export default class HorarioDoctores extends Component{
	constructor(props){
		super(props);
	}


	render(){
			return(
					
					<div><h3>Doctor(a) {this.props.doctor.idDoctor}: {this.props.doctor.nombre} {this.props.doctor.apellido}</h3>
					<BotonAgregarHorario horario={this.props.doctor.idDoctor} key={this.props.doctor.idDoctor}/>
					</div>
			);
	}
}