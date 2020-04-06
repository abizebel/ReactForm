import React, {Component,Fragment} from 'react';
import {  Calendar, RangeCalendar } from '../components/ReactForm';


class CalendarContainer extends Component {

  changeCalendar (val){
   console.log(val)
  }
  render (){
    return (
      <Fragment>
        <div className="page-content-box" >
            <div className="page-content-title">Range Calendar</div>
            <RangeCalendar jalali={false} monthOnly={false} change={this.changeCalendar.bind(this)} />
        </div>
        <div className="page-content-box" >
            <div className="page-content-title">Range Calendar</div>
            <RangeCalendar jalali={false} monthOnly={true} change={this.changeCalendar.bind(this)} />
        </div>
  
        {/* <div className="page-content-box" >
            <div className="page-content-title">Georgian Calendar</div>
            <Calendar range={false} jalali={false}  change={this.changeCalendar.bind(this)} />
        </div>
        <div className="page-content-box" >
            <div className="page-content-title">Georgian Calendar</div>
            <Calendar range={true} jalali={false}  change={this.changeCalendar.bind(this)} />
        </div> 
        <div className="page-content-box" >
            <div className="page-content-title">Georgian Calendar</div>
            <Calendar range={true} monthOnly={true} jalali={false}  change={this.changeCalendar.bind(this)} />
        </div> 
         */}
  
      </Fragment>
      
    );
  }
  
}

export default CalendarContainer;
