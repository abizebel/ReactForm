import React, {Component,Fragment} from 'react';
import { DatePicker, DatePickerButton } from '../../components/ReactForm';

import moment from 'moment-jalaali';


var disabledRanges = [
  { 
    disabled: true, 
    start:moment().add(1,'days'),
    end:moment().add(30,'days') 
  },
]


class DatepickerContainer extends Component {
    changeDatepicker (val){
        console.log(val)
    }
        
    render (){
        return (
        <Fragment>
            <div className="content-box" >
                <div className="content-title">Gerogian Datepicker</div>
                <DatePickerButton 
                    startDtate={"2012/8/1"}
                    endDtate={"2012/8/1"}
                    change={this.changeDatepicker}
                />
        

            </div>
            
        
            <div className="content-box" >
                <div className="content-title">Jalali Datepicker</div>
                <DatePickerButton 
                    startDtate={"1398/8/1"}
                    endDtate={"1398/8/1"}
                    jalali={true} 
                    change={this.changeDatepicker}
                />         
            </div>

        </Fragment>
        
        );
    }
  
}

export default DatepickerContainer;
