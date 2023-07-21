import "./TabItem.css";
import React from "react";

export default function TabItem(props) {
  
  const clickHandler = () => {
    props.onClick(props.id);
    
  };
  return (
    <button
      className={props.isActive? "active" : 'tabs'}
      onClick={clickHandler}
    >
      <p>Week {props.week_number}</p>
    </button>
  );
}
