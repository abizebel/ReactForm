import React, {Component,Fragment} from 'react';
import { Calendar } from '../components/ReactForm';

class CalendarContainer extends Component {

  changeToggle (val){
   console.log('toggle is : '+val)
  }
  render (){
    return (
      <Fragment>

        <div className="page-content-box" >
            <div className="page-content-title">Georgian Calendar</div>
            <Calendar />
        </div>
        <div className="page-content-box" >
            <div className="page-content-title">Jalali (Persian) Calendar</div>
            <Calendar jalali={true} />
        </div>
         
      </Fragment>
      
    );
  }
  
}

export default CalendarContainer;
