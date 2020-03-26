import React , {Component} from 'react';
import Calendar from './Calendar';
import moment from 'moment-jalaali';

var ranges = [
    // { 
    //   disabled: true, 
    //   start:moment().add(1,'days'),
    //   end:moment().add(5,'days') 
    // },
  ]

class RangeCalendar extends Component{
    constructor (props){
        super(props);
        this.state = {
            firstDate : null,
            secondDate : null,
        }
    }


    render () {
        const {jalali} = this.props;
        const {selectMode} = this.state;
        return (
            <div className="r-rangeCalendar">
                <Calendar jalali={false} multiselect={true} change={val => {
                    console.log(val)
                }} />
                {/* <Calendar jalali={jalali} selectMode={selectMode} change={val => {
                }} /> */}
            </div>
        )
    }
}
RangeCalendar.defaultProps = {
    jalali : false,
}

export default RangeCalendar;