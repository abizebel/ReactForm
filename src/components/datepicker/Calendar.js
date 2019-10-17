import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DaysViewHeading from './DaysViewHeading';
import DaysOfWeek from './DaysOfWeek';
import MonthSelector from './MonthSelector';
import Day from './Day';
import { getDaysOfMonth } from './utils/moment-helper';
import moment from 'moment-jalali';
import onClickOutside from 'react-onclickoutside/dist/react-onclickoutside';
import './basic.css';

export class Calendar extends Component{
  constructor(props) {
      super(props);

      // Load Persian localisations
      this.props.jalali ? moment.loadPersian() : moment()
      
      this.state = {
        month: this.props.defaultMonth || this.props.selectedDay || moment(this.props.min),
        selectedDay: this.props.selectedDay || null,
        mode: 'days'
      };
      this.days = null;
      this.lastRenderedMonth = null;
     
  }

  getChildContext() {
    return {
      nextMonth: this.nextMonth.bind(this),
      prevMonth: this.prevMonth.bind(this),
      setCalendarMode: this.setMode.bind(this),
      setMonth: this.setMonth.bind(this),
      jalali: this.props.jalali,
    };
  }

  componentWillReceiveProps({ selectedDay, defaultMonth, min }) {
    if (this.props.selectedDay !== selectedDay) {
      this.selectDay(selectedDay);
    } else if (defaultMonth && this.props.defaultMonth !== defaultMonth && this.state.month === this.props.defaultMonth) {
      this.setMonth(defaultMonth);
    } else if (min && this.props.min !== min && this.state.month.isSame(this.props.min)) {
      this.setMonth(min.clone());
    }
  }

  setMode(mode) {
    this.setState({ mode });
  }

  setMonth(month) {
    this.setState({ month });
  }

  nextMonth() {
    const {jalali} = this.props;
    const jStr = jalali ? 'j' :'';
    this.setState({
      month: this.state.month.clone().add(1, `${jStr}Month`  )
    });
  }

  prevMonth() {
    const {jalali} = this.props;
    const jStr = jalali ? 'j' :'';
    this.setState({
      month: this.state.month.clone().subtract(1, `${jStr}Month`)
    });
  }

  selectDay(selectedDay) {
    const { month } = this.state;
    const {jalali} = this.props;
    const jStr = jalali ? 'j' :'';

    // Because there's no `m1.isSame(m2, 'jMonth')`
    if (selectedDay.format(`${jStr}YYYY${jStr}MM`) !== month.format(`${jStr}YYYY${jStr}MM`)) {
      this.setState({ month: selectedDay });
    }

    this.setState({ selectedDay });
  }

  handleClickOnDay  (selectedDay) {
    const { onSelect } = this.props;
    this.selectDay(selectedDay);
    if (onSelect) {
      onSelect(selectedDay);
    }
  };

  handleClickOutside(event) {
    
    if (this.props.onClickOutside) {
      this.props.onClickOutside(event);
    }
  }


  renderMonthSelector() {
    const { month } = this.state;
    const { styles } = this.props;
    return (<MonthSelector styles={styles} selectedMonth={month}/>);
  }

  renderDays() {
    const { month, selectedDay } = this.state;
    const { jalali,children, min, max, styles, outsideClickIgnoreClass } = this.props;
    const jStr = jalali ? 'j' :'';
    let days;

    if (this.lastRenderedMonth === month) {
      days = this.days;
    } else {
      days = getDaysOfMonth(month);
      this.days = days;
      this.lastRenderedMonth = month;
    }
    debugger
    return (
      <div>
        {children}
        <DaysViewHeading month={month}/>
        <DaysOfWeek />
        <div className={`dayPickerContainer${jalali ? ' jalali' : ''}`}>
          {
            days.map(day => {
              const isCurrentMonth = day.format(`${jStr}MM`) === month.format(`${jStr}MM`);
              const disabled = (min ? day.isBefore(min) : false) || (max ? day.isAfter(max) : false);
              const selected = selectedDay ? selectedDay.isSame(day, 'day') : false;

              return (
                <Day
                  key={day.format('YYYYMMDD') }
                  onClick={this.handleClickOnDay.bind(this)}
                  day={day}
                  disabled={disabled}
                  selected={selected}
                  isCurrentMonth={isCurrentMonth}
                  styles={styles}
                />
              );
            })
          }
        </div>
      </div>
    );
  }

  render() {
    
    const {selectedDay, min,max,onClickOutside,
    outsideClickIgnoreClass,styles,className, jalali} = this.props;
    const { mode } = this.state;
      return (
        <div className={`calendarContainer${jalali ? ' jalali': ''}`} >
          { mode === 'monthSelector' ? this.renderMonthSelector() : this.renderDays() }
        </div>
      );
  }
}


Calendar.propTypes = {
  min: PropTypes.object,
  max: PropTypes.object,
  styles: PropTypes.object,
  selectedDay: PropTypes.object,
  defaultMonth: PropTypes.object,
  onSelect: PropTypes.func,
  onClickOutside: PropTypes.func,
  containerProps: PropTypes.object,

};

Calendar.childContextTypes = {
  nextMonth: PropTypes.func.isRequired,
  prevMonth: PropTypes.func.isRequired,
  setCalendarMode: PropTypes.func.isRequired,
  setMonth: PropTypes.func.isRequired,
  jalali :  PropTypes.bool,

};

Calendar.defaultProps = {
  styles:{},
  jalali : false,
  containerProps: {}
};

export default onClickOutside(Calendar);

