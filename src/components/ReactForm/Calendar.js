import React, {Component,Fragment} from 'react';
import moment from 'moment-jalaali';

const latinNumbers = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'];
const persianNumbers = [/1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g, /0/g];
const weekNames = ['SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI'];
const jalaliWeekNames = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج']

class Calendar extends Component {


    constructor(props){
        super(props);
        const m = moment();
        this.state = {
            month : m,
            mode : 'days',//default
            title : m.format(`MMMM  YYYY`),
            nextAction : this.nextMonth,//default
            prevAction : this.prevMonth,//default
        }
    }

    /**
     * Get days of a month that should be shown on a month page
     *
     * @param month A moment object
     * @returns {Array}
     */
    getDaysOfMonth(month, isGregorian) {
        const days = [];
      
        const monthFormat = isGregorian ? 'Month' : 'jMonth';
        const dayOffset = isGregorian ? 0 : 1;
      
        const current = month.clone().startOf(monthFormat);
        const end = month.clone().endOf(monthFormat);
      
        // Set start to the first day of week in the last month
        current.subtract((current.day() + dayOffset) % 7, 'days');
      
        // Set end to the last day of week in the next month
        end.add(6 - ((end.day() + dayOffset) % 7), 'days');
      
        while (current.isBefore(end)) {
          days.push(current.clone());
          current.add(1, 'days');
        }
      
        return days;
    }


    componentDidMount (){
        const {mode} = this.state;

        if(mode === 'days'){
            this.setState({
                nextAction : this.nextMonth.bind(this),
                prevAction : this.prevMonth.bind(this),
            })
        }
        else if (mode === 'months'){

        }
        else if (mode === 'years'){

        }
    }
    renderContent (){
        const {mode} = this.state;

        if(mode === 'days'){
            return (
                <Fragment>
                    {this.renderWeeks()}
                    {this.renderDays()}
                </Fragment>
            )
        }
        else if (mode === 'months'){

        }

        
    }
    renderDays (){
        const dayList = this.getDaysOfMonth(this.state.month,true);
       
        return dayList.map((day,i) => {
            const disabled = day.isBefore(this.state.month, 'month') || day.isAfter(this.state.month, 'month') ;
            return ( <div key={i} class={`r-calendar-item ${disabled ? 'r-disabled' : ''}`}><span>{day.format(`D`)}</span></div>)
        });
    }


    renderWeeks () {
        const {jalali} = this.props;
        const resultWeekNames = jalali ? jalaliWeekNames :weekNames;

        return resultWeekNames.map((name, i) => {
            return (
                <div key={i} class="r-calendar-item r-week">
                    <span>{name}</span>
                </div>       

            )
        })
    }


    nextMonth(){
        this.setState({ moment: this.state.month.clone().add(1, `Month`) });
    }
    prevMonth(){
        this.setState({  moment: this.state.month.clone().subtract(1, `Month`) });
    }
    nextYear() {
        this.setState({ year: this.state.year.clone().add(1, 'year')});
    }
    prevYear() {
    this.setState({ year: this.state.year.clone().subtract(1, 'year')});
    }


    render (){
        const {prevAction, nextAction, title} = this.state;

        return (
            <div class="r-calendar">

                <div class="r-calendar-header">
                    <div class="r-title">{title}</div>
                    <div class="r-changer">
                        <svg viewBox="0 0 24 24" onClick={nextAction.bind(this)}>
                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                        <svg viewBox="0 0 24 24" onClick={prevAction.bind(this)}>
                            <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
                        </svg>
                    </div>
                </div>

                <div class="r-calendar-content">
                    {this.renderContent()}
                </div>

                <div class="r-calendar-footer">
                    <button type="button" class="r-button r-ripple r-nospace"> Today </button>
                </div>
            </div>
        )
    }
}

Calendar.defaultProps = {
    jalali : false,
}
export default Calendar