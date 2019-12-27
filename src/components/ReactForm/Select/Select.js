import React, {Component, Fragment, createRef} from 'react';
import Checkbox from '../Checkbox/Checkbox';
import Backdrop from '../Backdrop/Backdrop';
import {getValueByProp, createIcon, mapObjectToClassName, handlePosition} from '../functions';
import icons from '../icons';
import './Select.scss';

class Select extends Component {
    constructor(props) {
        super(props);
        const {values , defaultValue} = this.props;
        //Our method always get array and when user send "String" should be convert to array
        this.optionsDom = createRef();
        this.selectedIds = (typeof defaultValue === 'number' ?  [defaultValue] : defaultValue) || [];
        this.values =  this.createList (values);
        const selectedItems =  this.getSelectedItems (this.selectedIds)
        
        this.state = {
            open : false,
            selectedItems :selectedItems,
            listValues : this.values,
            hasError : this.validate(selectedItems).hasError,
            errorMessage : this.validate(selectedItems).errorMessage,
            searchValue : ''
        }
        
    }

    arrowKey = e => {
        return 
        //be farze selected sade
        if (e.keyCode === 13) {
            this.toggle()
        }
        if (e.keyCode === 38) { //up 
           
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
     * 
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
     * Add Selected property to values that listed as options
     * 
     * @param {Array} values 
     */
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
        const {nullable, mapping,notSelectedText, rtl} = this.props;
        let listValues = [...values];
        
        this.addSelectedProp(listValues)
        
        //If nullable add a fake object 
        if (nullable) {
            const notSelected = notSelectedText ? notSelectedText : (rtl ? 'انتخاب نشده' : 'No Selected');

            listValues.unshift({
                [mapping.text] : notSelected,
                [mapping.value] : -99,
            })
        }

        return listValues;
    }

    /**
     * import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
    findSelectedIndex (item){
        const {mapping} = this.props;
        const {selectedItems} = this.state;

        for (var i=0 ; i< selectedItems.length ; i++) {
            if(selectedItems[i][mapping.value] === item[mapping.value]) {
                return i;
            }
        }

    }

    /**
     * Find item index in list values
     * 
     * @param {Object} item
     * @returns {Boolean}
     */
    findListIndex (item){
        const {mapping} = this.props;
        const {listValues} = this.state;

        for (var i=0 ; i< listValues.length ; i++) {
            if(listValues[i][mapping.value] === item[mapping.value]) {
                return i;
            }
        }

    }

    /**
     * Toggle select in multiselect mode 
     * 
     * @param {Object} item 
     */
    toggleSelect (item){
      
        
        this.setState(prevState => {
            
            if(this.isExist(item)) {
                const itemIndex = this.findSelectedIndex(item);
                prevState.selectedItems.splice(itemIndex, 1 )
            }
            else {
                prevState.selectedItems.push(item);
            }
            
            this.validate(prevState.selectedItems)
          //  change(prevState.selectedItems)

            return {
                selectedItems : prevState.selectedItems
            }
        });
        
    }

    /**
     * Toggle options iwth index
     * 
     * @param {Number} index 
     */
    toggleOptions (index){
        this.setState(prevState => {

            prevState.listValues[index].selected = !prevState.listValues[index].selected;
            return {
                listValues : prevState.listValues
            }
        })
    }

    /**
     * Deselect all options
     */
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
    select = (item, index) =>{
        const {change, mapping, multi} = this.props;
        /**
         * If user had selected "no item" send Null otherwise send selected object
         * Null item is {text : 'No Selected', value : -99}
         */
        if (item[mapping.value] === -99) {
            this.deselectOptions()
            this.setState({selectedItems : []});
            this.setState({open:false});
            this.validate([]);
            change(null);
            return;
        }
        
        //MultiSelect
        if (multi){
            this.toggleOptions(index);
            this.toggleSelect(item) ;
        }
        //SingleSelect
        else {
            this.setState({selectedItems : [item]})
            this.validate([item])
           // this.close();
            change(item);
     
        }
 
    }

    /**
     * Get selected class in single select mode
     * @param {Number} index 
     */
    getSelectedClass (index){
        const { mapping} = this.props;
        const {selectedItems, listValues } = this.state;
        
        if (selectedItems.length) {
            const selectedId = selectedItems[0][mapping.value];
            if (listValues[index][mapping.value] === selectedId) {
                return 'selected'
            }
        }
        return ''

    }

    /**
     * Render select optionsmulti
     */
    renderOptions (){
        const {mapping, search , rtl, multi} = this.props;
        const {listValues ,selectedItems } = this.state;
        let options;

      
       const selectedClass = !multi

        //If options list is empty show "Not Found"
        if (listValues.length === 0) {
            const notFoundText = rtl ? 'یافت نشد' : 'Not Found';
            options = (<div className="r-options-item">{notFoundText}</div>)
        }
        else {
            options = listValues.map((o, i) => {
                return (
                    <div key={i} className={`r-options-item ${!multi && this.getSelectedClass(i)}`} onClick={this.select.bind(this,o,i)}>
                      
                        {multi && o[mapping.value] !==-99 &&
                            <Checkbox 
                                size={'xs'}
                                justViewMode={true} 
                                nospace={true} 
                                rtl={rtl} 
                                defaultValue={o.selected}
                            />
                        }

                        {mapping.icon && !multi &&
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
            <div className="r-options" ref={d => {handlePosition(d)}}>
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
        const value = e.target.value;

        //Store search value in state
        this.setState({searchValue : value})

        //Reset list if input hasnt value
        if(value.length === 0) {
            this.setState({listValues :this.values})
        }

        //Search
        const target = value.toLowerCase();
        const foundValues = this.values.filter(o => {
            return o[mapping.text].toLowerCase().indexOf(target)!== -1
        });

        this.setState({listValues : foundValues})
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
     * @param {String} seperator is between key and text
     * @returns {String}
     */
    getItemText (item, seperator = ""){
        const {mapping, showKey} = this.props;

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
            const notSelected = notSelectedText ? notSelectedText : (rtl ? 'انتخاب نشده' : 'No Selected');
            return notSelected;
        }

        selectedItems.forEach((o,i) =>{
            const text = o[mapping.text];
            const value = o[mapping.value];
            const seperator = multi && selectedItems.length >1 && i>0 ? ' , ' : '';

            /**
             * Null item should not show key
             * Null item is {text : 'No Selected', value : -99}
             */
            const key = (showKey && value !== -99) ? `${value}`  : '' ;
            inputText += `${seperator}${key} ${text}`;

        })
        
        return inputText
    }

    /**
     * Get style
     */
    getSelectClass (){
        const { mapping, rtl, disabled, outline, multi, className} = this.props;
        const { hasError, open} = this.state;
        const validationMode = this.isValidationMode();

        let names =  {
            [className] : className ? true : false,
            'active' :open, 
            'r-select r-noselect r-input filled' : true,
            'r-rtl': rtl,
            'r-bordered': outline,
            'r-disabled' : disabled,
            'r-has-icon' : mapping.icon &&  !multi,
            'r-error' :  validationMode && hasError,
        }

        return mapObjectToClassName(names)
    }

    render (){
        const { label, mapping, disabled, multi, style} = this.props;
        const {errorMessage, hasError,open, selectedItems} = this.state;

        const inputValue = this.getInputText();
        const renderIcon = mapping.icon ? createIcon(getValueByProp(selectedItems, mapping.icon)) : '';

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

                    <label>{label}</label>

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
    style : {}
    
}

export default Select
