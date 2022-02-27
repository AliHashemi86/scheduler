export function getAppointmentsForDay(state, day) {

  const foundDay = state.days.find(appointment => appointment.name === day)
  
  if(foundDay) {
  return foundDay.appointments.map(num => state.appointments[num])
  }
  return []
};