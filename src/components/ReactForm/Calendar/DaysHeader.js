import React, {Component} from 'react';
import CalendarContext from './CalendarContext';
import {persianNumber,mapPersianMonths } from './functions';

class DaysHeader extends Component {
    static contextType = CalendarContext;


    checkVisibility (dir){
        const { month, selectedMonth,selectedMonth2, double} = this.context;
        const {id} = this.context;
        
        if (double){
            if (id === '1' && dir ==='next'){
                if (month.clone().add(1, 'month').isAfter(selectedMonth2) ||  month.clone().add(1, 'month').isSame(selectedMonth2)) return true;
            }
            else if (id === '2' && dir ==='prev'){
                
                if (month.clone().subtract(1, 'month').isBefore(selectedMonth) ||  month.clone().subtract(1, 'month').isSame(selectedMonth)) return true;
            }
            return false
        }
        
        return false
        
    }

    prev = () =>{
        const {month, setMonth, id} = this.context;
        const isSecond = id === '2';
        setMonth(month.clone().subtract(1, 'month'),isSecond)
    }
    next = () =>{
        const {month, setMonth,id} = this.context;
        const isSecond = id === '2';
        setMonth(month.clone().add(1, 'month'),isSecond)
    }
    render () {
        const {setMode, month, jalali} = this.context;
        
        const jalaliMonthYear = mapPersianMonths(persianNumber(month.locale('fa').format('jMMMM jYYYY')));
        const georgianMonthYear = month.locale('en').format('MMMM YYYY');
        
        return (
            <div class="r-calendar-header">
               
                <button onClick={this.prev} type="button" className="r-ripple" disabled={this.checkVisibility('prev') }>
                    <svg viewBox="0 0 24 24">
                        <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
                    </svg>
                </button>
                

                <div class="r-title" onClick={()=>{setMode('months')}}> 
                {jalali ? jalaliMonthYear : georgianMonthYear} 
                </div>

                <button onClick={this.next} type="button" class="r-ripple" disabled={this.checkVisibility('next')}>
                    <svg viewBox="0 0 24 24">
                        <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                </button>
                
                    
            </div>
        )
    }
}


export default (DaysHeader)