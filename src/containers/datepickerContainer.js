import React, {Component,Fragment} from 'react';
import { Calendar } from '../components/ReactForm';

class DatepickerContainer extends Component {

  changeDatepicker (val){
   console.log(val)
  }
  render (){
    return (
      <Fragment>
        <Calendar 
          startDtate={"2012/8/1s"}
          endDtate={"2012/8/1"}
          jalali={false} 
          monthOnly={true}
          datepicker={true}

          change={this.changeDatepicker}
        />

        <br /><br /><br />

        <Calendar 
          startDtate={"2012/8/1s"}
          endDtate={"2012/8/1"}
          jalali={true} 
          monthOnly={true}
          datepicker={true}
          change={this.changeDatepicker}
        />
      </Fragment>
      
    );
  }
  
}

export default DatepickerContainer;
