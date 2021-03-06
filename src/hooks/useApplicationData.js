import axios from "axios";
import React, { useState, useEffect } from "react";

export default function useApplicationData() {
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  const updateSpots = (day, days, appointments) => {
    const dayIndex = days.findIndex((dayName) => dayName.name === day);

    const dayObj = days[dayIndex];
    const aptIds = dayObj.appointments;

    let spots = 0;
    for (const id of aptIds) {
      let appointment = appointments[id];
      !appointment.interview && spots++;
    }
    let newDayObj = { ...dayObj, spots };
    let newDaysArray = [...days];
    newDaysArray[dayIndex] = newDayObj;
    return newDaysArray;
  };

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.put(`/api/appointments/${id}`, appointment).then((res) => {
      let newDays = updateSpots(state.day, state.days, appointments);
      setState({ ...state, appointments, days: newDays });
    });
  }

  function cancelInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.delete(`/api/appointments/${id}`).then(() => {
      let newDays = updateSpots(state.day, state.days, appointments);
      setState({ ...state, appointments, days: newDays });
    });
  }

  return { state, setDay, bookInterview, cancelInterview };
}
