import React, {Component} from 'react';
import events from './events';
import ListaCitas from './ListaCitas';


export default class MostrarRecaudos extends Component {

	render() {
		let mes;
		let recaudo=[];
		let mesLetras;
		for(mes = 0; mes < 12; mes++) {
			let recaudado = 0;
			let termino = null;
			events.forEach((event) => {
				ListaCitas.forEach((citas) => {
					var mesCita = event.start.getMonth();

					if(mesCita==mes && event.idCita==citas.idCita && citas.doctor==this.props.doctor.idDoctor) {
						recaudado = recaudado + citas.valor ;
						console.log("entro");
					}
					termino = citas.doctor;
				});	
			});
			switch(mes) {
				case 0:
					mesLetras = "Enero"
					break;
				case 1:
					mesLetras = "Febrero"
					break;
				case 2:
					mesLetras = "Marzo"
					break;
				case 3:
					mesLetras = "Abril"
					break;
				case 4:
					mesLetras = "Mayo"
					break;
				case 5:
					mesLetras = "Junio"
					break;
				case 6:
					mesLetras = "Julio"
					break;
				case 7:
					mesLetras = "Agosto"
					break;
				case 8:
					mesLetras = "Septiembre"
					break;
				case 9:
					mesLetras = "Octubre"
					break;
				case 10:
					mesLetras = "Noviembre"
					break;
				case 11:
					mesLetras = "Diciembre"
					break;

			}
			if (recaudado !== 0) {
				recaudo.push(<tr><td>{mesLetras}</td>
					<td>{this.props.doctor.nombre} {this.props.doctor.apellido}</td>
					<td>{recaudado}</td></tr>
				)
			}
		}
		
		return (
				<tbody>{recaudo}</tbody>
			);

	}
}