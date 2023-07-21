import "./Weeks.css";
import Tab from "./Tab";
import WeekContent from "./WeekContent";
function Weeks(props) {
  return (
    <div>
      <Tab items={props.items} />
      {/* <WeekContent items={props.items} /> */}
    </div>
  );
}

export default Weeks;
