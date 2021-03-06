import React, {Component,Fragment} from 'react';
import {  Calendar, RangeCalendar } from '../components/ReactForm';

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
        {/* <div className="content-box" >
            <div className="content-title">Range Calendar</div>
            <RangeCalendar jalali={true} monthOnly={false} change={this.changeCalendar.bind(this)} />
        </div>
        <div className="content-box" >
            <div className="page-true-title">Range Calendar</div>
            <RangeCalendar jalali={false} monthOnly={true} change={this.changeCalendar.bind(this)} />
        </div>
  
        <div className="content-box" >
            <div className="content-title">Georgian Calendar</div>
            <Calendar range={true} jalali={false}  change={this.changeCalendar.bind(this)} />
        </div>
        <div className="content-box" >
            <div className="content-title">Georgian Calendar</div>
            <Calendar  jalali={true} range={false}   change={this.changeCalendar.bind(this)} />
        </div>  */}
        <div className="content-box" >
            <div className="content-title">Georgian Calendar</div>
            <Calendar ranges={disabledRanges}   jalali={true} range={false} monthOnly={false}   change={this.changeCalendar.bind(this)} />
        </div> 
         
  
      </Fragment>
      
    );
  }
  
}

export default CalendarContainer;
