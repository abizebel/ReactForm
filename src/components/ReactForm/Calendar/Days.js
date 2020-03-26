import React, {Component} from 'react';
import {getDaysOfMonth, persianNumber, checkToday } from './functions';
import calendarContext from './CalendarContext';

const weekNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const jalaliWeekNames = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];

class Days extends Component {
    static contextType = calendarContext;


    selectDay = day => {
        const { jalali, change , setDay,selectedDay,selectedDay2, multiselect, setSelectStep, selectStep} = this.context;
        const selectedValue = jalali ? persianNumber(day.format('jYYYY/jM/jD')) :day.format('YYYY/M/D') ;



        if (multiselect) {
            if (selectStep === 0) {
                setSelectStep(1);
                setDay(day);
                change(selectedValue)
            }
            else if (selectStep === 1) {
                if (day.isBefore(selectedDay)) {
                    setSelectStep(0);
                    setDay(null);
                    setDay(null, true);
                    change(null);
                    return;
                }
                setSelectStep(2);
                setDay(day, true);
                change(selectedValue)
            }
            else if (selectStep === 2) {
                setSelectStep(0);
                setDay(null);
                setDay(null, true);
                change(null)
            }
        }
        else {
            setDay(day);
            change(selectedValue)
        }
    
    }



    focusDay = day => {
        const {setDay, multiselect, setSelectStep, selectStep} = this.context;

        if (multiselect) {
            if (selectStep === 1) {
                setDay(day, true);
            }
        } 
    }
    blurDay = day => {
        const {setDay, multiselect, setSelectStep, selectStep} = this.context;

        if (multiselect) {
            if (selectStep === 1) {
                setDay(null, true);
            }
        } 
    }

    renderDays (){
        const {month, jalali, ranges, selectedDay, selectedDay2, multiselect, selectStep} = this.context;
        const dayList = getDaysOfMonth(month,jalali);
        const monthFormat = jalali ? 'jMM' : 'MM';

        return dayList.map((day,i) => {

            //const dayState = ranges.getDayState(day);
            //const isDisabled =  dayState.disabled ? 'r-disabled' : '';
            
            //const isAction = selectStep === 2 ? 'isBefore' : 'isAfter' ;
            console.log(selectStep)
            const isDisabled = multiselect &&  (day['isBefore'](selectedDay2) && day['isAfter'](selectedDay)) ? 'r-disabled' : '' ;


            const isOutOfDays =  day.format(monthFormat) !== month.format(monthFormat)  ? 'r-outOfDays' : ''
            const isToday = checkToday(day.format('YYYYMMDD')) ? 'r-today' : '';
            const selected = selectedDay ? selectedDay.isSame(day, 'day') : false;
            const selected2 =selectedDay2 ? selectedDay2.isSame(day, 'day') : false;
            const isSelected =  selected|| selected2 ? 'r-selected' : '';

            return ( 
                <div onClick={this.selectDay.bind(this,day)}  key={i} 
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