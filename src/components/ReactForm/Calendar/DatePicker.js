import React , {Component} from 'react';
import BaseCalendar from './BaseCalendar';

class DatePicker extends Component {


    render () {
        const {change,monthOnly, jalali, double,approve,outline, value, disbaledSides, switchMode} = this.props;
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
                switchMode={switchMode}
          />
        )
    }
}

DatePicker.defaultProps = {
    monthOnly : false,
    outline:false,
    double : false,
    switchMode : false
    
}
export default DatePicker