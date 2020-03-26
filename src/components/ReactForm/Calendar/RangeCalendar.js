import React , {Component} from 'react';
import Calendar from './Calendar';
import moment from 'moment-jalaali';

var ranges = [
    // { 
    //   disabled: true, 
    //   start:moment().add(1,'days'),
    //   end:moment().add(5,'days') 
    // },
  ]

class RangeCalendar extends Component{
    constructor (props){
        super(props);
        this.state = {
            selectMode : null,
            firstDate : null,
            secondDate : null,
        }
    }

    changeMode = () => {
        const {selectMode} = this.state;

        if (selectMode === null){
            this.setState({selectMode: 1})
        }
        else if (selectMode === 1) {
            this.setState({selectMode: 2})
        }
        else if (selectMode === 2) {
            this.setState({selectMode: null})
        }
        debugger
    }
    render () {
        const {jalali} = this.props;
        const {selectMode} = this.state;
        return (
            <div className="r-rangeCalendar">
                <Calendar jalali={false} multiselect={true} change={val => {
                    this.setState({firstDate : val})
                    console.log(this.state)
                  //  this.changeMode()
                }} />
                {/* <Calendar jalali={jalali} selectMode={selectMode} change={val => {
                   this.setState({secondDate : val})
                   console.log(this.state)
                  //  this.changeMode()
                }} /> */}
            </div>
        )
    }
}
RangeCalendar.defaultProps = {
    jalali : false,
}

export default RangeCalendar;