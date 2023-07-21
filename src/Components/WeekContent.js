import React from "react";
import "./WeekContent.css";
export default function WeekContent(props) {
let task='';
    let tasks=new Array();
    for(let i=0;i<props.modules.length;i++)
    {
        tasks.push(props.modules[i].name);
        // if(props.modules[i].tasks){
        //     for(let j=0;i<props.modules[i].tasks.length;j++){
        //         tasks.push("Tasks : ");
        //         tasks.push(props.modules[i].tasks[j].name);
        //     }
        // }
    }

    for(let i=0;i<tasks.length;i++){
        task=task+"Module "+(i+1)+" : "+tasks[i]+"\n";
    }

    const list = tasks.map((item,index) => 
                             <div key={Math.random().toString()}>Module {index+1} : {item}<br/></div>
                           );
        // console.log(tasks);

  return (
    <div className={props.isActive? "week-content" : 'week-content inactive'}>
      <div className={props.isActive? "week-content-1" : 'week-content-1 inactive'}>Week {props.week_number} <br/> Week Id : {props.id}</div>
      <div className="broadline"></div>
      <div className={props.isActive? "week-content-2" : 'week-content-2 inactive'}>Modules <br/> {list}</div>
    </div>
  );
}
