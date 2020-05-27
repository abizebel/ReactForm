import React, {Component,Fragment} from 'react';
import {  Calendar, RangeCalendar } from '../../components/ReactForm';

import moment from 'moment-jalaali';


var disabledRanges = [
  { 
    disabled: true, 
    start:moment().add(1,'days'),
    end:moment().add(30,'days') 
  },
]


class CalendarContainer extends Component {

  changeCalendar (val){
   console.log(val)
  }
  render (){
    return (
      <Fragment>
        <div className="content-box" >
            <div className="content-title">Georgian Range Calendar</div>
            <Calendar monthOnly={false} double={true} change={this.changeCalendar.bind(this)} />
        </div>
        <div className="content-box" >
            <div className="content-title">Jalali Range Calendar</div>
            <Calendar jalali={true} monthOnly={false} double={true} change={this.changeCalendar.bind(this)} />
        </div>
  
      </Fragment>
      
    );
  }
  
}

export default CalendarContainer;
