import React, {Component} from 'react';
import Calendar from './Calendar';
import BaseCalendarContext from './BaseCalendarContext';
import moment from 'moment-jalaali';

class BaseCalendar extends Component {
    constructor(props){
        super(props);
        const m = moment();

        const {monthOnly} = this.props;

        this.state = {
            selectedMonth:monthOnly ? null : m,
            selectedMonth2: monthOnly ? null : m.clone().add(1, `Month`),
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


    getContextValue (){
        const {jalali,range, double, monthOnly } = this.props;
        return {
            ...this.state,
            jalali ,
            range ,
            double ,
            monthOnly,
            setDay : this.setDay,
            setSelectStep : this.setSelectStep,
            setMonth:this.setMonth,
            setYear:this.setYear,
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