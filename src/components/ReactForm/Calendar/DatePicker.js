import React, {Component} from 'react';
import BaseCalendar from './BaseCalendar'


class DatePicker extends Component {

    render (){
        const {jalali, change, monthOnly} = this.props;

        return (
           <div className="r-datepicker">
               <div className="r-datepicker-header">
                    <button type="button" className="r-ripple" >
                        <svg viewBox="0 0 24 24">
                            <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
                        </svg>
                    </button>
                    
                    <div class="r-datepicker-selected"> 
                        <div className="r-selected-item">
                            <span>اردیبهشت</span>
                            <span>1398</span>
                        </div>
                        <div className="r-selected-item" style={{width:10}}>
                            <span style={{opacity:0}}>-</span>
                            <span>-</span>
                        </div>
                        <div className="r-selected-item">
                            <span>مرداد</span>
                            <span>1398</span>
                        </div>
                    </div>

                    <button  type="button" class="r-ripple">
                        <svg viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                        </svg>
                    </button>
               </div>
                <BaseCalendar
                    monthOnly={monthOnly}
                    jalali={jalali} 
                    range={true} 
                    double={true} 
                    change={change}
                />
           </div>
        )
    }
}

DatePicker.defaultProps ={
    jalali : false,
    monthOnly: false
}

export default DatePicker