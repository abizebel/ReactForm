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
        }
        
 
    }

    static getDerivedStateFromProps (props, state) {
        if (props.value !== state.initialValue){
            let  {value = ''} = props;
            return {
                value ,
                initialValue : value,

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
        
        this.setState( {value})
       

        change(value)
    }



    /**
     * Get style
     */
    getInputClass (){
        const {rtl, outline, disabled, icon, className,required} = this.props;
        const {value} = this.state;
        let names =  {
            [className] : className ? true : false,
            'filled' :String(value).length > 0 || disabled, 
            'r-input' : true,
            'r-rtl': rtl,
            'r-bordered': outline,
            'r-disabled' : disabled,
            'r-has-icon' : icon !== null,
            'r-error' : (!value || value.trim() === '') && required
        }

        return mapObjectToClassName(names)
    }

    render (){
        const { label, disabled, multiline, icon, onFocus, onBlur, autoFocus, onKeyUp, style,required} = this.props;
        const {value} = this.state;


        
        const inputIcon = createIcon(icon);
      
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
                 
                {   (!value || value.trim() === '') && required &&
                    <Fragment>
                        <span className="r-icon">{icons.error}</span>  
                        <span className="r-message">وارد کردن این فیلد ضروری میباشد</span> 
                    </Fragment>     
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
    required : true
}

export default Input
