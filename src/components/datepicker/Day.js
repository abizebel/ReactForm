import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { persianNumber } from './utils/persian';

const styles = {
  wrapper: {},
  button: {
    outline: 'none',
    cursor: 'pointer'
  }
};

export default class Day extends Component {
  constructor (props) {
    super (props)
  }
 

  shouldComponentUpdate(nextProps) {
    return nextProps.selected !== this.props.selected ||
      nextProps.disabled !== this.props.disabled ||
      nextProps.isCurrentMonth !== this.props.isCurrentMonth;
  }

  handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    const { onClick, day } = this.props;

    if (onClick) {
      onClick(day);
    }
  }

  render() {
    const { day, disabled, selected, isCurrentMonth, onClick, styles} = this.props;
    const {jalali} = this.context;
    const jStr = jalali ? 'j' :'';
    const className = classnames("dayWrapper", {
      ["selected"]: selected,
      ["currentMonth"]: isCurrentMonth
    });
    
    return (
      <div className={className}>
        <button
          type="button"
          onClick={this.handleClick.bind(this) }
          disabled={disabled}>

          {jalali ? persianNumber(day.format(`${jStr}D`)) : day.format(`${jStr}D`)}
        </button>
      </div>
    );
  }
}


Day.propTypes = {
  day: PropTypes.object.isRequired,
  isCurrentMonth: PropTypes.bool,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  onClick: PropTypes.func
};


Day.contextTypes = {
  jalali :  PropTypes.bool.isRequired,

};
