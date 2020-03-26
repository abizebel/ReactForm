import React, {Component,Fragment} from 'react';
import Calendar from './Calendar';
import BaseCalendarContext from './BaseCalendarContext';

class BaseCalendar extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedDay:  this.props.defaultValue || null,
            selectedDay2:   null,
            selectStep : 0, //0 = no select, 1 = firstSelect, 2 = secondSelect

        }
    }   

    setSelectStep = (step) => {
        this.setState({selectStep : step})
    }

    setDay = (selectedDay, isSecondSelect = false ) => {
        this.setState({ [isSecondSelect ? 'selectedDay2' : 'selectedDay' ] : selectedDay });
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
            change : this.props.change,
        }
    }

    render (){
        const {double} = this.props;
        return (
            <BaseCalendarContext.Provider value ={this.getContextValue()}>
                {
                    double ? 
                    <div className="r-rangeCalendar"><Calendar id={'c1'} /><Calendar id={'c2'} /></div>:
                    <Calendar /> 
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