import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-jalali';
import classnames from 'classnames';
import MonthsViewHeading from './MonthsViewHeading';
import { persianNumber } from './utils/persian';
import { leftArrow, rightArrow } from './utils/assets';

// List of months
const jalaliMonths = [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند'
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export default class MonthSelector extends Component {
  constructor (props) {
    super(props);
    this.state = {
      year: this.props.selectedMonth
    };
  }

 

  nextYear() {
    this.setState({
      year: this.state.year.clone().add(1, 'year')
    });
  }

  prevYear() {
    this.setState({
      year: this.state.year.clone().subtract(1, 'year')
    });
  }

  handleClick(key) {
    const { setMonth, setCalendarMode ,jalali} = this.context;
    const jStr = jalali ? 'j' :'';
    setMonth(moment(key, `${jStr}M-${jStr}YYYY`));
    setCalendarMode('days');
  }

  render() {
    const { year } = this.state;
    const { selectedMonth, styles } = this.props;
    const { jalali} = this.context;
    const jStr = jalali ? 'j' :'';
    const targetMonths = jalali ? jalaliMonths : months;
    return (
      <div className="month-selector">
        <MonthsViewHeading
          styles={styles}
          year={year}
          onNextYear={this.nextYear.bind(this) }
          onPrevYear={this.prevYear.bind(this) }
        />
        <div className="monthsList">
          {
            targetMonths.map((name, key) => {
              const buttonFingerprint = (key + 1) + '-' + year.format(`${jStr}YYYY`);
              const selectedMonthFingerprint = selectedMonth.format(`${jStr}M-${jStr}YYYY`);
              const isCurrent = selectedMonthFingerprint === buttonFingerprint;

              const className = classnames('monthWrapper', {
                ['selected']: isCurrent
              });

              return (
                <div key={key} className="monthWrappers">
                  <button onClick={this.handleClick.bind(this, buttonFingerprint)}>
                    {name}
                  </button>
                </div>
              );
            })
          }
        </div>
      </div>);
  }
}


MonthSelector.propTypes = {
  styles: PropTypes.object,
  selectedMonth: PropTypes.object.isRequired
};

MonthSelector.contextTypes = {
  setCalendarMode: PropTypes.func.isRequired,
  setMonth: PropTypes.func.isRequired,
  jalali: PropTypes.bool

};
