import React, { useState, useEffect } from "react";
import "components/Application.scss";
import { getAppointmentsForDay } from "helpers/selectors"
import DayList from "./DayList"
import Appointment from "./Appointment"
import axios from 'axios';


const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  },
];

// const appointments = [
//   {
//     id: 1,
//     time: "12pm",
//   },
//   {
//     id: 2,
//     time: "1pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer:{
//         id: 3,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   },
//   {
//     id: 3,
//     time: "2pm",
//   },
//   {
//     id: 4,
//     time: "3pm",
//     interview: {
//       student: "Archie Andrews",
//       interviewer:{
//         id: 4,
//         name: "Cohana Roy",
//         avatar: "https://i.imgur.com/FK8V841.jpg",
//       }
//     }
//   },
//   {
//     id: 5,
//     time: "4pm",
//   }
// ];


export default function Application(props) {
  const [state, setState] = useState({
    day:'Monday',
    days: [],
    appointment: {}
  });

  const dailyAppointments = getAppointmentsForDay(state, state.day)

  const setDay = day => setState({...state, day})

  
   useEffect( () => {
   Promise.all([
    axios.get('/api/days'),
    axios.get('/api/appointments'),
  ])
    .then(response => {
      setState(prev => ({
        ...prev,
        days: [...response[0].data],
        appointments: {...response[1].data},
      }))
    })
  }, [])

  return (
    <main className="layout">
      <section className="sidebar">
        <img
        className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"
      />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu">
        <DayList
          days={state.days}
          value={state.day}
          onChange={setDay}
      />
      </nav>
      <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      />
      </section>
      
      <section className="schedule">
        {dailyAppointments.map(appointment => 
        <Appointment key={appointment.id} {...appointment} />
        )}
        <Appointment key="last" time="5pm" />
      </section>
      
    </main>
  );
}
