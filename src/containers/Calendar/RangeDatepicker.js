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
                    label={'test'}
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
                  label={'test'}
                    double={true}
                    outline={true}
                    value={{start : '92/1/1', end  :'92/1/2'}}
                    jalali={true}
                    change={this.changeDatepicker}
                />
        

            </div>

            <div className="content-box" >
                <div className="content-title">Gerogian Monthonly Range Datepicker</div>
                <DatePicker 
                  label={'test'}
                    monthOnly={true}
                    double={true}
                    outline={true}
                    value={{start : '2020/08/01', end  :'2020/09/01'}}
                    change={this.changeDatepicker}
                />
        

            </div>
            <div className="content-box" >
                <div className="content-title">Jalali MonthOnly Range Datepicker</div>
                <DatePicker 
                   label={'test'}
                    monthOnly={true}
                    disabledSides={{start :'1398/01/1', end  :'1400/6/1'}} 
                    double={true}
                    outline={true}
                    value={{start : '1398/12', end  :'1399/03'}}
                    jalali={true}
                    change={this.changeDatepicker}
                />
        

            </div>
            
            
        
          

        </Fragment>
        
        );
    }
  
}

export default RangeDatepickerContainer;
