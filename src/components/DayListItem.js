import React from "react";
import "./DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {
  const dayClass = classNames("day-list__item", {
    "--selected": props.selected,
    "--full": !props.spots,
  });
  const formatSpots = (spots) => {
    return spots === 0
      ? "no spots remaining"
      : spots === 1
      ? "1 spot remaining"
      : `${spots} spots remaining`;
  };
  
  return (
    <li onClick={() => props.setDay(props.name)} className={dayClass}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}
