import React,{useState} from "react";
import Paper from "@material-ui/core/Paper";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import { ViewState } from "@devexpress/dx-react-scheduler";
import { styles } from "./CalendarCellStyles";
import { withStyles } from "@material-ui/core";
import Modal from "./Modal"

import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";

const CellBase = ({ classes, startDate, formatDate, otherMonth }) => {
  const [hoverState, setHoverState] = useState(false)
  let currDate = new Date();
  let currDateStr =
    currDate.getDate() +
    "/" +
    currDate.getMonth() +
    "/" +
    currDate.getFullYear();
  let recvDate = new Date(startDate);
  let recvDateStr =
    recvDate.getDate() +
    "/" +
    recvDate.getMonth() +
    "/" +
    recvDate.getFullYear();
  let today = currDateStr === recvDateStr;
  return (
    <TableCell
      className={classes.cell}
      style={{
        opacity: otherMonth ? 0.5 : 1,
        backgroundColor: today ? "#E1F5FE" : "",
        fontWeight: today ? 'bold' : 'normal'
      }}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={()=>setHoverState(false)}
    >
      <div className={classes.container}>
        <div className={classes.text}>
          {formatDate(startDate, { day: "numeric" })}
        </div>
        {!otherMonth && hoverState&&<Modal hoverState = {hoverState} setHoverState={(t)=>setHoverState(t)}/>}
      </div>
    </TableCell>
  );
};

const TimeTableCell = withStyles(styles, { name: "Cell" })(CellBase);

export default function Calendar() {
  return (
    <Paper>
      <Scheduler>
        <ViewState defaultCurrentDate={new Date()} />
        <MonthView timeTableCellComponent={TimeTableCell} />
        <Toolbar />
        <DateNavigator  />
        <TodayButton />
      </Scheduler>
    </Paper>
  );
}
