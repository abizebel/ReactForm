import React, {Component} from 'react';
import CalendarContext from './CalendarContext';
import {persianNumber,mapPersianMonths } from './functions';

class DaysHeader extends Component {
    static contextType = CalendarContext;

    render () {
        const {nextMonth, prevMonth, setMode, month, jalali} = this.context;
        
        const jalaliMonthYear = mapPersianMonths(persianNumber(month.locale('fa').format('jMMMM jYYYY')));
        const georgianMonthYear = month.locale('en').format('MMMM YYYY');
        
        return (
            <div class="r-calendar-header">
               
                <button onClick={prevMonth} type="button" className="r-ripple">
                    <svg viewBox="0 0 24 24">
                        <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
                    </svg>
                </button>

                <div class="r-title" onClick={()=>{setMode('months')}}> 
                {jalali ? jalaliMonthYear : georgianMonthYear} 
                </div>

                <button onClick={nextMonth} type="button" class="r-ripple">
                     <svg viewBox="0 0 24 24">
                        <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                </button>
                    
            </div>
        )
    }
}


export default (DaysHeader)