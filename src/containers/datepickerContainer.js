import React, {Component,Fragment} from 'react';
import { Datepicker } from '../components/ReactForm';

class DatepickerContainer extends Component {

  changeDatepicker (val){
   console.log(val)
  }
  render (){
    return (
      <Fragment>

        <div className="page-content-box" >
            <div className="page-content-title">Georgian Datepicker</div>
            <Datepicker defaultValue={'aaa'} change={this.changeDatepicker.bind(this)} />
        </div>
        <div className="page-content-box" >
            <div className="page-content-title">Jalali (Persian) Datepicker</div>
            <Datepicker defaultValue={'aaa'} jalali={true}  change={this.changeDatepicker.bind(this)} />
        </div>
         
      </Fragment>
      
    );
  }
  
}

export default DatepickerContainer;
