import React , {Component} from 'react';
import BaseCalendar from './BaseCalendar';

class DatePicker extends Component {


    render () {
        const {change,monthOnly, jalali, double,approve,outline, value, disbaledSides} = this.props;
        return (
            <BaseCalendar 
                disbaledSides = {disbaledSides}
                value={value}
                monthOnly={monthOnly}
                jalali={jalali}
                datepicker={true}
                change={change}
                outline={outline}
                approve = {approve}
                double={double}
          />
        )
    }
}

DatePicker.defaultProps = {
    monthOnly : false,
    outline:false,
    double : false,
    
}
export default DatePicker