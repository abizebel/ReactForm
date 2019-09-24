import React, {Component} from 'react';

import {getValueByProp, createIcon} from './functions';
import icons from './icons';
import './ReactForm.css';
import $ from 'jquery';

class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open : false,
            selectedItem : this.getSelectedItem (this.props.defaultValue),
            listValues : this.createList (this.props.values),
        }
    }
    componentDidMount(){
        $(document).click((e) => {
            var len = $(e.target).closest('.r-select').length
            if(len === 0 && this.state.open === true){
               this.setState({open : false})
            }
        })
    }


    /**
     * Create list for select options
     */
    createList (values){
        const {nullable, mapping} = this.props;
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

    /**
     * 
     * @param {Number || String} id 
     * @description Find selected value by id
     */
    getSelectedItem (id){
        const {values, mapping} = this.props;

        const selectedItem = values.filter(o => {
            return String(o[mapping.value]) ===  String(id)
        })[0];

        return selectedItem;
    }
    
  

    /**
     * Open popup
     * 
     * @param {Event} e 
     */
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

        this.setState({selectedItem})
        this.setState({open:false});

        const text = selectedItem[mapping.text];
        const value = selectedItem[mapping.value];
        /**
         * If user had selected no item send Null otherwise send selected object
         * Null item is {text : 'No Selected', value : -1}
         */
        let changedItem = value === -1 ? null : {text , value }

        change(changedItem)
    }

    /**
     * Render select options
     */
    renderOptions (){
        const {mapping, search ,showKey} = this.props;
        const {listValues , selectedItem } = this.state;
        let options;

        //If options list is empty show "Not Found"
        if (listValues.length === 0) {
            options = (<div className="r-options-item">Not Found</div>)
        }
        else {
            options = listValues.map((o, i) => {
                const selectedClass = (o[mapping.value] === selectedItem[mapping.value]) ? ' selected' : '';
                return (
                    <div key={i} className={`r-options-item${selectedClass}`} onClick={this.select.bind(this,o)}>
                        {mapping.icon && 
                            <span className="r-option-icon">
                                {createIcon(getValueByProp(o, mapping.icon))}
                            </span> 
                        }
                        {this.getItemText(o, '-')}
                    </div>
                )
            })
        }
        
        return (
             <div className="r-options">{search && this.renderSearch()}{options}</div>
        )
        
    }

    /**
     * Search in select options
     * 
     * @param {Event} e 
     */
    search (e){
        const {values, mapping} = this.props;

        //Reset list if input hasnt value
        if(e.target.value.length === 0) {
            this.setState({listValues : this.createList(values)})
        }

        //Search
        const target = e.target.value.toLowerCase();
        const foundValues = values.filter(o => {
            return o[mapping.text].toLowerCase().indexOf(target)!== -1
        });

        this.setState({listValues : this.createList(foundValues)})
    }

    /**
     * Render options search  
     */
    renderSearch (){
        const {searchLabel, rtl} = this.props;
        const searchLableText = searchLabel ? searchLabel : (rtl ? 'جستجو ...' : 'Search ...')

        return (
            <div className="r-options-search">
                <input onChange={this.search.bind(this)} placeholder={searchLableText} type="text" />
            </div>
        )
    }

    /**
     * Get input value 
     * 
     * @param {String} seperator is between key and text
     */
    getItemText (item, seperator = ""){
        const {mapping, showKey, nullable} = this.props;

        const text = item[mapping.text];
        const value = item[mapping.value];

        /**
         * Null item should not show key
         * Null item is {text : 'No Selected', value : -1}
         */
        const key = (showKey && value !== -1) ? `${value} ${seperator}`  : '' ;
        const inputValue = `${key} ${text}`;

        return inputValue;
    }

    render (){
        const { label, mapping, rtl, disabled, outline, showKey} = this.props;
        const {open, selectedItem} = this.state;

        const activeClass = open ? ' active' : '';
        const hasIconClass =  mapping.icon ? ' r-has-icon' : '';
        const rtlClass = rtl ? ' r-rtl' : '';
        const outlineClass = outline ? ' r-bordered' :''; 
        const disabledClass = disabled ? ' r-disabled' :''; 
        const inputValue = this.getItemText(selectedItem);
        
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
                {mapping.icon && <span className="r-input-icon">{getValueByProp(selectedItem, mapping.icon)}</span>}
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