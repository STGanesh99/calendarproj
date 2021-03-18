import React from "react";
import Paper from "@material-ui/core/Paper";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import { ViewState } from "@devexpress/dx-react-scheduler";
import { styles } from "./CalendarCellStyles";
import { withStyles } from "@material-ui/core";

import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
} from "@devexpress/dx-react-scheduler-material-ui";

const CellBase = (
  ({ classes, startDate, formatDate, otherMonth }) => {
    let currDate = new Date()
    let currDateStr = currDate.getDate()+'/'+currDate.getMonth()+'/'+currDate.getFullYear()
    let recvDate = new Date(startDate)
    let recvDateStr = recvDate.getDate()+'/'+recvDate.getMonth()+'/'+recvDate.getFullYear()
    let today = currDateStr === recvDateStr
    return (
      <TableCell
        className={classes.cell+' '+today?classes.todayDate:''}
        style={{ opacity: otherMonth ? 0.5 : 1 }}
      >
        <div className={classes.text}>
        {formatDate(startDate, { day: "numeric" })}
        </div>
        {!otherMonth && <Button>+ Add new Task</Button>}
      </TableCell>
    );
  }
);

const TimeTableCell = withStyles(styles, { name: "Cell" })(CellBase);

export default function Calendar() {
  return (
    <Paper>
      <Scheduler>
        <ViewState defaultCurrentDate={new Date()} />
        <MonthView timeTableCellComponent={TimeTableCell} />
        <Toolbar />
        <DateNavigator />
      </Scheduler>
    </Paper>
  );
}
