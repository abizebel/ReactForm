import React, {Component} from 'react';
import BaseCalendar from './BaseCalendar'


class RangeCalendar extends Component {

    render (){
        const {jalali, change} = this.props;

        return (
            <BaseCalendar jalali={jalali} range={true} double={true} change={change} />
        )
    }
}

RangeCalendar.defaultProps ={
    jalali : false,
}

export default RangeCalendar