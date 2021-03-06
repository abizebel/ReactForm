import React, {Component,Fragment} from 'react';
import { DatePicker, DatePickerButton } from '../../components/ReactForm';

import moment from 'moment-jalaali';



class DatepickerContainer extends Component {
    changeDatepicker (val){
        console.log(val)
    }
        
    render (){
        return (
        <Fragment>
            <div className="content-box" >
                <div className="content-title">Gerogian Datepicker</div>
                <DatePicker 
                    outline={true}
                    value={'92/1/1'}
                    change={this.changeDatepicker}
                />
        

            </div>
            <div className="content-box" >
                <div className="content-title">Jalali Datepicker</div>
                <DatePicker 
                    
                    outline={true}
                    value={'92/1/1'}
                    jalali={true}
                    change={this.changeDatepicker}
                />
        

            </div>

            <div className="content-box" >
                <div className="content-title">MonthOnly Gerogian Datepicker</div>
                <DatePicker 
                    monthOnly={true}
                    outline={true}
                    value={'92/1/1'}
                    change={this.changeDatepicker}
                />
        

            </div>
            <div className="content-box" >
                <div className="content-title">MonthOnly Jalali Datepicker</div>
                <DatePicker 
                    monthOnly={true}
                    outline={true}
                    value={'92/1/1'}
                    jalali={true}
                    change={this.changeDatepicker}
                />
        

            </div>
            
        
          

        </Fragment>
        
        );
    }
  
}

export default DatepickerContainer;
