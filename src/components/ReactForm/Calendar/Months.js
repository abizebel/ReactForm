import React, {Component} from 'react';
import calendarContext from './CalendarContext';
import moment from 'moment-jalaali';
import {persianNumber } from './functions';


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


    
    getResult = (month) => {
        const {jalali,  selectedMonth, selectedMonth2, multiselect} = this.context;
        let result = {};
        if(multiselect ){
            result = {
                startDateStr :selectedMonth && (jalali ? persianNumber(selectedMonth.format('jYYYY/jM/1')) : selectedMonth.format('YYYY/MM/1'))  ,
                endDateStr : selectedMonth2 && (jalali ? persianNumber(selectedMonth2.format('jYYYY/jM/1')) : selectedMonth2.format('YYYY/MM/1') ),
                startD :selectedMonth,
                endD: selectedMonth2
            }
        }
        else {
            result = {
               dateStr :jalali ? persianNumber(month.format('jYYYY/jM/1')) : month.format('YYYY/MM/1') ,
                d :month,
            }
        }

        return result
    }

    selectMonth (month){
        const {setMonth,setMode,selectedMonth, selectedMonth2, change, multiselect, setSelectStep, selectStep, id} = this.context;
        if (multiselect) {
            debugger
            if (selectStep === 0) {
                setSelectStep(1);
                setMonth(month);
            }
            else if (selectStep === 1) {
                const result = this.getResult();
                
                if ( month.isBefore(selectedMonth) || (id === '2' && month.isBefore(selectedMonth2)) )   {
                    
                    setSelectStep(1);
                    setMonth(month);
                    change(result)
                    return;
                }
                setSelectStep(2);
                setMonth(month, true);
                change(result)
            }
            else if (selectStep === 2) {
                setSelectStep(1);
                setMonth(month);
                setMonth(null,true);
            }
        }
        else {
            const result = this.getResult(month)
            setMode('days')
            setMonth(month);
            change(result)
        }
    }
    focusMonth = (month) => {
        const {setMonth, multiselect, selectStep} = this.context;

        if (multiselect) {
            if (selectStep === 1) {
                setMonth(month, true);
            }
        } 
    }
    blurMonth =  () => {
        const {setMonth, multiselect, selectStep} = this.context;

        if (multiselect) {
            if (selectStep === 1) {
                setMonth(null, true);
            }
        } 
    }

    createMonth = (monthNumber) => {
        const { jalali, year} = this.context;
        const yearFormat =  jalali ? 'jMM/jYYYY/jDD' : 'MM/YYYY/DD' ;
        const key = `${monthNumber}-${year.format(yearFormat)}`;
        const month = moment(key, yearFormat);

        return month;
    }

    renderMonths (){
        const {jalali, selectedMonth, selectedMonth2, multiselect} = this.context;
        const months = jalali ? jalaliMonths : georgianMonths;

        return months.map((monthItem, i) => {
            const month = this.createMonth(i+1);
            const isDisabled = multiselect &&  (month.isBefore(selectedMonth2) && month.isAfter(selectedMonth)) ? 'r-disabled' : '' ;
            const selected = selectedMonth ? selectedMonth.isSame(month, 'month') : false;
            const selected2 = selectedMonth2 ? selectedMonth2.isSame(month, 'month') : false;
            const isSelected = selected || selected2 ? 'r-selected' : '';
            
            return ( 
                <div key={i} 
                  onMouseEnter={this.focusMonth.bind(this, this.createMonth(i+1))}
                   onMouseLeave={this.blurMonth.bind(this, this.createMonth(i+1))}
                    onClick={this.selectMonth.bind(this, this.createMonth(i+1))} 
                    class={`r-calendar-item r-month ${isSelected} ${isDisabled} `}>
                        <span>{monthItem}</span>
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