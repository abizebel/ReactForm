import React, {Component} from 'react';
import $ from 'jquery';
import Checkbox from './Checkbox';
import {getValueByProp, createIcon, createUID} from './functions';
import icons from './icons';
import './ReactForm.css';

class Select extends Component {
    constructor(props) {
        super(props);

        const {values , defaultValue} = this.props;
        //Our method always get array and when user send "String" should be convert to array
        this.selectedIds = typeof defaultValue === 'number' ?  [defaultValue] : defaultValue;
        this.values =  this.createList (values);
        
        this.state = {
            open : false,
            selectedItems : this.getSelectedItems (this.selectedIds),
            listValues :  this.values,
            uid : createUID(),
        }
    }

    componentDidMount(){
        const {uid} = this.state;

        $(document).click((e) => {
            let selectElement = $(e.target).closest('.r-select');

            /* *
             * When one dropdown is opened close another
             */

            if (selectElement.attr('data-id') !== uid) {
                this.setState({open : false})
            }

            /**
             * If select was open and clicked outside of it close it
             * length == 0 means that user clicked outside of select
             */
            if(selectElement.length === 0 && this.state.open === true){
               this.setState({open : false})
            }
        })
    }

    addSelectedProp (values){
        const {mapping, multi} = this.props;

        values.forEach(o =>{
            o.selected = false;
            if(multi && this.selectedIds.indexOf(Number(o[mapping.value])) !==-1){
                o.selected = true
            }
        });
    }

    /**
     * Create list for select options
     */
    createList (values){
        const {nullable, mapping,notSelectedText, rtl,multi} = this.props;
        let listValues = [...values];
        
        this.addSelectedProp(listValues)
        
        //If nullable add a fake object 
        if (nullable) {
            const notSelected = notSelectedText ? notSelectedText : (rtl ? 'انتخاب شده' : 'No Selected');

            listValues.unshift({
                [mapping.text] : notSelected,
                [mapping.value] : -99,
            })
        }

        return listValues;
    }

