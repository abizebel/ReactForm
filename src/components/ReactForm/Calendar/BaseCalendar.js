import React, {Component,Fragment} from 'react';
import Calendar from './Calendar';
import BaseCalendarContext from './BaseCalendarContext';
import DatePicker from './DatePicker';
import moment from 'moment-jalaali';
 const m = moment();
class BaseCalendar extends Component {
    constructor(props){
        super(props);
       
        this.state = {
            selectedMonth: m,
            selectedMonth2: this.props.double ?  m.clone().add(1, `Month`) : null,
            selectedYear : m,
            selectedYear2 : m.clone().add(1, `year`),
            selectedDay:  this.props.defaultValue || null,
            selectedDay2:   null,
            selectStep : 0, //0 = no select, 1 = firstSelect, 2 = secondSelect
            double : this.props.double
        }
    }   

    setSelectStep = (step) => {
        this.setState({selectStep : step})
    }

    setDay = (day, isSecondSelect = false ) => {
        this.setState({ [isSecondSelect ? 'selectedDay2' : 'selectedDay' ] : day });
    }

    setMonth = (month, isSecondSelect = false) => {
        this.setState({ [isSecondSelect ? 'selectedMonth2' : 'selectedMonth' ] : month });
    }

    setYear = (year, isSecondSelect = false) => {
        this.setState({ [isSecondSelect ? 'selectedYear2' : 'selectedYear' ] : year });
    }

    nextYear = (year, isSecondSelect = false) => {
        this.setState({ [isSecondSelect ? 'selectedYear2' : 'selectedYear' ] : year.clone().add(1, 'year') });
    }

    prevYear = (year, isSecondSelect = false) => {
        this.setState({ [isSecondSelect ? 'selectedYear2' : 'selectedYear' ] : year.clone().subtract(1, 'year') });
    }

    nextMonth = (month, isSecondSelect = false) => {
        this.setState({ [isSecondSelect ? 'selectedMonth2' : 'selectedMonth' ] : month.clone().add(1, 'month') });
        this.setState({ [isSecondSelect ? 'selectedYear2' : 'selectedYear' ] : month });
    }

    prevMonth = (month, isSecondSelect = false) => {
        this.setState({ [isSecondSelect ? 'selectedMonth2' : 'selectedMonth' ] : month.clone().subtract(1, 'month') });
        this.setState({ [isSecondSelect ? 'selectedYear2' : 'selectedYear' ] : month });
    }

    toggleCalendar = ()=> {
        this.setState({ double : !this.state.double })
    }

    getContextValue (){
        const {jalali,range, monthOnly } = this.props;
        const { double} = this.state;
        return {
            ...this.state,
            jalali ,
            multiselect :double ? true :  range ,
            double  ,
            monthOnly,
            setDay : this.setDay,
            setSelectStep : this.setSelectStep,
            setMonth:this.setMonth,
            setYear:this.setYear,
            nextMonth:this.nextMonth,
            prevMonth:this.prevMonth,
            nextYear:this.nextYear,
            prevYear:this.prevYear,
            toggleCalendar : this.toggleCalendar,
            change : this.props.change,
        }
    }

    render (){
        const {double, datepicker} = this.props;
        return (
            <BaseCalendarContext.Provider value ={this.getContextValue()}>
                {   datepicker  ? <DatePicker /> :
                    double      ?  <div className="r-rangeCalendar"><Calendar id="1" /><Calendar id="2" /></div>:
                    <Calendar id="1" /> 
                }
            </BaseCalendarContext.Provider>
        )
    }
}

BaseCalendar.defaultProps = {
    jalali : false,
    range : false,
    datepikcer : false,
    double : false
}



export default BaseCalendar;