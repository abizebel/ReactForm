import React, {Component} from 'react';
import Calendar from '../Calendar/Calendar';
import icons from '../icons';
import '../ReactForm.css';
import './Datepicker.css';


class Datepicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            show : false,
            inputValue : this.props.defaultValue || '',
        }
    }

    /**
     * Open autocomplete
     * 
     * @param {Event} e 
     */
    open (e){        
        this.setState({open : true})
    }

    /**
     * Close autocomplete
     * 
     * @param {Event} e 
     */
    close (e){ 
        setTimeout(()=>{
            this.setState({open : false})
        },500)       
    }
    inputChange (e){
        let value = e.target.value;
        
        this.setState({inputValue : value});
    }

    handleChange (value){
        const {change} = this.props;

        this.setState({inputValue : value})
        change(value)
    }

    render (){
        const {jalali, disabled, outline, label} = this.props;
        const {open, inputValue} = this.state;

        const filledClass = String(inputValue).length > 0 || disabled ? ' filled' :''; 
        const rtlClass = jalali ? ' r-rtl' : ''; 
        const outlineClass = outline ? ' r-bordered' :''; 
        const disabledClass = disabled ? ' r-disabled' :''; 
        return (
            <div className={`r-datepicker r-input${filledClass}${rtlClass}${outlineClass}${disabledClass}`}>
                <input 
                onBlur={this.close.bind(this)}
                onFocus={this.open.bind(this)}
                disabled={false} 
                type="text" 
                onChange={this.inputChange.bind(this)}
                className="filled" 
                value={inputValue}  
                />
                <label>{'adadsad'}</label>
            
                <span className="r-icon">{icons.calendar}</span>
                {open && <Calendar change={this.handleChange.bind(this)} jalali={jalali} />}
            </div>
        )
    }
}

Datepicker.defaultProps = {
    disbaled : false,
    jalali : false,
}

export default Datepicker