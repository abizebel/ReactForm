import React , {Component} from 'react';
import BaseCalendar from './BaseCalendar';

class RangeDatePicker extends Component {


    render () {
        const {change,monthOnly, jalali, startDate, endDtate,approve,outline, value, disabledSides} = this.props;
        return (
            <BaseCalendar 
                disabledSides = {disabledSides}
                value={value}
                monthOnly={monthOnly}
                jalali={jalali}
                rangedatepicker={true}
                change={change}
                outline={outline}
                approve = {approve}
          />
        )
    }
}

RangeDatePicker.defaultProps = {
    monthOnly : false,
    outline:false,
    
}
export default RangeDatePicker