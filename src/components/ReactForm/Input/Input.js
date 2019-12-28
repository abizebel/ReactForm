import React, {Component, Fragment, createRef} from 'react';
import {createIcon, mapObjectToClassName} from '../functions';
import icons from '../icons';
import $ from 'jquery';
import './Input.scss';


class Input extends Component {
    constructor (props) {
        super(props);
        this.textareaDom = createRef();
        let  {value = ''} = this.props;
        this.state = {
            initialValue  : value,
            value,
            validate : this.validate.bind(this),
            hasError : this.validate(this.props.value).hasError,
            errorMessage : this.validate(this.props.value).errorMessage
        }
 
    }

    static getDerivedStateFromProps (props, state) {
        if (props.value !== state.initialValue){
            let  {value = ''} = props;
            return {
                value ,
                initialValue : value,
                hasError : state.validate(props.value).hasError,
                errorMessage : state.validate(props.value).errorMessage
            }
        }

        return null;
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

    /**
     * Handle input changes
     * 
     * @param {Event} e 
     */
    handleChange (e){
        const {change} = this.props;
        let value = e.target.value;
        
        this.setState({value});

        this.validate(value)

        change(value)
    }

    /**
     * Check if input has error or not depends on our configs
     * 
     */
    validate (value = ''){
        const {serverError, required, regex} = this.props;
        let hasError = false;
        let errorMessage = '';

        if(!this.isValidationMode()) return {hasError,errorMessage} ;
       
        if(serverError && serverError.status) {
            hasError = true;
            errorMessage = serverError.message;
        }
        else if(!serverError && required && value.trim() === ''){
            hasError = true;
            errorMessage = required;
        }
        else if (!serverError && regex) {
            hasError = !regex.pattern.test(value);
            errorMessage = regex.message;     
        }
 
        this.setState({hasError, errorMessage});
        return {hasError, errorMessage}
    }

    /**
     * Detect validation mode
     */
    isValidationMode (){
        const {required, serverError, regex} = this.props;

        const validationMode = required || serverError || regex ? true : false;
        return validationMode;
    }


    /**
     * Get style
     */
    getInputClass (){
        const {rtl, outline, disabled, icon, className, border} = this.props;
        const {value, hasError} = this.state;
        const validationMode = this.isValidationMode ();
      
        let names =  {
            [className] : className ? true : false,
            'r-noborder' : !border,
            'filled' :String(value).length > 0 || disabled, 
            'r-input' : true,
            'r-rtl': rtl,
            'r-bordered': outline,
            'r-disabled' : disabled,
            'r-has-icon' : icon !== null,
            'r-error' :  validationMode && hasError,
            'r-success' : validationMode && !hasError,
        }

        return mapObjectToClassName(names)
    }

    render (){
        const { label, disabled, multiline, icon, onFocus, onBlur, autoFocus, onKeyUp, style} = this.props;
        const {value, hasError, errorMessage} = this.state;
        const inputIcon = createIcon(icon);
        const validationMode = this.isValidationMode ();
      
        return (
            <div style={style} className={this.getInputClass()} >  
                
                {   multiline ? 
                    <textarea 
                        onKeyUp={onKeyUp}
                        autoFocus={autoFocus}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        data-autoresize
                        ref={this.textareaDom}
                        type="text" 
                        value={value}
                        onChange={this.handleChange.bind(this)}
                        disabled = {disabled}
                    ></textarea>:
                    <input 
                        onKeyUp={onKeyUp}
                        autoFocus={autoFocus}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        type="text" 
                        value={value}
                        onChange={this.handleChange.bind(this)}
                        disabled = {disabled}
                    />
                }
                
                {label && <label>{label}</label>}

                {   icon !== null &&
                    <span className="r-input-icon">{inputIcon}</span>
                }
                 
                {   validationMode && hasError &&
                    <Fragment>
                        <span className="r-icon">{icons.error}</span>  
                        <span className="r-message">{errorMessage}</span> 
                    </Fragment>     
                }

                {   validationMode && !hasError &&
                    <span className="r-icon">{icons.success}</span>  
                }
                
                
            </div>
        )
    }

}

Input.defaultProps = {
    autoFocus : false,
    rtl : false,
    outline : false,
    disabled : false,
    multiline: false,
    icon : null,
    style : {},
    className : '',
    border : true,
}

export default Input
