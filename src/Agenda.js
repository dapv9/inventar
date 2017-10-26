import React, {Component} from 'react'
import moment from 'moment'
import events from './events'
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';




BigCalendar.momentLocalizer(moment); 


class Agenda extends Component {
  constructor (props) {
    super(props);

    this.state = {
      events: events,
      
    }
  }
  render () {

    return (
      <div id="calendario" >
      <center>
        <h3>CITAS AGENDADAS</h3>
      </center>
      <BigCalendar
        
        style={{height: '420px'}}
        startAccessor='start'
        endAccessor='end'
        selectable={true}
        events={this.state.events}
        onSelectEvent={event => alert(event.desc)}
        defaultView='month'
        min = {new Date(2017,4,4,6,0,0)}
        max = {new Date(2017,4,4,19,0,0)}
      />
      </div>
      
    );
  }
}



export default Agenda;