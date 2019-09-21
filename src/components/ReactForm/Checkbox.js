import React, {Component, createRef} from 'react';
import $ from 'jquery';

class Checkbox extends Component {
    constructor(props){
        super(props);
        this.inputDom = createRef();
    }

    handleChange (e){
        const {change} = this.props;
            
        change(e.target.checked)
    }
    render (){

        const {disabled, rtl, label, size} = this.props;
        const rtlClass = rtl ? ' r-rtl' : '';
        const disabledClass = disabled ? ' r-disabled' :''; 
        const sizeClass = size === 'xs' ? ' r-xs' : size === 'lg'? ' r-lg' : '';

        return (
            <div className={`r-checkbox${rtlClass}${disabledClass}${sizeClass}`}>
                <label>
                    <input disabled={disabled} ref={this.inputDom} onChange={this.handleChange.bind(this)} type="checkbox" />
                    <span className="r-checkbox-fake">    
                        <span className="check"></span>
                    </span> 
                    <span className="r-checkbox-text">{label}</span>
                </label>
            </div>
        )

    }
}

Checkbox.defaultProps = {
    rtl : false,
    disabled : false,
}

export default Checkbox