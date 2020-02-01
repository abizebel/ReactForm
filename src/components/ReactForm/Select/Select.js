import React, {Component, Fragment, createRef} from 'react';
import Checkbox from '../Checkbox/Checkbox';
import Backdrop from '../Backdrop/Backdrop';
import * as FN from '../functions';
import icons from '../icons';
import './Select.scss';
import { timeout } from 'q';

class Select extends Component {
    constructor(props) {
        super(props);
        const {values, defaultValue , mapping} = props;
        this.optionsDom = createRef();
        
        this.selected = FN.findItemById(values, defaultValue, mapping);
        
        this.state = {
            open : false,
            values : values,
            initialValues : values,
            // hasError : this.validate(selectedItems).hasError,
            // errorMessage : this.validate(selectedItems).errorMessage,
            searchValue : '',
            selectedItem : this.selected.length ? this.selected[0] : null,
        }
        
    }

    arrowKey = e => {

        if (e.keyCode === 13){

        }


        if (e.keyCode === 38) {//up
            
        }
        else if (e.keyCode === 40 ) {//down 
           
        }
        
    }

    /**
     * Detect validation mode
     */
    isValidationMode (){
        const {required, serverError} = this.props;

        const validationMode =required || serverError ? true : false;
        return validationMode;
    }

    /**
     * Check if select has error or not depends on our configs
     */
    validate (selectedItems = []){
        const {serverError, required} = this.props;
        let hasError = false;
        let errorMessage = '';

        if(!this.isValidationMode()) return {hasError,errorMessage} ;
       
        if(serverError && serverError.status) {
            hasError = true;
            errorMessage = serverError.message;
        }
        else if(!serverError && required && selectedItems.length === 0){
            hasError = true;
            errorMessage = required;
        }
 
        this.setState({hasError, errorMessage});
        return {hasError, errorMessage}
    }

 
    /**
     * Open options
     * 
     * @param {Event} e 
     */
    open (e){
        const {disabled} = this.props;
        if (disabled) return;

        this.setState((prevState) => {
            return { open : !prevState.open}
        });
     
    }

    /**
     * Close options
     * 
     * @param {Event} e 
     */
    close  = e =>{
        const {multi, change} = this.props;

        this.setState({open : false});

        if (multi) {
            change(this.state.selectedItems)
        }
    }

    /**
     * Open options
     * 
     * @param {Event} e 
     */
    toggle (e){
        const {disabled} = this.props;
        
        if (disabled) return;

        this.setState((prevState) => {
            return { open : !prevState.open}
        });

    }

    /**
     * 
     * @param {Object} item 
     * @description Select a item that user clicked on it 
     */
    select = (item, index) =>{
        const {change} = this.props;

        this.setState({selectedItem : item})
        this.validate([item])
        this.close();

        change(item);
    }

    /**
     * 
     * @param {Object} item 
     * @description Deslect options to null value 
     */
    deSelect = (item, index) =>{
        const {change} = this.props;

        this.setState({selectedItem : null})
        //this.validate([item])
        this.close();

        change(item);
    }

    /**
     * Get selected class in single select mode
     * @param {Number} index 
     */
    getSelectedClass (index){
        const { mapping} = this.props;
        const {values, selectedItem } = this.state;

        if (selectedItem) {
            const selectedId = selectedItem[mapping.value];
            if (values[index][mapping.value] === selectedId) {
                return 'selected'
            }
        }

        return ''
    }

    /**
     * Add null values to options
     */
    createNullValue (){
        const {rtl} = this.props;

        const notSelected = rtl ? 'انتخاب نشده' : 'No Selected';
        return (
            <div className="r-options-item" onClick={this.deSelect}>
                {notSelected}
            </div>
        )
    }


