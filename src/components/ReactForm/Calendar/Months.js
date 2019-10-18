import React, {Component} from 'react';
import {getDaysOfMonth, persianNumber } from './functions';
import calendarContext from './CalendarContext';


// List of months
const jalaliMonths = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند'
  ];
  
  const georgianMonths = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  

class Days extends Component {
    static contextType = calendarContext;


    renderMonths (){
        const {month, jalali} = this.context;
        const yearFormat = jalali ? 'jYYYY' : 'YYYY';
        const monthYearFormat = jalali ? 'jM-YYYY' : 'M-jYYYY';
        const months = jalali ? jalaliMonths : georgianMonths;
    
       
        return months.map((month,i) => {
            return ( 
                <div key={i} class={`r-calendar-item r-month`}>
                    <span>{month}</span>
                </div>
            )
        });
    }


   render (){
       return (
        <div class="r-calendar-content">
            {this.renderMonths()}
        </div>
       )
   }
}


export default Days