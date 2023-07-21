import React,{useState} from "react";
import './WeekForm.css';
import NewWeek from './NewWeek.js';

export default function WeekForm(props){
    const [isEditing,setIsEditing]= useState(false);

    const saveWeekDataHandler = (enteredWeekData,enteredOrder,enteredWeek) => {
        const weekData = {
          week_number: props.items.length+1,
          ...enteredWeekData,
        };
        props.onAddWeek(weekData,enteredOrder,enteredWeek);
        setIsEditing(false);
      };

    const startEditingHandler=()=>{
        setIsEditing(true);
      };
    
      const stopEditingHandler=()=>{
        setIsEditing(false);
      };
    return( 
        <div className="addnew">
        {!isEditing &&<div className="image2"><img className="image2" src='AddNewWeekLogo.png' alt="logo"/></div>}
        {!isEditing && <button onClick={startEditingHandler} className="addnewbtn" >Add New Week</button>}
        {isEditing && <NewWeek items={props.items} className='formdiv' onSaveWeekData={saveWeekDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    );
}