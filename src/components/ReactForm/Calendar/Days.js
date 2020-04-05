import React, {Component} from 'react';
import {getDaysOfMonth, persianNumber, checkToday } from './functions';
import calendarContext from './CalendarContext';

const weekNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const jalaliWeekNames = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];

class Days extends Component {
    static contextType = calendarContext;


    getResult = (day) => {
        const {jalali,  selectedDay, selectedDay2, multiselect} = this.context;
        let result = {};
        if(multiselect ){
            result = {
                startDateStr :selectedDay && (jalali ? persianNumber(selectedDay.format('jYYYY/jM/jD')) : selectedDay.format('YYYY/MM/DD'))  ,
                endDateStr : selectedDay2 && (jalali ? persianNumber(selectedDay2.format('jYYYY/jM/jD')) : selectedDay2.format('YYYY/MM/DD') ),
                startD :selectedDay,
                endD: selectedDay2
            }
        }
        else {
            result = {
               dateStr :jalali ? persianNumber(day.format('jYYYY/jM/jD')) : day.format('YYYY/MM/DD'),
               d :day,
            }
        }

        return result
    }


    selectDay = day => {
        const { change , setDay,selectedDay,selectedDay2, multiselect, setSelectStep, selectStep, id} = this.context;
        
        if (multiselect) {
            if (selectStep === 0) {
                setSelectStep(1);
                setDay(day);
            }
            else if (selectStep === 1) {
                const result = this.getResult(day)
                if ( day.isBefore(selectedDay) || (id === '2' && day.isBefore(selectedDay2)) )   {
                    setSelectStep(1);
                    setDay(day);
                    change(result)
                    return;
                }

                setSelectStep(2);
                setDay(day, true);
                change(result)
            }
            else if (selectStep === 2) {
                
                setSelectStep(1);
                    setDay(day);
                    setDay(null, true);
            }
        }
        else {
            const result = this.getResult(day)
            setDay(day);
            change(result)
        }
    
    }



    focusDay = (day,e) => {
        const {setDay, multiselect, selectStep} = this.context;

        if (multiselect) {
            if (selectStep === 1) {
                setDay(day, true);
            }
        } 
    }
    blurDay =  (day,e) => {
        const {setDay, multiselect, selectStep} = this.context;

        if (multiselect) {
            if (selectStep === 1) {
                setDay(null, true);
            }
        } 
    }

    renderDays (){
        const {month, jalali, selectedDay, selectedDay2, multiselect} = this.context;
        const dayList = getDaysOfMonth(month,jalali);
        const monthFormat = jalali ? 'jMM' : 'MM';

        return dayList.map((day,i) => {
            let selected;
            let selected2;
            let isSelected;

            const isDisabled = multiselect &&  (day.isBefore(selectedDay2) && day.isAfter(selectedDay)) ? 'r-disabled' : '' ;
            const isOutOfDays =  day.format(monthFormat) !== month.format(monthFormat)  ? 'r-outOfDays' : ''
            const isToday = checkToday(day.format('YYYYMMDD')) ? 'r-today' : '';

            selected = selectedDay ? selectedDay.isSame(day, 'day') : false;
            selected2 = selectedDay2 ? selectedDay2.isSame(day, 'day') : false;
            isSelected =  (selected) || selected2 ? 'r-selected' : '';
            
            return ( 
                <div onClick={this.selectDay.bind(this,day)} key={i} 
                    onMouseEnter={this.focusDay.bind(this,day)}
                    onMouseLeave={this.blurDay.bind(this,day)}
                    class={`r-calendar-item ${isSelected} ${isDisabled} ${isOutOfDays} ${isToday}`}>
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