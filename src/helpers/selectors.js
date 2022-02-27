export function getAppointmentsForDay(state, day) {
  const foundDay = state.days.find(appointment => appointment.name === day)
  
  if(!foundDay) {
    return []
  }
  return foundDay.appointments.map(num => state.appointments[num])
};

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewer = state.interviewers[interview.interviewer];
  return { ...interview, interviewer };
}