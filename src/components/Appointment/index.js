import React from 'react';
import "./styles.scss";
import Header from "./Header.js";
import Empty from "./Empty.js";
import Show from "./Show.js";
import Form from "./Form.js";
import Status from "./Status.js";
import useVisualMode from 'hooks/useVisualMode';



export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const ERROR_SAVE = "ERROR_SAVE";


  const {mode, transition, back} = useVisualMode(
    props.interview ? SHOW : EMPTY
  )

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);
    props.bookInterview(props.id, interview)
    .then(() => transition(SHOW))
    .catch((error) =>transition(ERROR_SAVE, true))
  }

  return (
    
    <article className="appointment">
      <Header time={props.time} />

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SAVING && <Status message={"Saving"} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer.name}
      
          
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
        />
      )}
    </article>
  );
}
