import React, {Component, Fragment, createRef} from 'react';
import {createIcon} from './functions';
import icons from './icons';
import './ReactForm.css';
import $ from 'jquery';



class Input extends Component {
    constructor (props) {
        super(props);
        this.textareaDom = createRef();

        this.state = {
            value : this.props.value || '',
            isValid : true
        }
    }

    componentDidMount(){
        $.each($('textarea[data-autoresize]'), function() {
            var offset = this.offsetHeight - this.clientHeight;
           
            var resizeTextarea = function(el) {
                $(el).css('height', 'auto').css('height', el.scrollHeight + offset);
            };
            $(this).on('keyup input', function() { resizeTextarea(this); }).removeAttr('data-autoresize');
          });
    }

    handleChange (e){
        const {change, required} = this.props;
        let value = e.target.value;

        if (required ){
            this.setState({isValid : value.trim() !== ''});
        }

        this.setState({value});
        change(value)
    }

    /**
     * Autoresize textarea when typing
     * 
     * @param {Event} e 
     */
    autoResize = e =>{
        const offset = $(e.target).offsetHeight - $(e.target).clientHeight;
        const scrollHeight = $(e.target).scrollHeight
        $(e.target).css('height' ,'auto').height(scrollHeight + offset)
    }

    render (){
        const {rtl, outline, label, disabled, error, multiline, success, icon, required, requiredMessage} = this.props;
        const {value, isValid} = this.state;
        const filledClass = value.length > 0 ? ' filled' :''; 
        const rtlClass = rtl ? ' r-rtl' : ''; 
        const outlineClass = outline ? ' r-bordered' :''; 
        const disabledClass = disabled ? ' r-disabled' :''; 
        const errorClass = !isValid ? ' r-error' :''; 
        const sucessClass = isValid ? ' r-success' :''; 
        const iconClass = icon !== null ? ' r-has-icon' :''; 
        const inputIcon = createIcon(icon);
        const errorMessage = requiredMessage;


        return (
            <div className={`r-input${filledClass}${rtlClass}${outlineClass}${disabledClass}${errorClass}${sucessClass}${iconClass}`} >  
                
                {   multiline ? 
                    <textarea 
                        data-autoresize
                        ref={this.textareaDom}
                        //onKeyDown={this.autoResize}
                        type="text" 
                        value={value}
                        onChange={this.handleChange.bind(this)}
                        disabled = {disabled}
                    ></textarea>:
                    <input 
                        type="text" 
                        value={value}
                        onChange={this.handleChange.bind(this)}
                        disabled = {disabled}
                    />
                }
                
                <label>{label}</label>
                <span className="r-line"></span>

                {   icon !== null &&
                    <span className="r-input-icon">{inputIcon}</span>
                }
                 
                {   !isValid && required &&
                    <Fragment>
                        <span className="r-icon">{icons.error}</span>  
                        <span className="r-message">{errorMessage}</span> 
                    </Fragment>     
                }

                {   isValid && required &&
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
    icon : null,
    required : false,
}

export default Input