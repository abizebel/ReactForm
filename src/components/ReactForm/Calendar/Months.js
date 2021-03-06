import React, {Component} from 'react';
import calendarContext from './CalendarContext';
import moment from 'moment-jalaali';
import {persianNumber, checkCurentMonth } from './functions';


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
                startDateStr :selectedMonth && (jalali ? selectedMonth.format('jYYYY/jM/1') : selectedMonth.format('YYYY/MM/1'))  ,
                endDateStr : selectedMonth2 && (jalali ?selectedMonth2.format('jYYYY/jM/1') : selectedMonth2.format('YYYY/MM/1') ),
                startD :selectedMonth,
                endD: selectedMonth2
            }
        }
        else {
            result = {
               dateStr :jalali ? month.format('jYYYY/jM/1') : month.format('YYYY/MM/1') ,
                d :month,
            }
        }

        return result
    }

    selectMonth (month){
        const {setMonth,setDay,setMode,selectedMonth, selectedMonth2, change, multiselect, setSelectStep, selectStep, id, monthOnly, setChange} = this.context;
        if (multiselect && monthOnly) {
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
                    setChange(result)
                    return;
                }
                setSelectStep(2);
                setMonth(month, true);
                change(result)
                setChange(result)
            }
            else if (selectStep === 2) {
                setSelectStep(1);
                setMonth(month);
                setMonth(null,true);
            }
        }
        else {
            const result = this.getResult(month)
            setSelectStep(1);
           
            if(!monthOnly){
                setDay(null)
                setDay(null,true)
            }
            setMode('days')
            setMonth(month);
            change(result)
            setChange(result)
        }
    }

    focusMonth = (month) => {
        const {setMonth, multiselect, selectStep, monthOnly} = this.context;

        if (multiselect && monthOnly) {
            if (selectStep === 1) {
                setMonth(month, true);
            }
        } 
    }

    blurMonth =  () => {
        const {setMonth, multiselect, selectStep,monthOnly} = this.context;

        if (multiselect && monthOnly) {
            if (selectStep === 1) {
                setMonth(null, true);
            }
        } 
    }

    createMonth = (monthNumber) => {
        const { jalali, year} = this.context;
        const monthYearFormat = jalali ?  'jM-jYYYY':'M-YYYY' ;

        const yearFormat =  jalali ? 'jYYYY' : 'YYYY' ;
        const key = `${monthNumber}-${year.format(yearFormat)}`;
        const month = moment(key, monthYearFormat);

        return month;
    }

    isDisbaled (month){
        const {selectedMonth, selectedMonth2, monthOnly, multiselect, selectStep} = this.context;
   
        return (
            multiselect &&
            monthOnly &&
            selectStep !==0 &&
            (month.isBefore(selectedMonth2) && month.isAfter(selectedMonth)) 
        )
    }

    isSelected = (month) => {
        const {selectedYear, selectedYear2,selectedMonth, selectedMonth2, id, mode,selectStep, multiselect} = this.context;
        let selected = false;
        let selected2 = false;
        
        if (selectedYear && selectedYear2 && selectedYear.isSame(selectedYear2, 'month')) {
            if (id === '1') {
                selected = selectedMonth ? selectedMonth.isSame(month, 'month') && selectStep >0: false;
            }
            else if (id === '2'){
                selected2 = selectedMonth2 ? selectedMonth2.isSame(month, 'month') : false;
            }
        }
        else {
            selected = selectedMonth && mode !=='months' &&  selectStep >0  ?  selectedMonth.isSame(month, 'month') : false;
            selected2  = multiselect ?  ( selectedMonth2 && mode !=='months' && selectStep>1 ? selectedMonth2.isSame(month, 'month') : false) : false;
           
        }

        return selected || selected2   
    }


    /**
     * Rabish Function :)
     */
    disableBforeAfter = (month) =>{
        const {disabledSides, jalali} = this.context;
        if (!disabledSides.start || !disabledSides.end) return false;
        if (jalali) {
            let startM = moment(disabledSides.start, 'jYYYY/jM/jD').add(-1,'month');
            let endM = moment(disabledSides.end, 'jYYYY/jM/jD').add(1,'month');
            return !(month.isBefore(endM) && month.isAfter(startM,  'month'));
        }
        else {
            let startM = moment(disabledSides.start, 'YYYY/M/D').add(-1,'month');
            let endM =  moment(disabledSides.end, 'YYYY/M/D').add(1,'month');
            return !(month.isBefore(endM) && month.isAfter(startM,  'month'));
        }
    }

    renderMonths (){
        const {jalali, selectedMonth, selectedMonth2, multiselect, monthOnly, selectStep, mode} = this.context;
        const months = jalali ? jalaliMonths : georgianMonths;

        return months.map((monthItem, i) => {
            const month = this.createMonth(i + 1);
            const isDisabled = this.isDisbaled(month) ? 'r-disabled' : '' ;
            const isLock = this.disableBforeAfter(month) ? 'r-lock' : '' ;
            const isSelected = this.isSelected(month) ? 'r-selected' : '';
            const currentMonth = checkCurentMonth(month) ? 'r-currentMonth' : '';

            return ( 
                <div key={i} 
                    onMouseEnter={this.focusMonth.bind(this, this.createMonth(i+1))}
                    onMouseLeave={this.blurMonth.bind(this, this.createMonth(i+1))}
                    onClick={this.selectMonth.bind(this, this.createMonth(i+1))} 
                    class={`r-calendar-item r-month ${currentMonth} ${isSelected} ${isDisabled} ${isLock}`}>
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