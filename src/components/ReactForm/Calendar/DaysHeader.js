import React, {Component} from 'react';
import CalendarContext from './CalendarContext';
import {persianNumber } from './functions';

class DaysHeader extends Component {
    static contextType = CalendarContext;

    render () {
        const { nextMonth, prevMonth, month, jalali} = this.context;
        const jalaliMonth = persianNumber(month.locale('fa').format('jMMMM jYYYY')) ;
        const georgianMonth = month.locale('en').format('MMMM YYYY');
        
        return (
            <div class="r-calendar-header">
                <div class="r-title"> { jalali ? jalaliMonth : georgianMonth } </div>
                <div class="r-changer">
                    <svg viewBox="0 0 24 24" onClick={nextMonth}>
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                    <svg viewBox="0 0 24 24" onClick={prevMonth}>
                        <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
                    </svg>
                </div>
            </div>
        )
    }
}


export default (DaysHeader)