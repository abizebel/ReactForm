import React, {Component,Fragment} from 'react';
import { DatePicker } from '../components/ReactForm';

class DatepickerContainer extends Component {

  changeDatepicker (val){
   console.log(val)
  }
  render (){
    return (
      <Fragment>
        <DatePicker 
          startDtate={"2012/8/1s"}
          endDtate={"2012/8/1"}
          jalali={true} 
          monthOnly={true}
          change={this.changeDatepicker}
        />
        <br /> <br /> <br />
        <DatePicker 
          startDtate={"2012/8/1s"}
          endDtate={"2012/8/1"}
          jalali={true} 
          change={this.changeDatepicker}
        />
      </Fragment>
      
    );
  }
  
}

export default DatepickerContainer;
