import React, {Component,Fragment,createRef} from 'react';
import Calendar from './Calendar'
import $ from 'jquery';
import Backdrop from '../Backdrop/Backdrop';
import BaseCalendarContext from './BaseCalendarContext';
import Input from '../Input/Input'



class DatePicker extends Component {


    static contextType = BaseCalendarContext;
    constructor (props){
        super(props);

        this.state = {
            open : false,
            top : null,
            left :null
        }

        this.inputDom = createRef();
    }



    open = () => {
        this.setState({open:true})

        var x = $(this.inputDom.current).offset().left;
        var y = $(this.inputDom.current).offset().top;
        this.setState({
            top : y + 30,
            left : x
        })
    }

    close = () => {
        this.setState({open:false})
    }


    getWidth = () =>{
        const {double } = this.context;
        return double ? 610 : 310
    }

    render (){
        const {jalali,toggleCalendar, double, approve,changeHistory} = this.context;
        const { open, top, left } = this.state;

        let value = '';

        if (changeHistory) {
            if (double && changeHistory.startDateStr && changeHistory.endDateStr) {
                value =  changeHistory.startDateStr + ' - ' + changeHistory.endDateStr ;
            }
            else {
                value =  changeHistory.startDateStr  || changeHistory.dateStr ;
            }
        }
        
        return (
           <div className="r-datepicker" ref={this.inputDom}>
                {open && <Backdrop onClick={this.close} />}
     
                        <Input
                            rtl={jalali}
                            onFocus = {this.open}
                            disabled={false} 
                            type="text" 
                            //onChange={this.inputChange.bind(this)}
                            className=" r-input filled" 
                            value={value}  
                        />
                        {open && <div className="r-datepicker-content" style={{width:this.getWidth(),top,left, direction : jalali ? 'rtl' : 'ltr'}}>
                 
                        {!double && <div className="r-rangeCalendar"><Calendar id="1" /></div>}

                        {double &&  <div className="r-rangeCalendar"><Calendar id="1" /><Calendar id="2" /></div>}

                        <button  style={{margin:'0 8px'}} className={`r-button r-ripple r-xs r-default  r-rounded r-nospace`} type="button" onClick={toggleCalendar}>
                           

                        {!double && <svg viewBox="0 0 24 24">
                            <path fill="currentColor" d="M21 17V8H7V17H21M21 3C22.1 3 23 3.9 23 5V17C23 18.1 22.1 19 21 19H7C5.89 19 5 18.1 5 17V5C5 3.9 5.9 3 7 3H8V1H10V3H18V1H20V3H21M3 21H17V23H3C1.89 23 1 22.1 1 21V9H3V21Z" />
                        </svg>}

                        {double && <svg  viewBox="0 0 24 24">
                            <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1" />
                        </svg>}
                        
                            
                         </button>

                         <button onClick={this.approve} style={{margin:'0 8px'}} className={`r-button r-ripple r-xs r-default  r-rounded r-nospace`} type="button" >
                            <svg  viewBox="0 0 24 24">
                                <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                            </svg>
                         </button>
                    </div>}
                </div>
           
        )
    }
}

DatePicker.defaultProps ={
    jalali : false,
    monthOnly: false
}

export default DatePicker