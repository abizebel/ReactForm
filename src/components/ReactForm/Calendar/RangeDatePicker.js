import React , {Component} from 'react';
import BaseCalendar from './BaseCalendar';

class RangeDatePicker extends Component {


    render () {
        const {change,monthOnly, jalali, startDate, endDtate,approve,outline, value, disbaledSides} = this.props;
        return (
            <BaseCalendar 
                disbaledSides = {disbaledSides}
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