import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import {ViewState} from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
} from '@devexpress/dx-react-scheduler-material-ui';


const CellBase = (({
  startDate,
  formatDate,
}) => {
  const isFirstMonthDay = startDate.getDate() === 1;
  const formatOptions = isFirstMonthDay
    ? { day: 'numeric', month: 'long' }
    : { day: 'numeric' };
  return (
    <TableCell
    >
      <div>
        {formatDate(startDate, formatOptions)}
      </div>
    </TableCell>
  );
});





export default class Demo extends React.PureComponent {
  render() {
    return (
      <Paper>
        <Scheduler
        >
          <ViewState
            defaultCurrentDate="2018-07-17"
          />

          <MonthView
          timeTableCellComponent={CellBase}
          />
          <Toolbar
          />
          <DateNavigator />
        </Scheduler>
      </Paper>
    );
  }
}
