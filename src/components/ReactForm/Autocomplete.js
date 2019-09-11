import React, {Component} from 'react';
import {getValueByProp, createIcon, getValueById} from './functions';
import icons from './icons';
import './ReactForm.css';
import $ from 'jquery';

class Autcomplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open : false,
            searchValue : this.props.defaultValue.value || '',
            values : [],
            selectedItem : null
        }
    }

    componentDidMount(){
        $(document).click((e) => {
            var len = $(e.target).closest('.rf-autocomplete').length
            if(len === 0 && this.state.open === true){
               this.setState({open : false})
            }
        })
    }

    renderOptions (){
        const {mapping} = this.props;
        const {values} = this.state;
        var options;

        if (values.length === 0) {
            options = (<div className="rf-options-item">Not Found</div>)
        }
        else {
            options = values.map((o, i) => {
                return (
                    <div key={i} className="rf-options-item" onClick={this.select.bind(this,o)}>
                        {mapping.icon && 
                            <span className="rf-option-icon">
                                {createIcon(getValueByProp(o, mapping.icon))}
                            </span> 
                        }
                        {getValueByProp(o, mapping.text)}
                    </div>
                )
            })
        }
        
        return <div className="rf-options">{options}</div>
    }

    select (item){
        const { mapping} = this.props;
        this.setState({searchValue:item[mapping.value]})
        this.setState({selectedItem:item})
        this.setState({open:false})
    }
    open (e){        
        const len = $(e.target).closest('.rf-options').length;
        if (len === 0) {
            this.setState({open : true})
        }
    }

    search (e){
        const {values, mapping, disabled} = this.props;
        if (disabled) return;

       // handle change
       this.setState({searchValue : e.target.value});

       //Close 
        if(e.target.value.length === 0) {
            this.setState({open : false})
            return;
        }

        //Search
        const target = e.target.value.toLowerCase();
        const foundValues = values.filter(o => {
            return o[mapping.text].toLowerCase().indexOf(target)!== -1
        })

        this.setState({values : foundValues});

        //Open
        this.open(e)
    }

    render (){
        const {label, mapping, rtl, disabled, outline, defaultValue} = this.props;
        const {open, searchValue, selectedItem} = this.state;

        const activeClass = open ? ' active' : '';
        const hasIconClass =  mapping.icon ? ' rf-has-icon' : '';
        const rtlClass = rtl ? ' rf-rtl' : '';
        const outlineClass = outline ? ' rf-bordered' :''; 
        const disabledClass = disabled ? ' rf-disabled' :''; 

        
        
        return (
            <div className={`rf-autocomplete${activeClass}${hasIconClass}${rtlClass}${outlineClass}${disabledClass}`}>
            <input type="text" className="filled" value={searchValue}  onChange={this.search.bind(this)}/>
            <label>{label}</label>
            <span className="rf-line"></span>
            
            {mapping.icon && defaultValue.icon && selectedItem ===null &&
                <span className="rf-input-icon">{createIcon(defaultValue.icon)}</span>
            }
            {mapping.icon && selectedItem !==null &&
                <span className="rf-input-icon">{createIcon(getValueByProp(selectedItem, mapping.icon))}</span>
            }
            {this.open && this.renderOptions()}

        </div>
        )
    }
}

Autcomplete.defaultProps = {
    rtl : false,
    outline : false,
    disabled : false,
}

export default Autcomplete