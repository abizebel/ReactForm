import React, {Component,Fragment} from 'react';
import { Calendar } from '../components/ReactForm';
import moment from 'moment-jalaali';

var ranges = [
  { 
    disabled: true, 
    start:moment().add(0,'days'),
    end:moment().add(2,'days') 
  },
]
class CalendarContainer extends Component {

  changeCalendar (val){
   console.log(val)
  }
  render (){
    return (
      <Fragment>

        <div className="page-content-box" >
            <div className="page-content-title">Georgian Calendar</div>
            <Calendar ranges={ranges} change={this.changeCalendar.bind(this)} />
        </div>
        {/* <div className="page-content-box" >
            <div className="page-content-title">Jalali (Persian) Calendar</div>
            <Calendar ranges={ranges} jalali={true} change={this.changeCalendar.bind(this)} />
        </div>
          */}
      </Fragment>
      
    );
  }
  
}

export default CalendarContainer;
