import React, {Component} from 'react';
import CalendarContext from './CalendarContext';
import {persianNumber } from './functions';

class MonthsHeader extends Component {
    static contextType = CalendarContext;




    checkVisibility (dir){
        const { month, selectedYear,selectedYear2, double} = this.context;
        const {id} = this.context;
        
        if (double && month){
            if (id === '1' && dir ==='next'){
                if (month.clone().add(1, 'year').isAfter(selectedYear2) ||  month.clone().add(1, 'year').isSame(selectedYear2)) return true;
            }
            else if (id === '2' && dir ==='prev'){
                
                if (month.clone().subtract(1, 'year').isBefore(selectedYear) ||  month.clone().subtract(1, 'year').isSame(selectedYear)) return true;
            }
            return false
        }
        
        return false
        
    }

    prev = () =>{
        const {year, setYear,id} = this.context;
        const isSecond = id === '2'
        setYear(year.clone().subtract(1, 'year'),isSecond)
    }
    next = () =>{
        const {year, setYear,id} = this.context;
        const isSecond = id === '2'
        setYear(year.clone().add(1, 'year'),isSecond)
    }


    render () {
        const {year, jalali} = this.context;
        const jalaliYear = persianNumber(year.format('jYYYY')) ;
        const georgianYear = year.format('YYYY');
        
        return (
            <div class="r-calendar-header">

                <button onClick={this.prev} type="button" className="r-ripple"  disabled={this.checkVisibility('prev') }>
                    <svg viewBox="0 0 24 24">
                        <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
                    </svg>
                </button>

                <div class="r-title" > { jalali ? jalaliYear : georgianYear } </div>
                    
                <button onClick={this.next} type="button"  className="r-ripple"  disabled={this.checkVisibility('next') }>
                    <svg viewBox="0 0 24 24">
                        <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                </button>
            </div>
        )
    }
}


export default MonthsHeader