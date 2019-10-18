import React, {Component} from 'react';
import {getDaysOfMonth, persianNumber, checkToday } from './functions';
import calendarContext from './CalendarContext';


const weekNames = ['SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI'];
const jalaliWeekNames = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];

class Days extends Component {
    static contextType = calendarContext;


    renderDays (){
        const {month, jalali} = this.context;
        const dayList = getDaysOfMonth(month,true);
        

        return dayList.map((day,i) => {
            const disabled = day.isBefore(month, 'month') || day.isAfter(month, 'month') ;
            const disabledClass = disabled ? 'r-disabled' : ''
            const todayClass = checkToday(day.format('YYYYMMDD')) ? 'r-today' : ''
            return ( 
                <div key={i} class={`r-calendar-item ${disabledClass} ${todayClass}`}>
                    <span> {jalali ? persianNumber(day.format('jD')) : day.format('D')} </span>
                </div>
            )
        });
    }


    renderWeeks () {
        const {jalali} = this.context;
        const resultWeekNames = jalali ? jalaliWeekNames :weekNames;

        return resultWeekNames.map((name, i) => {
            return (
                <div key={i} class="r-calendar-item r-week">
                    <span>{name}</span>
                </div>       

            )
        })
    }

   render (){
       return (
        <div class="r-calendar-content">
            {this.renderWeeks()}
            {this.renderDays()}
        </div>
       )
   }
}


export default Days