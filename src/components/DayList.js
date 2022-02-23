import React from "react";
import DayListItem from "components/DayListItem"

export default function DayList (props) {
  const dayList = props.days
  const List = dayList.map(obj => <DayListItem key={obj.id} name={obj.name} spots={obj.spots} selected={obj.name===props.day} setDay={props.setDay}/>
  )
  return (
    <ul>
      {List}
    </ul>
  )
}

