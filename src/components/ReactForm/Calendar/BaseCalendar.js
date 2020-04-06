import React, {Component,Fragment} from 'react';
import Calendar from './Calendar';
import BaseCalendarContext from './BaseCalendarContext';
import moment from 'moment-jalaali';
 const m = moment();
class BaseCalendar extends Component {
    constructor(props){
        super(props);
       

        const {double} = this.props;

        this.state = {
            selectedMonth: m,
            selectedMonth2: double ?  m.clone().add(1, `Month`) : null,
            selectedYear : m,
            selectedYear2 : m.clone().add(1, `year`),
            selectedDay:  this.props.defaultValue || null,
            selectedDay2:   null,
            selectStep : 0, //0 = no select, 1 = firstSelect, 2 = secondSelect
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
    }

    prevMonth = (month, isSecondSelect = false) => {
        this.setState({ [isSecondSelect ? 'selectedMonth2' : 'selectedMonth' ] : month.clone().subtract(1, 'month') });
    }

    getContextValue (){
        const {jalali,range, double, monthOnly } = this.props;
        return {
            ...this.state,
            jalali ,
            multiselect : range ,
            double ,
            monthOnly,
            setDay : this.setDay,
            setSelectStep : this.setSelectStep,
            setMonth:this.setMonth,
            setYear:this.setYear,
            nextMonth:this.nextMonth,
            prevMonth:this.prevMonth,
            nextYear:this.nextYear,
            prevYear:this.prevYear,
            change : this.props.change,
        }
    }

    render (){
        const {double} = this.props;
        return (
            <BaseCalendarContext.Provider value ={this.getContextValue()}>
                {
                    double ? 
                    <div className="r-rangeCalendar"><Calendar id="1" /><Calendar id="2" /></div>:
                    <Calendar id="1" /> 
                }
            </BaseCalendarContext.Provider>
        )
    }
}

BaseCalendar.defaultProps = {
    jalali : false,
    range : false,
    double : false
}



export default BaseCalendar;