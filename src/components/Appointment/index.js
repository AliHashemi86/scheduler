import React from "react";
import "./styles.scss";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Form from "./Form";
import Error from "./Error";
import Status from "./Status";
import Confirm from "./Confirm";
import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const ERROR_SAVE = "ERROR_SAVE";
  const DELETE = "DELETE";
  const ERROR_DELETE = "ERROR_DELETE";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);
    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch((error) => transition(ERROR_SAVE, true));
  }

  function cancel() {
    transition(DELETE, true);
    props
      .cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch((error) => transition(ERROR_DELETE, true));
  }

  return (
    <article className="appointment">
      <Header time={props.time} />

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SAVING && <Status message={"Saving"} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === CONFIRM && (
        <Confirm
          message={"Are you sure want to delete the appointment?"}
          onCancel={back}
          onConfirm={cancel}
        />
      )}
      {mode === DELETE && <Status message="Deleting.." />}
      {mode === CREATE && (
        <Form interviewers={props.interviewers} onSave={save} onCancel={back} />
      )}
      {mode === EDIT && (
        <Form
          interviewers={props.interviewers}
          onSave={save}
          onCancel={back}
          name={props.interview.student}
          interviewer={props.interview.interviewer.id}
        />
      )}
      {mode === ERROR_SAVE && <Error message="save" onClose={back} />}
      {mode === ERROR_DELETE && <Error message="delete" onClose={back} />}
    </article>
  );
}
