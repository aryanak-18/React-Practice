import TabItem from "./TabItem";
import React, {useState} from "react";
import "./Tab.css";
import WeekContent from "./WeekContent";
import WeekForm from "./WeekForm";


export default function Tab(props) {

  const [weeks,setWeeks]=useState(props.items);
  const [isActiveID, setIsActiveID] = useState(null);
  const clickHandler=(id)=>{
    setIsActiveID(id);
  };
  const addWeekHandler=(weekData,order,week)=>{
    // console.log(order,week);
    const tempWeek=new Array;
    if(order==="Before"){
      for(let i=0;i<week-1;i++){
        tempWeek.push(weeks[i]);
      }
      weekData.week_number=week;
      tempWeek.push(weekData);
      for (let i=week-1;i<weeks.length;i++)
      {
        weeks[i].week_number=weeks[i].week_number+1;
        tempWeek.push(weeks[i]);
      }
    }
    else{
      for(let i=0;i<=week-1;i++){
        tempWeek.push(weeks[i]);
      }
      weekData.week_number=Number(week)+1;
      tempWeek.push(weekData);
      for (let i=week;i<weeks.length;i++)
      {
        weeks[i].week_number=weeks[i].week_number+1;
        tempWeek.push(weeks[i]);
      }
    }

    setWeeks(tempWeek);
    console.log(tempWeek);
  };
  return (
    <div>
    <div className="weeks-list">
      {weeks.map((week) => (
        <TabItem
          key={Math.random().toString()}
          id={week.id}
          week_number={week.week_number}
          // modules={week.modules}
          isActive={isActiveID===week.id}
          onClick={clickHandler}
        />
      ))}

      <WeekForm items={weeks} onAddWeek={addWeekHandler}/>

      </div>
      <div>
      {weeks.map((week) => (
      <WeekContent key={week.id}
          id={week.id}
          week_number={week.week_number}
          modules={week.modules}
          isActive={isActiveID===week.id} />
          ))}
      </div>
    </div>
  );
}