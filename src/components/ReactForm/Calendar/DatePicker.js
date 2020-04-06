import React, {Component,Fragment} from 'react';
import BaseCalendar from './BaseCalendar'
import {persianNumber,mapPersianMonths } from './functions';


class DatePicker extends Component {
    constructor (props){
        super(props);

        this.state = {
            isDouble : false,
            startDate : null,
            endDate : null,
            open : false

        }
    }


    toggleCalendar = () => {
        this.setState({ isDouble : !this.state.isDouble })
    }
    getWidth = () =>{
        const {isDouble } = this.state;
        return isDouble ? 610 : 310
    }

    toggle = () => {
        this.setState({open:!this.state.open})
    }


    renderSelected = () => {
        const {isDouble, startDate, endDate } = this.state;
        const {jalali} = this.props;

        
        if (isDouble)   {
            if (!startDate || !endDate) return 'Not Selected';
            return (
                <Fragment>
                    <div className="r-selected-item">
                        <span>{jalali ?  mapPersianMonths(persianNumber(startDate.locale('fa').format('jMMMM'))) :   startDate.locale('en').format('MMMM')}</span>
                        <span>{jalali ? persianNumber(startDate.locale('fa').format('jYYYY')):   startDate.locale('en').format('YYYY') }</span>
                    </div>
                    <div className="r-selected-item" style={{width:10}}>
                        <span style={{opacity:0}}>-</span>
                        <span>-</span>
                    </div>
                    <div className="r-selected-item">
                        <span>{jalali ?  mapPersianMonths(persianNumber(endDate.locale('fa').format('jMMMM'))) :   endDate.locale('en').format('MMMM')}</span>
                        <span>{jalali ? persianNumber(endDate.locale('fa').format('jYYYY')):   endDate.locale('en').format('YYYY') }</span>
                    </div>
                </Fragment>
            )
        }      
        else {
            if (!startDate) return 'Not Selected';
            return (
                <div className="r-selected-item">
                    <span>{jalali ?  mapPersianMonths(persianNumber(startDate.locale('fa').format('jMMMM'))) :   startDate.locale('en').format('MMMM')}</span>
                    <span>{jalali ? persianNumber(startDate.locale('fa').format('jYYYY')):   startDate.locale('en').format('YYYY') }</span>
                </div>
            )
        }           
    }
    render (){
        const {jalali, change, monthOnly} = this.props;
        const {isDouble } = this.state;
        
        
        return (
           <div className="r-datepicker">

               <div className="r-datepicker-header" onClick={this.toggle}>
                    <button type="button" className="r-ripple">
                        <svg viewBox="0 0 24 24">
                            <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
                        </svg>
                    </button>
                    
                    <div class="r-datepicker-selected"> 
                        {this.renderSelected()}
                        
                    </div>

                    <button  type="button" class="r-ripple">
                        <svg viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                        </svg>
                    </button>
               </div>
              
                    {this.state.open && <div className="r-datepicker-content" style={{width:this.getWidth()}}>
                        {!isDouble &&<BaseCalendar
                            monthOnly={monthOnly}
                            jalali={jalali} 
                            range={false} 
                            double={false} 
                            change={val => {
                                this.setState({startDate : val.d})
                                change(val)
                            }}
                        />}

                        {isDouble && <BaseCalendar
                            monthOnly={monthOnly}
                            jalali={jalali} 
                            range={true} 
                            double={true} 
                            change={val => {
                                this.setState({startDate : val.startD})
                                this.setState({endDate : val.endD})
                                change(val);
                            }}
                        />}

                        <button  style={{margin:'0 8px'}} className={`r-button r-ripple r-xs ${isDouble ? 'r-info' : `r-default `} r-rounded r-nospace`} type="button" onClick={this.toggleCalendar}>
                            انتخاب دوره ای 
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