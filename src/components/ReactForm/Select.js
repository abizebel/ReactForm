import React, {Component} from 'react';

import {getValueByProp, createIcon, getValueById} from './functions';
import icons from './icons';
import './ReactForm.css';
import $ from 'jquery';

class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open : false,
            selectedValue : this.props.defaultValue,
            values : this.createList(),
        }
    }

    /**
     * Create list for select options
     */
    createList (){
        const {nullable, values, mapping} = this.props;
        let listValues = values.slice();
        
        //If nullable add a fake object 
        if (nullable) {
            listValues.unshift({
                [mapping.text] : 'No Selected',
                [mapping.value] : -1
            })
        }
        return listValues
    }
    componentDidMount(){
        $(document).click((e) => {
            var len = $(e.target).closest('.r-select').length
            if(len === 0 && this.state.open === true){
               this.setState({open : false})
            }
        })
    }

    open (e){
        const {disabled} = this.props;
        if (disabled) return;
        
        const len = $(e.target).closest('.r-options').length;
        if (len === 0) {
            this.setState((prevState) => {
                return { open : !prevState.open}
            })
        }
    }

    /**
     * 
     * @param {Object} selectedItem 
     * @description Select a item that user clicked on it 
     */
    select (selectedItem){
        const {change, mapping} = this.props;

        this.setState({selectedValue:selectedItem[mapping.value]})
        this.setState({open:false});

        let text = selectedItem[mapping.text];
        let value = selectedItem[mapping.value];
        let changedItem = selectedItem[mapping.value] === -1 ? null : {text , value }

        change(changedItem)
    }

    renderOptions (){
        const {mapping, search ,showKey} = this.props;
        const {values , selectedValue } = this.state;
        
        const options = values.map((o, i) => {
            const selectedClass = (o[mapping.value] === selectedValue) ? ' selected' : '';
            return (
                <div key={i} className={`r-options-item${selectedClass}`} onClick={this.select.bind(this,o)}>
                    {mapping.icon && 
                        <span className="r-option-icon">
                            {createIcon(getValueByProp(o, mapping.icon))}
                        </span> 
                    }
                    {showKey && `${getValueByProp(o, mapping.value)} - ` }
                    {getValueByProp(o, mapping.text)}
                </div>
            )
        })

        return (

             <div className="r-options">{search && this.renderSearch()}{options}</div>
        )
        
        
      
    }

    search (e){
        const {values, mapping} = this.props;

        //Reset list if input hasnt value
        if(e.target.value.length === 0) {
            this.setState({values})
        }

        //Search
        const target = e.target.value.toLowerCase();
        const foundValues = values.filter(o => {
            return o[mapping.text].toLowerCase().indexOf(target)!== -1
        })
        
        this.setState({values : foundValues})
    }

    renderSearch (){
        const {searchLabel, rtl} = this.props;
        const searchLableText = searchLabel ? searchLabel : (rtl ? 'جستجو ...' : 'Search ...')

        return (
            <div className="r-options-search">
                <input onChange={this.search.bind(this)} placeholder={searchLableText} type="text" />
            </div>
        )
    }

    render (){
        const { label, mapping, rtl, disabled, outline, showKey} = this.props;
        const {open, values,  selectedValue} = this.state;

        const activeClass = open ? ' active' : '';
        const hasIconClass =  mapping.icon ? ' r-has-icon' : '';
        const rtlClass = rtl ? ' r-rtl' : '';
        const outlineClass = outline ? ' r-bordered' :''; 
        const disabledClass = disabled ? ' r-disabled' :''; 
        const selectedItem = getValueById(values, selectedValue, mapping.value);
        const inputValue = `${showKey ? selectedItem[mapping.value]:''}   ${selectedItem[mapping.text]}`

        return (
            <div onClick={this.open.bind(this)} className={`r-select r-noselect r-input filled${activeClass}${hasIconClass}${rtlClass}${outlineClass}${disabledClass}`}>
            <input 
                disabled={disabled} 
                type="text" 
                onChange={()=>{}} 
                value={inputValue.trim()} 
                
             />
            <label>{label}</label>
            <span className="r-line"></span>
            {mapping.icon &&
                <span className="r-input-icon">{getValueByProp(selectedItem, mapping.icon)}</span>
            }
            <span className="r-icon">{icons.down}</span>
            {this.open && this.renderOptions()}

        </div>
        )
    }
}

Select.defaultProps = {
    rtl : false,
    outline : false,
    disabled : false,
    nullable : false,
}

export default Select