import React , {Component} from 'react';
import BaseCalendar from './BaseCalendar';

class DatePicker extends Component {


    render () {
        const {change,monthOnly, jalali, double,approve,outline, value, disabledSides, switchMode, label} = this.props;
        return (
            <BaseCalendar 
                label={label}
                disabledSides = {disabledSides}
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