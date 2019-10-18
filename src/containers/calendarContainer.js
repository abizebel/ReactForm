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
            <div className="page-content-title">Calendar</div>
            <Calendar
                
            />

        
     
        </div>
         
      </Fragment>
      
    );
  }
  
}

export default CalendarContainer;
