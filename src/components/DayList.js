import React from "react";
import DayListItem from "components/DayListItem"

export default function DayList (props) {
  const List = props.days.map(props => 
  <DayListItem 
  key={props.id} 
  name={props.name} 
  spots={props.spots} 
  selected={props.name === props.value} 
  setDay={props.onChange}/>
  )
  return (
    <ul>
      {List}
    </ul>
  )
}