    /**
     * 
     * @param {Number} id 
     * @description Find selected value by id for single select
     */
    getSelectedItems (id){
        const {mapping} = this.props;

        const selectedItems = this.values.filter(o => {
            return id.indexOf(Number(o[mapping.value])) !== -1

        });

        return selectedItems;
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
            });
        }
    }

    /**
     * Preventing add duplicate item to selected list
     * 
     * @param {Object} item
     * @returns {Boolean}
     */
    isExist (item){
        const {mapping} = this.props;
        const {selectedItems} = this.state;

        for (var i=0 ; i< selectedItems.length ; i++) {
            if(selectedItems[i][mapping.value] === item[mapping.value]) {
                return true;
            }
        }

        return false;
    }

    /**
     * Find item index in selected list
     * 
     * @param {Object} item
     * @returns {Boolean}
     */
    findItemIndex (item){
        const {mapping} = this.props;
        const {selectedItems} = this.state;

        for (var i=0 ; i< selectedItems.length ; i++) {
            if(selectedItems[i][mapping.value] === item[mapping.value]) {
                return i;
            }
        }

    }

    toggleSelect (item){
        const {change} = this.props;
        
        this.setState(prevState => {
            
            if(this.isExist(item)) {
                const itemIndex = this.findItemIndex(item);
                prevState.selectedItems.splice(itemIndex, 1 )
            }
            else {
                prevState.selectedItems.push(item);
            }
            
            return {
                selectedItems : prevState.selectedItems
            }
        });

        change(this.state.selectedItems)
    }


    toggleOptions (index){
        this.setState(prevState => {

            prevState.listValues[index].selected = !prevState.listValues[index].selected;
            return {
                listValues : prevState.listValues
            }
        })
    }

    deselectOptions (){
        this.setState(prevState => {
            prevState.listValues.forEach(o => (o.selected = false))
            return {
                listValues : prevState.listValues
            }
        })
    }
    /**
     * 
     * @param {Object} item 
     * @description Select a item that user clicked on it 
     */
    select (item, index){
        const {change, mapping, multi} = this.props;

        /**
         * If user had selected "no item" send Null otherwise send selected object
         * Null item is {text : 'No Selected', value : -99}
         */
        if (item[mapping.value] === -99) {
            this.deselectOptions()
            this.setState({selectedItems : []});
            this.setState({open:false});
            change(null);
            return;
        }
        
        if (multi){
            this.toggleOptions(index);
            this.toggleSelect(item) ;
        }
        else {
            this.setState({selectedItems : [item]})
            this.setState({open:false});
            change(item);
            
        }
 
    }

    /**
     * Render select options
     */
    renderOptions (){
        const {mapping, search ,notFoundMessage, rtl, multi} = this.props;
        const {listValues , selectedItems } = this.state;
        let options;

        //If options list is empty show "Not Found"
        if (listValues.length === 0) {
            const notFoundText = notFoundMessage ? notFoundMessage : (rtl ? 'یافت نشد' : 'Not Found');
            options = (<div className="r-options-item">{notFoundText}</div>)
        }
        else {
            options = listValues.map((o, i) => {
                const selectedClass = (selectedItems && o[mapping.value] === selectedItems[mapping.value]) ? ' selected' : '';
                return (
                    <div key={i} className={`r-options-item${selectedClass}`} onClick={this.select.bind(this,o,i)}>
                        {mapping.icon && 
                            <span className="r-option-icon">
                                {createIcon(getValueByProp(o, mapping.icon))}
                            </span> 
                        }
                        {multi && o[mapping.value] !==-99 &&
                            <Checkbox 
                                justViewMode={true} 
                                size={'xs'} 
                                nospace={true} 
                                rtl={rtl} 
                                defaultValue={o.selected}
                            />
                        }
                        {this.getItemText(o, '-')}
                    </div>
                )
            })
        }
        
        return (
            <div className="r-options">
                {search && this.renderSearch()}
                <div className="r-options-items">{options}</div>
            </div>
        )
        
    }

    /**
     * Search in select options
     * 
     * @param {Event} e 
     */
    search (e){
        const {mapping} = this.props;

        //Reset list if input hasnt value
        if(e.target.value.length === 0) {
            this.setState({listValues :this.values})
        }

        //Search
        const target = e.target.value.toLowerCase();
        const foundValues = this.values.filter(o => {
            return o[mapping.text].toLowerCase().indexOf(target)!== -1
        });

        this.setState({listValues : foundValues})
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
     * Get list item value
     * 
     * @param {Object} item 
     * @param {String} seperator is between key and text
     * @returns {String}
     */
    getItemText (item, seperator = ""){
        const {mapping, showKey, notSelectedText, rtl} = this.props;

        const text = item[mapping.text];
        const value = item[mapping.value];

        /**
         * Null item should not show key
         * Null item is {text : 'No Selected', value : -99}
         */
        const key = (showKey && value !== -99) ? `${value} ${seperator}`  : '' ;
        const itemText = `${key} ${text}`;

        return itemText;
    }

     /**
     * Get input value when single selecting
     * 
     * @param {Array} item 
     * @param {String} seperator is between key and text
     * @returns {String}
     */
    getInputText (){
        const {mapping, showKey, notSelectedText, rtl, multi} = this.props;
        const {selectedItems} = this.state
        let inputText = '';

        if (!selectedItems || selectedItems.length === 0) {
            const notSelected = notSelectedText ? notSelectedText : (rtl ? 'انتخاب شده' : 'No Selected');
            return notSelected;
        }

        const seperator = multi && selectedItems.length >1 ? ' , ' : '';
        selectedItems.forEach(o =>{
            const text = o[mapping.text];
            const value = o[mapping.value];

            /**
             * Null item should not show key
             * Null item is {text : 'No Selected', value : -99}
             */
            const key = (showKey && value !== -99) ? `${value}`  : '' ;
            inputText += `${key} ${text}${seperator}`;

        })
        
        return inputText
    }



    render (){
        const { label, mapping, rtl, disabled, outline, multi} = this.props;
        const {open, selectedItems, uid} = this.state;
        const activeClass = open ? ' active' : '';
        const hasIconClass =  mapping.icon ? ' r-has-icon' : '';
        const rtlClass = rtl ? ' r-rtl' : '';
        const outlineClass = outline ? ' r-bordered' :''; 
        const disabledClass = disabled ? ' r-disabled' :''; 
        const inputValue = this.getInputText();
        const renderIcon = mapping.icon ? createIcon(getValueByProp(selectedItems, mapping.icon)) : '';
        
        return (
            <div data-id={uid} onClick={this.open.bind(this)} className={`r-select r-noselect r-input filled${activeClass}${hasIconClass}${rtlClass}${outlineClass}${disabledClass}`}>
                <input 
                    disabled={disabled} 
                    type="text" 
                    onChange={()=>{}} 
                    value={inputValue.trim()}   
                />
                <label>{label}</label>
                <span className="r-line"></span>
                {mapping.icon && <span className="r-input-icon">{renderIcon}</span>}
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
    multi : false,
    
}

export default Select