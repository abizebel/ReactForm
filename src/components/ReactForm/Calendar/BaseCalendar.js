import React, {Component,Fragment} from 'react';
import Calendar from './Calendar';
import BaseCalendarContext from './BaseCalendarContext';
import moment from 'moment-jalaali';

class BaseCalendar extends Component {
    constructor(props){
        super(props);
        const m = moment();

        this.state = {
            selectedMonth:m,
            selectedMonth2:  m.clone().add(1, `Month`),
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

   
    getContextValue (){
        const {jalali,range, double } = this.props;
        return {
            ...this.state,
            jalali ,
            range ,
            double ,
            setDay : this.setDay,
            setSelectStep : this.setSelectStep,
            setMonth:this.setMonth,
            change : this.props.change,
        }
    }

    render (){
        const {double} = this.props;
        return (
            <BaseCalendarContext.Provider value ={this.getContextValue()}>
                {
                    double ? 
                    <div className="r-rangeCalendar"><Calendar id={'1'} /><Calendar id={'2'} /></div>:
                    <Calendar id={'c1'} /> 
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