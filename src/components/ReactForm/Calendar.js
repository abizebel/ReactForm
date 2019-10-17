import React, {Component} from 'react';
import moment from 'moment-jalali';

const latinToPersianMap = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'];
const latinNumbers = [/1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g, /0/g];
const dayOfWeekNames = ['SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI'];
const dayOfWeekNamesJalali = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج']

class Calendar extends Component {


    constructor(props){
        super(props);
        this.state = {
            moment : moment()
        }
    }

    /**
     * Get days of a month that should be shown on a month page
     *
     * @param month A moment object
     * @returns {Array}
     */
    getDaysOfMonth(month) {
        const days = [];
    
        const current = month.clone().startOf('jMonth');
        const end = month.clone().endOf('jMonth');
    
        // Set start to the first day of week in the last month
        current.subtract((current.day() + 1) % 7, 'days');
    
        // Set end to the last day of week in the next month
        end.add(6 - (end.day() + 1) % 7, 'days');
    
        while (current.isBefore(end)) {
        days.push(current.clone());
        current.add(1, 'days');
        }
    
        return days;
    }
    

    nextMonth(){
        this.setState({
            moment: this.state.moment.clone().add(1, `Month`  )
        });
    }
    preMonth(){
        this.setState({
            moment: this.state.moment.clone().subtract(1, `Month`  )
        });
    }
    nextYear(){

    }
    preYear(){

    }


    /**
     * Render days 
     *  
     */
    renderDays (month){
        const dayList = this.getDaysOfMonth(this.state.moment);
       
        const days = dayList.map((day,i) => {
            const disabled = day.isBefore(this.state.moment, 'month') || day.isAfter(this.state.moment, 'month') ;
            return ( <div class={`r-calender-day ${disabled ? 'r-disabled' : ''}`}>{day.format(`D`)}</div>)
        });

        return (<div class="r-calender-days">{days}</div>)
    }

    render (){
        
        return (
            <div class="r-calender">
            <div class="r-calender-header">
                <div class="r-title">{this.state.moment.format(`MMMM  YYYY`)}</div>
                <div class="r-changer">
                    <svg viewBox="0 0 24 24" onClick={this.nextMonth.bind(this)}>
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                    <svg viewBox="0 0 24 24" onClick={this.preMonth.bind(this)}>
                        <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
                    </svg>
                </div>
            </div>
            <div class="r-calender-content">
                    <div class="r-calender-weeks">
                        <div class="r-calender-week">Su</div>
                        <div class="r-calender-week">Mo</div>
                        <div class="r-calender-week">Tu</div>
                        <div class="r-calender-week">We</div>
                        <div class="r-calender-week">Th</div>
                        <div class="r-calender-week">Fr</div>
                        <div class="r-calender-week">Sa</div>
                    </div>
                    {this.renderDays()}

            </div>
            <div class="r-calender-footer">
                    <button type="button" class="r-button r-ripple r-nospace"> Today </button>
            </div>
        </div>
        )
    }
}

Calendar.defaultProps = {
    rtl : false,
}
export default Calendar