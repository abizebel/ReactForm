import React, {Component,Fragment} from 'react';
import { RangeCalendar, Calendar } from '../components/ReactForm';


class CalendarContainer extends Component {

  changeCalendar (val){
   console.log(val)
  }
  render (){
    return (
      <Fragment>
        <div className="page-content-box" >
            <div className="page-content-title">Range Calendar</div>
            <RangeCalendar jalali={true} change={this.changeCalendar.bind(this)} />
        </div>
        {/* <div className="page-content-box" >
            <div className="page-content-title">Georgian Calendar</div>
            <Calendar  change={this.changeCalendar.bind(this)} />
        </div> */}
        {/* <div className="page-content-box" >
            <div className="page-content-title">Jalali (Persian) Calendar</div>
            <Calendar  jalali={true} change={this.changeCalendar.bind(this)} />
        </div>
          */}
      </Fragment>
      
    );
  }
  
}

export default CalendarContainer;
