import React, {Component,Fragment} from 'react';
import { DatePicker, DatePickerButton } from '../../components/ReactForm';

import moment from 'moment-jalaali';



class RangeDatepickerContainer extends Component {
    changeDatepicker (val){
        console.log(val)
    }
        
    render (){
        return (
        <Fragment>
            <div className="content-box" >
                <div className="content-title">Gerogian  Range Datepicker</div>
                <DatePicker 
                    switchMode={true}
                    double={true}
                    outline={true}
                    value={{start : '2020/08/04', end  :'2020/08/06'}}
                    change={this.changeDatepicker}
                />
        

            </div>
            <div className="content-box" >
                <div className="content-title">Jalali Range Datepicker</div>
                <DatePicker 
                    double={true}
                    outline={true}
                    value={{start : '92/1/1', end  :'92/1/2'}}
                    jalali={true}
                    change={this.changeDatepicker}
                />
        

            </div>

            <div className="content-box" >
                <div className="content-title">Gerogian  Range Datepicker</div>
                <DatePicker 
                    monthOnly={true}
                    double={true}
                    outline={true}
                    value={{start : '2020/08/01', end  :'2020/09/01'}}
                    change={this.changeDatepicker}
                />
        

            </div>
            <div className="content-box" >
                <div className="content-title">Jalali Range Datepicker</div>
                <DatePicker 
                    monthOnly={true}
                    double={true}
                    outline={true}
                    value={{start : '92/1/1', end  :'92/2/1'}}
                    jalali={true}
                    change={this.changeDatepicker}
                />
        

            </div>
            
            
        
          

        </Fragment>
        
        );
    }
  
}

export default RangeDatepickerContainer;
