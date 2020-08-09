import React, {Component,Fragment} from 'react';
import {  Calendar, RangeCalendar } from '../../components/ReactForm';

import moment from 'moment-jalaali';




class CalendarContainer extends Component {

  changeCalendar (val){
   console.log(val)
  }
  render (){
    return (
      <Fragment>
          <div className="content-box" >
                <div className="content-title">Disabled Sides Goergian Calendar</div>
                <Calendar 
                  jalali={true} 
                  disabledSides={{start :'1399/4/1', end  :'1399/4/20'}} 
                  change={this.changeCalendar.bind(this)}
                />
          </div>
          <div className="content-box" >
              <div className="content-title">Disabled Sides Jalai Calendar</div>
              <Calendar 
                disabledSides={{start :'2020/6/1', end  :'2020/6/20'}} 
                change={this.changeCalendar.bind(this)}
              />
          </div>
          <div className="content-box" >
                <div className="content-title">Monthonly Disabled Sides Goergian Calendar</div>
                <Calendar 
                  monthOnly={true}
                  jalali={true} 
                  disabledSides={{start :'1398/01/1', end  :'1400/12/1'}} 
                  change={this.changeCalendar.bind(this)}
                />
          </div>
          <div className="content-box" >
              <div className="content-title">Monthonly Disabled Sides Jalai Calendar</div>
              <Calendar 
                monthOnly={true}
                disabledSides={{start :'2020/6/1', end  :'2020/8/1'}} 
                change={this.changeCalendar.bind(this)}
              />
          </div>
      </Fragment>
      
    );
  }
  
}

export default CalendarContainer;
