import React , {Component} from 'react';
import BaseCalendar from './BaseCalendar';

class DatePicker extends Component {


    render () {
        const {change,monthOnly, jalali, startDate, endDtate,approve,outline} = this.props;

        return (
            <BaseCalendar 
                startDtate={startDate}
                endDtate={endDtate}
                monthOnly={monthOnly}
                jalali={jalali}
                datepicker={true}
                change={change}
                outline={outline}
                approve = {approve}
          />
        )
    }
}

DatePicker.defaultProps = {
    monthOnly : false,
    jalali : false,
    outline:false,
}
export default DatePicker