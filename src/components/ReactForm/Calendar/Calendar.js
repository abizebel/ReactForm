import React, {Component,Fragment} from 'react';
import moment from 'moment-jalaali';

import CalendarContext from './CalendarContext';
import DaysHeader from './DaysHeader';
import Days from './Days';
import MonthsHeader from './MonthsHeader';
import Months from './Months';
import '../ReactForm.css';
import './Calendar.css';



class Calendar extends Component {


    constructor(props){
        super(props);
        const m = moment();
        this.state = {
            month : m,
            year : m,
            mode : 'days',//default

        }
    }


    changeMode (mode){
        this.setState({mode})

    }
    nextMonth(){
        const {month} = this.state;
        this.setState({ month: month.clone().add(1, `Month`) });
    }

    prevMonth(){
        const {month} = this.state;
        this.setState({  month: month.clone().subtract(1, `Month`) });
    }

    nextYear() {
        const {year} = this.state;
        this.setState({ year: year.clone().add(1, 'year')});
    }

    prevYear() {
        const {year} = this.state;
        this.setState({ year: year.clone().subtract(1, 'year')});
    }


    getContextValue (){
        return {
            ...this.state,
            jalali : this.props.jalali,
            nextMonth : this.nextMonth.bind(this),
            prevMonth : this.prevMonth.bind(this),
            nextYear :this.nextYear.bind(this),
            prevYear : this.prevYear.bind(this),
            changeMode : this.changeMode.bind(this),
        }
    }

    render (){
        const {mode} = this.state;

        return (
            <CalendarContext.Provider value ={this.getContextValue()}>
                <div class="r-calendar">
                    {   mode === 'days' ?
                        <Fragment> <DaysHeader  /> <Days   /> </Fragment> :
                        <Fragment> <MonthsHeader /> <Months /> </Fragment>
                    }
                    
                    <div class="r-calendar-footer">
                        <button type="button" class="r-button r-ripple r-nospace"> Today </button>
                    </div>
                </div>
            </CalendarContext.Provider>
        )
    }
}

Calendar.defaultProps = {
    jalali : false,
}
export default Calendar