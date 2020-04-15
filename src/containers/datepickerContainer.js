import React, {Component,Fragment} from 'react';
import { DatePicker } from '../components/ReactForm';

class DatepickerContainer extends Component {

  changeDatepicker (val){
   console.log(val)
  }

  approveDatepicker  (val){
    console.log(val)
  }

  render (){
    return (
      <Fragment>
        <DatePicker 
          startDtate={"2012/8/1"}
          endDtate={"2012/8/1"}
          jalali={false} 
          monthOnly={true}
          approve={this.approveDatepicker}
          change={this.changeDatepicker}
        />

        <br /><br /><br />

        <DatePicker 
          startDtate={"2012/8/1s"}
          endDtate={"2012/8/1"}
          monthOnly={true}
          jalali={true}
          approve={this.approveDatepicker}

          change={this.changeDatepicker}
        />
        <DatePicker 
          startDtate={"2012/8/1s"}
          endDtate={"2012/8/1"}
          monthOnly={false}
          approve={this.approveDatepicker}

          change={this.changeDatepicker}
        />
      </Fragment>
      
    );
  }
  
}

export default DatepickerContainer;
