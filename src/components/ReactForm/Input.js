import React, {Component, Fragment} from 'react';
import {createIcon} from './functions';
import icons from './icons';
import './ReactForm.css';

class Input extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value : this.props.value || ''

        }
    }

    handleChange (e){
        const {change} = this.props;

        this.setState({value : e.target.value});
        change(e.target.value)
    }

    render (){
        const {rtl, outline, label, disabled, error, multiline, success, icon} = this.props;
        const {value} = this.state;
        const filledClass = value.length > 0 ? ' filled' :''; 
        const rtlClass = rtl ? ' r-rtl' :''; 
        const outlineClass = outline ? ' r-bordered' :''; 
        const disabledClass = disabled ? ' r-disabled' :''; 
        const errorClass = error.length > 0 ? ' r-error' :''; 
        const sucessClass = success ? ' r-success' :''; 
        const iconClass = icon !==null ? ' r-has-icon' :''; 
        const inputIcon = createIcon(icon);

        return (
            <div className={`r-input${filledClass}${rtlClass}${outlineClass}${disabledClass}${errorClass}${sucessClass}${iconClass}`} >  
                
                {   multiline ? 
                    <textarea 
                        type="text" 
                        value={value}
                        onChange={this.handleChange.bind(this)}
                        disabled = {disabled}
                    > </textarea>:
                    <input 
                        type="text" 
                        value={value}
                        onChange={this.handleChange.bind(this)}
                        disabled = {disabled}
                    />
                }
                
                <label>{label}</label>
                <span className="r-line"></span>

                {   icon !==null &&
                    <span className="r-input-icon">{inputIcon}</span>
                }
                
                 
                {error.length > 0 &&
                    <Fragment>
                        <span className="r-icon">{icons.error}</span>  
                        <span className="r-message">{error}</span> 
                    </Fragment>     
                }

                {success > 0 &&
                    <span className="r-icon">{icons.success}</span>  
                }
                
                
            </div>
        )
    }

}

Input.defaultProps = {
    label : 'not set',
    rtl : false,
    outline : false,
    disabled : false,
    error : '',
    multiline: false,
    success : false,
    icon : null
}

export default Input