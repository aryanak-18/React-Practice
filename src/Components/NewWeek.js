import React, { useState } from "react";

const NewWeek = (props) => {
  // const [enteredweek_number, setEnteredweek_number] = useState("");
  const [enteredId, setEnteredId] = useState("");
  const [enteredModules1, setEnteredModules1] = useState("");
  const [enteredModules2, setEnteredModules2] = useState("");
  const [enteredOrder, setEnteredOrder] = useState("");
  const [enteredWeek, setEnteredWeek] = useState("");

  let weeks1 = props.items;
  const list1 = weeks1.map((week) => (
    <option value={week.week_number} key={Math.random().toString()}>
      Week
    </option>
  ));

  // const week_numberChangeHandler = (event) => {
  //   setEnteredweek_number(event.target.value);
  // };

  const idChangeHandler = (event) => {
    setEnteredId(event.target.value);
  };
  const moduleNameChangeHandler1 = (event) => {
    setEnteredModules1(event.target.value);
  };
  const moduleNameChangeHandler2 = (event) => {
    setEnteredModules2(event.target.value);
  };
  const orderChoiceHandler = (event) => {
    setEnteredOrder(event.target.value);
  };
  const weekChoiceHandler = (event) => {
    setEnteredWeek(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const weekData = {
      // week_number: enteredweek_number,
      id: enteredId,
      modules: [
        {
          name: enteredModules1,
        },
        {
          name: enteredModules2,
        },
      ],
    };
    const orderChoice = enteredOrder;
    const weekChoice = enteredWeek;
    props.onSaveWeekData(weekData, orderChoice, weekChoice);
    // setEnteredweek_number("");
    setEnteredId("");
    setEnteredModules1("");
    setEnteredModules2("");
  };

  return (
    <div className="formdiv">
      <form className="" onSubmit={submitHandler}>
        <div className="">
          {/* <div className="">
          <label>WeekNumber : </label>
          <input
            type="text"
            value={enteredweek_number}
            onChange={week_numberChangeHandler}
          />
        </div> */}
          <div className="div1">
            <div className="addnewweek">
              <p>ADD NEW WEEK</p>
              <div className="image">
                <img className="image" src="addnewweek.png" alt="logo" />
              </div>
            </div>
        <div className="hrule"></div>
            <label>Id : </label>
            <input
              className="weeks"
              type="number"
              value={enteredId}
              onChange={idChangeHandler}
            />
          </div>
          <div className="div1">
            <label>Module-1 : </label>
            <input
              className="weeks"
              type="text"
              value={enteredModules1}
              onChange={moduleNameChangeHandler1}
            />
          </div>
          <div className="div1">
            <label>Module-2 : </label>
            <input
              className="weeks"
              type="text"
              value={enteredModules2}
              onChange={moduleNameChangeHandler2}
            />
          </div>
          <div className="orderweek">
            <div className="order">
              <input
                list="order"
                placeholder="Order"
                className="weeks"
                onSelect={orderChoiceHandler}
              />
              <datalist id="order">
                <option value="After"></option>
                <option value="Before"></option>
              </datalist>
            </div>
            <div className="midow"></div>
            <div className="week">
              <input
                list="weeks"
                placeholder="Week"
                className="weeks"
                onSelect={weekChoiceHandler}
              />
              <datalist id="weeks">{list1}</datalist>
            </div>
          </div>
        </div>
        <div className="submitbuttons">
          <button type="button" className="btn" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit" className="btn">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewWeek;
