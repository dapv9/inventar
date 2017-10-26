import React, { Component } from 'react';
import TimeDoctor from './TimeDoctor';

export default class BotonAgendarCita extends Component{
	constructor(props){
		super(props);
		
	}
	render(){
		return(
			<div>
			
			<TimeDoctor idDoctor = {this.props.horario}/>
			</div>
			
			);
	}
}