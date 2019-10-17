import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { persianNumber } from './utils/persian';
import { leftArrow, rightArrow } from './utils/assets';

export default class Heading extends Component {
  constructor (props) {
    super(props)
  }



  handleMonthClick(event) {
    const { setCalendarMode } = this.context;
    event.preventDefault();
    setCalendarMode('monthSelector');
  }

  render() {
    const { nextMonth, prevMonth ,jalali} = this.context;
    const { month, styles } = this.props;
    const jStr = jalali ? 'j' :'';
    return (
      <div className="heading">
        <button className="title" onClick={this.handleMonthClick.bind(this)}>

          {jalali ?  persianNumber(month.format(`${jStr}MMMM ${jStr}YYYY`))  :month.format(`${jStr}MMMM ${jStr}YYYY`) }
        </button>
        <button
          type="button"
          title="ماه قبل"
          className="prev"
          onClick={prevMonth}
          dangerouslySetInnerHTML={rightArrow}
        />
        <button
          type="button"
          title="ماه بعد"
          className="next"
          onClick={nextMonth}
          dangerouslySetInnerHTML={leftArrow}
        />
      </div>
    );
  }
}



Heading.propTypes = {
    month: PropTypes.object.isRequired
};

Heading.contextTypes = {
  styles: PropTypes.object,
  nextMonth: PropTypes.func.isRequired,
  prevMonth: PropTypes.func.isRequired,
  setCalendarMode: PropTypes.func.isRequired,
  jalali : PropTypes.bool
};
