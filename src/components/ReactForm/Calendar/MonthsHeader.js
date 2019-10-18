import React, {Component} from 'react';
import CalendarContext from './CalendarContext';
import {persianNumber } from './functions';

class MonthsHeader extends Component {
    static contextType = CalendarContext;

    render () {
        const { nextYear, prevYear, year, jalali, changeMode} = this.context;
        const jalaliYear = persianNumber(year.format('jYYYY')) ;
        const georgianYear = year.format('YYYY');
        
        return (
            <div class="r-calendar-header">
                <div class="r-title" > { jalali ? jalaliYear : georgianYear } </div>
                <div class="r-changer">
                    <svg viewBox="0 0 24 24" onClick={nextYear}>
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                    <svg viewBox="0 0 24 24" onClick={prevYear}>
                        <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
                    </svg>
                </div>
            </div>
        )
    }
}


export default MonthsHeader