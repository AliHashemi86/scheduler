import React from "react";
import InterviewerListItem from "components/InterviewerListItem"
import "./InterviewerList.scss";

export default function InterviewerList(props) {
  const { interviewers, interviewer, setInterviewer } = props;

  const List = interviewers.map((obj)=> {
    return (
    <InterviewerListItem
    name={obj.name}
    avatar={obj.avatar}
    id={obj.id}
    selected={obj.id===interviewer}
    setInterviewer={setInterviewer}
    />
    )
  })

  return (

  <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul 
    className="interviewers__list">
      {List}
    </ul>
</section>
  )
}
