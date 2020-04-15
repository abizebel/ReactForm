import React , {Component} from 'react';
import BaseCalendar from './BaseCalendar';

class DatePicker extends Component {


    render () {
        const {change,monthOnly, jalali, startDate, endDtate,approve} = this.props;

        return (
            <BaseCalendar 
                startDtate={startDate}
                endDtate={endDtate}
                monthOnly={monthOnly}
                jalali={jalali}
                datepicker={true}
                change={change}
                approve = {approve}
          />
        )
    }
}

DatePicker.defaultProps = {
    monthOnly : false,
    jalali : false,
}
export default DatePicker