import React, { Component } from 'react';
import ListaPacientes from './ListaPacientes';
import ListaCitas from './ListaCitas';
import HistoriasClinicas from './HistoriasClinicas';
import ListaDoctores from './ListaDoctores';



export default class Consulta extends Component{
	constructor(props){
		super(props);
		this.state ={
			codigoCita: " ",
			valor: null,
			doctor: " ",
			nombrePaciente: " ",
			apellidoPaciente: " ",
			direccionPaciente: " ",
			telefonoPaciente: " ",
			edadPaciente: " ",
			antecedentes: "",
			nombreDoctor:"",
			diagnostico: " "
		}

		this.tomaValor = this.tomaValor.bind(this);
		this.buscarCita = this.buscarCita.bind(this);
	}
	

	tomaValor(e){

		this.setState({codigoCita: e.target.value})
		console.log(this.state.codigoCita);

	}
	tomarDiagnostico(e) {
		this.setState({diagnostico: e.target.value})
	}

	guardarDiagnostico() {
		let termino = null;
		HistoriasClinicas.forEach((historia) =>{
			ListaCitas.forEach((cita) => {
				if(historia.idPaciente==cita.paciente && this.state.codigoCita==cita.idCita && historia.idPaciente !== termino) {
					historia.Dianostico = historia.Dianostico + this.state.diagnostico;
				}
			});
		});
	}

	buscarCita(){
		this.setState({codigoCita: " "});
		console.log(this.state.codigoCita)
		let boton = [];
		let termino = null;
		ListaCitas.forEach((cita) =>{
				if(cita.idCita !== termino && cita.idCita ==this.state.codigoCita) {
					
					this.setState({valor: cita.valor , doctor: cita.doctor});
					console.log("La cita existe ");
					
					ListaPacientes.forEach((paciente)=>{
						if(paciente.idPaciente== cita.paciente){
							this.setState({nombrePaciente: paciente.nombre ,
							               apellidoPaciente: paciente.apellido,
							               direccionPaciente: paciente.direccion,
							               telefonoPaciente: paciente.telefono,
							               edadPaciente: paciente.edad
							           });
						}
					});

					HistoriasClinicas.forEach((historia)=>{
						if(historia.idPaciente== cita.paciente){
							this.setState({antecedentes: historia.Antecedentes});
						}
					});
					ListaDoctores.forEach((doctor) => {
						if(doctor.idDoctor==cita.doctor) {
							this.setState({nombreDoctor: doctor.nombre + doctor.apellido});
						}
					});

					}
					termino = cita.idCita;
				});
			
				
			}
		

	render(){
		return(
			<div>
			<center>
			Codigo de la cita: <input type="text"  placeholder="Codigo cita" onChange={this.tomaValor} onFocus={this.value=""}/>
			<input type="button" value="Buscar" onClick={this.buscarCita}/>
				<p>Identificacion del Doctor: {this.state.doctor + " "}</p>
				<p>Nombre del Doctor: {this.state.nombreDoctor + " "}</p>
				<p>Valor de la cita: {this.state.valor}</p>
				<p>Nombre del Paciente: {this.state.nombrePaciente} {this.state.apellidoPaciente}</p>
				<p>Direccion: {this.state.direccionPaciente}</p>
				<p>Telefono: {this.state.telefonoPaciente}</p>
				<p>Edad: {this.state.edadPaciente}</p>
				<p>{"Antecedentes: " + this.state.antecedentes}</p>
				<input type="text" placeholder="Diagnostico" onChange={this.tomarDiagnostico} onFocus={this.value=""}/>
				<input type="button" value="Guardar " onClick={this.guardarDiagnostico}/>
				<p>{"Diagnostico: " + this.state.diagnostico}</p>
				</center>
			</div> 
			);
	}

}