    /**
     * Render select optionsmulti
     */
    renderOptions (){
        const {mapping, search , rtl, nullable} = this.props;
        const {values } = this.state;
        let options;

        //If options list is empty show "Not Found"
        if (values.length === 0) {
            const notFoundText = rtl ? 'یافت نشد' : 'Not Found';
            options = (<div className="r-options-item">{notFoundText}</div>)
        }
        else {
            options = values.map((o, i) => {
                
                return (
                    <div key={i} className={`r-options-item ${this.getSelectedClass(i)}`} onClick={this.select.bind(this,o,i)}>

                        {mapping.icon &&
                            <span className="r-option-icon">
                                {FN.createIcon(FN.getValueByProp(o, mapping.icon))}
                            </span> 
                        }

                        {this.getItemText(o)}
                    </div>
                )
            })
            if (nullable) {
                options.unshift(this.createNullValue())
            }
        }
        
        return (
            <div className="r-options" ref={d => {FN.handlePosition(d)}}>
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
        const {initialValues} = this.state;
        const value = e.target.value;

        //Store search value in state
        this.setState({searchValue : value})

        //Reset list if input hasnt value
        if(value.length === 0) {
            this.setState({listValues :initialValues})
        }

        //Search
        const target = value.toLowerCase();
        const foundValues = initialValues.filter(o => {
            return o[mapping.text].toLowerCase().indexOf(target)!== -1
        });

        this.setState({values : foundValues})
    }

    /**
     * Render options search  
     */
    renderSearch (){
        const { rtl} = this.props;
        const {searchValue} = this.state;
        const searchLableText = rtl ? 'جستجو ...' : 'Search ...';

        return (
            <div className="r-options-search">
                <input value={searchValue} onChange={this.search.bind(this)} placeholder={searchLableText} type="text" />
            </div>
        )
    }

    /**
     * Get list item value
     * 
     * @param {Object} item 
     * @returns {String}
     */
    getItemText (item){
        const {mapping, showKey} = this.props;
        const text = item[mapping.text];
        const value = item[mapping.value];
        const key = showKey ? `${value} ${'-'}`  : '' ;
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
        const {mapping, showKey, rtl} = this.props;
        const {selectedItem} = this.state;
        let inputText = '';
        
        if (!selectedItem) {
            const notSelected = rtl ? 'انتخاب نشده' : 'No Selected';
            return notSelected;
        }

        const text = selectedItem[mapping.text];
        const value = selectedItem[mapping.value];
        const key = showKey ? `${value}-` : '' ;
        inputText += `${key} ${text}`;
      
        return inputText;
    }

    /**
     * Get style
     */
    getSelectClass (){
        const { mapping, rtl, disabled, outline, className} = this.props;
        const { hasError, open} = this.state;
        const validationMode = this.isValidationMode();

        let names =  {
            [className] : className ? true : false,
            'active' :open, 
            'r-select r-noselect r-input filled' : true,
            'r-rtl': rtl,
            'r-bordered': outline,
            'r-disabled' : disabled,
            'r-has-icon' : mapping.icon ,
            'r-error' :  validationMode && hasError,
        }

        return FN.mapObjectToClassName(names)
    }

    render (){
        const { label, mapping, disabled, multi, style} = this.props;
        const {errorMessage, hasError,open, selectedItem} = this.state;

        const inputValue = this.getInputText();
        const renderIcon = mapping.icon ? FN.createIcon(FN.getValueByProp(selectedItem, mapping.icon)) : '';

        return (
            <Fragment>
                 
                <div style={style} className={this.getSelectClass()}>
                {open && <Backdrop onClick={this.close} />}
                   
                    <input 
                        onKeyDown={this.arrowKey}
                        onClick={this.toggle.bind(this)}
                        disabled={disabled} 
                        type="text" 
                        onChange={()=>{}} 
                        value={inputValue.trim()}   
                    />

                    {label && <label>{label}</label>}

                    { !multi && mapping.icon && <span className="r-input-icon">{renderIcon}</span> }

                    <span onClick={this.open.bind(this)} className="r-icon">{icons.down}</span>     

                    { hasError && <span className="r-message">{errorMessage}</span> }

                    {open && this.renderOptions()} 
                </div>
            </Fragment>
        )
    }
}

Select.defaultProps = {
    rtl : false,
    outline : false,
    disabled : false,
    nullable : false,
    multi : false,
    style : {},
    
}

export default Select
