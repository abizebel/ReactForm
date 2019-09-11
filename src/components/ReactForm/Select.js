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
            values : this.props.values,
        }
    }

    componentDidMount(){
        $(document).click((e) => {
            var len = $(e.target).closest('.rf-select').length
            if(len === 0 && this.state.open === true){
               this.setState({open : false})
            }
        })
    }

    open (e){
        const {disabled} = this.props;
        if (disabled) return;
        
        const len = $(e.target).closest('.rf-options').length;
        if (len === 0) {
            this.setState((prevState) => {
                return { open : !prevState.open}
            })
        }
    }

    select (selectedItem){
        const {change, mapping} = this.props;

        this.setState({selectedValue:selectedItem[mapping.value]})
        this.setState({open:false});

        change({
            text : selectedItem[mapping.text],
            value : selectedItem[mapping.value],
        })
    }

    renderOptions (){
        const {mapping, search ,showKey} = this.props;
        const {values , selectedValue } = this.state;
        
        const options = values.map((o, i) => {
            const selectedClass = (o[mapping.value] == selectedValue) ? ' selected' : '';
            return (
                <div key={i} className={`rf-options-item${selectedClass}`} onClick={this.select.bind(this,o)}>
                    {mapping.icon && 
                        <span className="rf-option-icon">
                            {createIcon(getValueByProp(o, mapping.icon))}
                        </span> 
                    }
                    {showKey && `${getValueByProp(o, mapping.value)} - ` }
                    {getValueByProp(o, mapping.text)}
                </div>
            )
        })

        return <div className="rf-options">{search && this.renderSearch()}{options}</div>
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
            <div className="rf-options-search">
                <input onChange={this.search.bind(this)} placeholder={searchLableText} type="text" />
            </div>
        )
    }

    render (){
        const {values, label, mapping, rtl, disabled, outline, showKey} = this.props;
        const {open, selectedValue} = this.state;

        const activeClass = open ? ' active' : '';
        const hasIconClass =  mapping.icon ? ' rf-has-icon' : '';
        const rtlClass = rtl ? ' rf-rtl' : '';
        const outlineClass = outline ? ' rf-bordered' :''; 
        const disabledClass = disabled ? ' rf-disabled' :''; 
        const selectedItem = getValueById(values, selectedValue, mapping.value);
        const inputValue = `${showKey ? selectedItem[mapping.value]:''}   ${selectedItem[mapping.text]}`

        return (
            <div className={`rf-select${activeClass}${hasIconClass}${rtlClass}${outlineClass}${disabledClass}`}>
            <input type="text" className="filled" onChange={()=>{}} value={inputValue}  onClick={this.open.bind(this)}/>
            <label>{label}</label>
            <span className="rf-line"></span>
            {mapping.icon &&
                <span className="rf-input-icon">{getValueByProp(selectedItem, mapping.icon)}</span>
            }
            <span className="rf-icon">{icons.down}</span>
            {this.open && this.renderOptions()}

        </div>
        )
    }
}

Select.defaultProps = {
    rtl : false,
    outline : false,
    disabled : false,
}

export default Select