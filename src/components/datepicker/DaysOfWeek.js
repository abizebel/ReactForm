import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Day of week names for use in date-picker heading
const dayOfWeekNames = ['SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI'];
const dayOfWeekNamesJalali = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج']
export default class DaysOfWeek extends Component {

  constructor (props) {
    super(props)
  }

  render() {
    const {jalali} = this.context;
    
    const targetWeeks =  jalali ? dayOfWeekNamesJalali : dayOfWeekNames;
    return (
      <div className="daysOfWeek">
        {
          targetWeeks.map((name, key) => <div key={key}>{name}</div>)  
        }
      </div>
    );
  }
}

DaysOfWeek.contextTypes = {

  jalali : PropTypes.bool
};
