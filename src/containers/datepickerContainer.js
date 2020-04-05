import React, {Component,Fragment} from 'react';
import { DatePicker } from '../components/ReactForm';

class DatepickerContainer extends Component {

  changeDatepicker (val){
   console.log(val)
  }
  render (){
    return (
      <Fragment>
        <DatePicker change={this.changeDatepicker} />
       
      </Fragment>
      
    );
  }
  
}

export default DatepickerContainer;
