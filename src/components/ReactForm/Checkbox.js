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

        const {disabled, rtl, label} = this.props;
        const rtlClass = rtl ? ' rf-rtl' : '';
        const disabledClass = disabled ? ' rf-disabled' :''; 

        return (
            <div className={`rf-checkbox${rtlClass}${disabledClass}`}>
                <label>
                    <input disabled={disabled} ref={this.inputDom} onChange={this.handleChange.bind(this)} type="checkbox" />
                    <span className="checkbox-material">    
                        <span className="check"></span>
                    </span> 
                    <span className="checkbox-text">{label}</span>
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