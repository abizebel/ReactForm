import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-jalali';
import TetherComponent from 'react-tether';
import Calendar from './Calendar';
import classnames from 'classnames';
import $ from 'jquery';

import onClickOutside from 'react-onclickoutside/dist/react-onclickoutside';


export const outsideClickIgnoreClass = 'ignore--click--outside';
class DatePicker extends Component {
  constructor(props) {
    super(props);

    const jStr = this.props.jalali ? 'j' :'';
    const inputFormat=`${jStr}YYYY/${jStr}M/${jStr}D`;

    this.state = {
      inputFormat :inputFormat,
      isOpen: false,
      momentValue: this.props.defaultValue || null,
      inputValue: this.props.defaultValue ? 
        this.props.defaultValue.format(inputFormat) : ''
    };
  }

  setOpen(isOpen) {
    this.setState({ isOpen });
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps && nextProps.value !== this.props.value) {
      this.setMomentValue(nextProps.value);
    }
  }

  setMomentValue(momentValue) {
    const { inputFormat } = this.state;

    if (this.props.onChange) {
      this.props.onChange(momentValue);
    }

    let inputValue = "";
    if (momentValue)
      inputValue = momentValue.format(inputFormat);
    this.setState({ momentValue, inputValue });
  }

  handleFocus() {
    this.setOpen(true);
  }

  handleBlur(event) {
    const { onBlur} = this.props;
    const { isOpen, momentValue,inputFormat } = this.state;

    if (isOpen) {
      this.refs.input.focus();
    } else if (onBlur) {
      onBlur(event);
    }

    if (momentValue) {
      const inputValue = momentValue.format(inputFormat);
      this.setState({ inputValue });
    }
  }

  handleClickOutsideCalendar() {
    this.setOpen(false);
  }

  handleSelectDay(selectedDay) {
    const { momentValue: oldValue } = this.state;
    let momentValue = selectedDay.clone();

    if (oldValue) {
      momentValue = momentValue
        .set({
          hour: oldValue.hours(),
          minute: oldValue.minutes(),
          second: oldValue.seconds()
        });
    }

    this.setMomentValue(momentValue);
  }

  handleInputChange(event) {
    const { inputFormat } = this.state;
    debugger
    const inputValue = event.target.value;
    const momentValue = moment(inputValue, inputFormat);

    if (momentValue.isValid()) {
      this.setState({ momentValue });
    }

    this.setState({ inputValue });
    
    // var value =  inputValue;
    // var columnFiled = $(this.refs.input).closest('.grid-cell').attr('data-feild');
    // var rowIndex = Number($(this.refs.input).closest('.grid-cell').attr('data-row-index'));
    // store.dispatch(changeDate(value, rowIndex,columnFiled) )
    


  }

  handleInputClick() {
    if (!this.props.disabled) {
      this.setOpen(true)
    }
  }

  renderInput() {
    const {jalali} = this.props;
    
    let { isOpen, inputValue } = this.state;
    
    if (this.props.value) {
      let value = this.props.value;
      let inputFormat = this.state.inputFormat;
      // if (value.format == undefined) {
      //   if(jalali) {
      //     inputValue = moment(this.props.value, 'YYYY-M-D HH:mm:ss').format(inputFormat)
      //   }
      //   else {
      //     inputValue = moment(this.props.value, 'YYYY-M-D').format(inputFormat)
      //   }
        
      // }
      // else {
        inputValue =value.format(inputFormat);
      //}
     
    }

    const className = classnames(this.props.className, {
      [outsideClickIgnoreClass]: isOpen
    });

    // let focusData = store.getState().focus;
    // debugger
    // store.dispatch(changeDate(focusData.rowIndex, focusData.columnField))
    return (
      <div  onClick={this.handleFocus.bind(this)}> 
        <div className={`e-float-input e-input-group ${jalali ? 'e-rtl' : ''}`}>
          <input
            className="e-input"
            type="text"
            ref="input"
            onFocus={this.handleFocus.bind(this) }
            onBlur={this.handleBlur.bind(this) }
            onChange={this.handleInputChange.bind(this) }
            onClick={this.handleInputClick.bind(this) }
            value={inputValue}
          />
          <span className="e-float-line"></span>
        </div>
      </div>
      
    );
  }

  renderCalendar() {
    const { momentValue } = this.state;
    const {jalali, timePickerComponent: TimePicker, onChange, min, max, defaultMonth, calendarStyles, calendarContainerProps } = this.props;

    return (
      <div>
        <Calendar
          min={min}
          max={max}
          selectedDay={momentValue}
          defaultMonth={defaultMonth}
          onSelect={this.handleSelectDay.bind(this) }
          onClickOutside={this.handleClickOutsideCalendar.bind(this) }
          styles={calendarStyles}
          containerProps={calendarContainerProps}
          jalali= {jalali}
        >
          {
            TimePicker ? (
              <TimePicker
                min={min}
                max={max}
                momentValue={momentValue}
                setMomentValue={this.setMomentValue.bind(this) }
              />
            ) : null
          }
        </Calendar>
      </div>
    );
  }

  removeDate() {
    const {onChange} = this.props;
    if (onChange) {
      onChange('');
    }
    this.setState({
      input: '',
      inputValue: ''
    });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <Fragment>
        { this.renderInput() }
        { isOpen ? this.renderCalendar() : null }
        </Fragment>
    );
  }
}


DatePicker.propTypes = {
  value: PropTypes.object,
  defaultValue: PropTypes.object,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  children: PropTypes.node,
  min: PropTypes.object,
  max: PropTypes.object,
  defaultMonth: PropTypes.object,
  removable: PropTypes.bool,
  timePickerComponent: PropTypes.func,
  calendarStyles: PropTypes.object,
  calendarContainerProps: PropTypes.object,
};

DatePicker.defaultProps = {
  calendarContainerProps: {}
};

DatePicker.defaultProps = {
  jalali : false,
};


export default DatePicker