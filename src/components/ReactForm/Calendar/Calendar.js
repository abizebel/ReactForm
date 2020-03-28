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
            year : m,
            mode : 'days',//default

        }
    }   

    setMode = (mode) => {
        this.setState({mode})
    }
    setYear = (year) => {
        this.setState({year})
    }
    setMonth = (month) => {
        const {setMonth} = this.context;
        const { id} = this.props;
        const isSecond =id === '2';
       
        setMonth(month, isSecond)
    }

    nextYear = () => {
        const {year} = this.state;
        this.setState({ year: year.clone().add(1, 'year')});
    }
    prevYear = () => {
        const {year} = this.state;
        this.setState({ year: year.clone().subtract(1, 'year')});
    }


    getContextValue (){
        const {change, setSelectStep,selectStep, setDay, jalali, range,selectedDay,selectedDay2,double,selectedMonth , selectedMonth2} = this.context;
        const {id} = this.props;
        debugger
        return {
            ...this.state,
            jalali,
            multiselect: range,
            nextMonth : this.nextMonth ,
            prevMonth :  this.prevMonth,
            nextYear :this.nextYear,
            prevYear : this.prevYear,
            setMode : this.setMode,
            setMonth :this.setMonth,
            setYear : this.setYear,
            
            selectedDay,
            selectedDay2,
            setDay : setDay,
            setSelectStep ,
            selectStep,
            change : change,
            id ,
            double,
            selectedMonth,
            selectedMonth2,
            month : id === '2' ? selectedMonth2: selectedMonth ,
            
        }
    }

    render (){
        const {mode} = this.state;
        const {jalali} = this.context;
        const rtlClass = jalali ? 'r-rtl' : '';
        return (
            <CalendarContext.Provider value ={this.getContextValue()}>
                <div class={`r-calendar ${rtlClass}`}>
                    <div className="r-calendar-wrapper">

                        {   mode === 'days' ?
                            <Fragment> <DaysHeader   /> <Days   /> </Fragment> :
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