import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { persianNumber } from './utils/persian';
import { leftArrow, rightArrow } from './utils/assets';

export default class MonthsViewHeading extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    const { year, styles } = this.props;
    const {jalali} = this.context;
    const jStr = jalali ? 'j' :'';

    return (
        <div className="heading">
        <span className="title">
          { jalali ? persianNumber(year.format(`${jStr}YYYY`)) : year.format(`${jStr}YYYY`)}
        </span>
          <button
            type="button"
            title="سال قبل"
            className="prev"
            onClick={this.props.onPrevYear}
            dangerouslySetInnerHTML={rightArrow}
            />
          <button
            type="button"
            title="سال بعد"
            className="next"

            onClick={this.props.onNextYear}
            dangerouslySetInnerHTML={leftArrow}
            />
        </div>
    );
  }
}

MonthsViewHeading.propTypes = {
  year: PropTypes.object.isRequired,
  onNextYear: PropTypes.func.isRequired,
  onPrevYear: PropTypes.func.isRequired
};

MonthsViewHeading.contextTypes = {
  styles: PropTypes.object,
  jalali : PropTypes.bool
};
