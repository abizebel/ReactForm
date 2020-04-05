import React, {Component,Fragment} from 'react';
import moment from 'moment-jalaali';

import CalendarContext from './CalendarContext';
import BaseCalendarContext from './BaseCalendarContext';
import DaysHeader from './DaysHeader';
import Days from './Days';
import MonthsHeader from './MonthsHeader';
import Months from './Months';
import '../ReactForm.css';
import './Calendar.css';



class Calendar extends Component {
    static contextType = BaseCalendarContext;
    
    constructor(props){
        super(props);
        const m = moment();
  
        this.state = {
            mode : 'days',//default

        }
    }   

    setMode = (mode) => {
        this.setState({mode})
    }

    setMonth = (month,  is= false) => {
        const {setMonth} = this.context;
        const { id} = this.props;
        const isSecond = is || id === '2';
       
        setMonth(month, isSecond)
    }
    setYear = (year, is= false) => {
        const {setYear} = this.context;
        const {id} = this.props;
        const isSecond = is || id === '2';
       
        setYear(year, isSecond)
    }



    getContextValue (){
        const {change, setSelectStep,selectedYear,selectedYear2,selectStep, setDay, jalali, range,selectedDay,selectedDay2,double,selectedMonth , selectedMonth2} = this.context;
        const {id} = this.props;
        
        return {
            ...this.state,
            jalali,
            multiselect: range,
            nextMonth : this.nextMonth ,
            prevMonth :  this.prevMonth,
            setMode : this.setMode,
            setYear : this.setYear ,
            setMonth : this.setMonth,
            selectedDay,
            selectedDay2,
            selectedYear,
            selectedYear2,
            setDay : setDay,
            setSelectStep ,
            selectStep,
            change : change,
            id ,
            double,
            selectedMonth,
            selectedMonth2,
            month : id === '1' ? selectedMonth: selectedMonth2 ,
            year : id === '1' ? selectedYear: selectedYear2 ,
            
        }
    }

    render (){
        const {mode} = this.state;
        const {jalali, monthOnly} = this.context;
        const rtlClass = jalali ? 'r-rtl' : '';
        return (
            <CalendarContext.Provider value ={this.getContextValue()}>
                <div class={`r-calendar ${rtlClass}`}>
                    <div className="r-calendar-wrapper">

                    {   !monthOnly ?  
                            (
                                mode === 'days' ?
                                <Fragment> <DaysHeader   /> <Days   /> </Fragment> :
                                <Fragment> <MonthsHeader /> <Months /> </Fragment>
                            ) : 
                            <Fragment> <MonthsHeader /> <Months /> </Fragment>

                        }
                        
                        <div class="r-calendar-footer">
                            <button onClick={this.setToday} type="button" class="r-button r-ripple r-nospace"> {jalali ? 'امروز' : 'today'} </button>
                        </div>
                    </div>
                </div>
            </CalendarContext.Provider>
        )
    }
}

Calendar.defaultProps = {
    jalali : false,
    multiselect : false,
}
export default Calendar