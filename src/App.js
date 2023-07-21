import Weeks from "./Components/Weeks";
// import NewWeek from "./Components/NewWeek";
// import { useState } from "react";

const DUMMY_WEEKDATA = [
      {
          id:1,
          week_number: 1,
          modules: [
              {
                  id: "mod1",
                  name: "Write 5 data types available in CPP?"
              },
              {
                  id: "mod2",
                  name: "What are pointers in CPP?",
                  tasks: [
                      {
                          id: "task1",
                          name: "Write brief about pointers"
                      },
                      {
                          id: "task2",
                          name: "Write an example of how pointers are used"
                      }
                  ]
              }
          ]
      },
      {
          id: 2,
          week_number: 2,
          modules: [
              {
                  id: "mod1",
                  name: "What is a DOM in webpage?"
              },
              {
                  id: "mod2",
                  name: "Write methods to manipulate DOM?"
              }
          ]
      },
      {
          id: 3,
          week_number: 3,
          modules: [
              {
                  id: "mod1",
                  name: "What is a virtual DOM?"
              },
              {
                  id: "mod2",
                  name: "Write is rerendering in react?"
              }
          ]
      },
      {
          id: 4,
          week_number: 4,
          modules: [
              {
                  id: "mod1",
                  name: "What do you know about svelte framework?"
              },
              {
                  id: "mod2",
                  name: "Write 3 advantages of svelte over react?"
              }
          ]
      }
  ]

export default function App(){
  // const [weekData,setWeekData]=useState(DUMMY_WEEKDATA);


  // const addWeekHandler=(week)=>{
  //   setWeekData((prevWeekData)=>{
  //     return [week,...prevWeekData];
  //   });
  // };

  return (
    <div>
      {/* <NewWeek onAddWeek={addWeekHandler}/> */}
      <Weeks items={DUMMY_WEEKDATA} />
    </div>
  );
}

