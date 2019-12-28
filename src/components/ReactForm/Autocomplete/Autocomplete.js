import React, {Component, createRef} from 'react';
import {getValueByProp, createIcon, mapObjectToClassName,handlePosition} from '../functions';
import Backdrop from '../Backdrop/Backdrop';
import {DotsLoading} from '../Loading/Loading';

import './Autocomplete.scss';
import $ from 'jquery';
import icons from '../icons';

///////////// DELETE /////////////
const sampleIcon = <svg viewBox="0 0 24 24"><path fill="#000000" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>;
///////////// DELETE /////////////


class Autcomplete extends Component {
    constructor(props) {
        super(props);

        this.values =  [...this.props.values];
        this.inputDom = createRef();
        const defaultValue = this.props.defaultValue || '';

        this.state = {
            open : false,
            searchValue : defaultValue,
            searchResults : [],
            notFound : false,
            loading : false,
            selectedItem : null,
            hasError : this.validate(defaultValue).hasError,
            errorMessage : this.validate(defaultValue).errorMessage
        }


        this.timer =null; 
        this.waitInterval =800; 
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
    validate (value){
        const {serverError, required} = this.props;
        let hasError = false;
        let errorMessage = '';

        if(!this.isValidationMode()) return {hasError,errorMessage} ;
       
        if(serverError && serverError.status) {
            hasError = true;
            errorMessage = serverError.message;
        }
        else if(!serverError && required && value.trim() === ''){
            hasError = true;
            errorMessage = required;
        }
 
        this.setState({hasError, errorMessage});
        return {hasError, errorMessage}
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
     * Render select options
     */
    renderOptions (){
        const {mapping , rtl} = this.props;
        const { searchResults , searchValue, notFound, loading} = this.state;
        
        let options;

      if (!loading && notFound && searchValue.trim().length) {
            const notFoundText = rtl ? 'یافت نشد' : 'Not Found';
            options = (
                <div onClick={this.close} className="r-options-item add-item">
                    {`"${searchValue}" ${notFoundText}`}
                </div>
            )
        }
        else if (loading || !searchValue.length || !searchResults.length) {
            const doSearch = rtl ? 'جستجو کنید' : 'Search';
            options = (
                <div onClick={this.close} className="r-options-item">
                    <DotsLoading text={doSearch} />
                </div>
            )
        }
        else {
            options = searchResults.map((o, i) => {
                return (
                    <div key={i} className={'r-options-item'} onClick={this.select.bind(this,o)}>
                        {mapping.icon && 
                            <span className="r-option-icon">
                                {createIcon(getValueByProp(o, mapping.icon))}
                            </span> 
                        }
                        {this.getItemText(o)}
                    </div>
                )
            })
        }
        
        return (
            <div className="r-options"  ref={d => {handlePosition(d)}}>
                <div className="r-options-items">{options}</div>
            </div>
        )
        
    }

    /**
     * 
     * @param {Object} selectedItem 
     * @description Select a item that user clicked on it 
     */
    select (item){
        const {mapping, change} = this.props;

        this.setState({searchValue:item[mapping.text]})
        this.setState({selectedItem:item})
        this.setState({open:false});

        this.validate(item[mapping.text]);
        change(item[mapping.text])
    }

    /**
     * Open autocomplete
     * 
     * @param {Event} e 
     */
    open = e => {        
        this.setState({open : true});
        setTimeout(() => {
            $(this.inputDom.current).focus()
        },100)
    }

    /**
     * Close autocomplete
     * 
     * @param {Event} e 
     */
    close = e => { 
        this.setState({open : false})
    }


    /**
     * Get searching item results from server
     * 
     * @param {String} str 
     */
    async getItemFromServer (str){
        const {api} = this.props;
        return await api(str);
    }

    /**
     * Search in autocomplete options
     * 
     * @param {Event} e 
     */
    async search (e){
        const { mapping , change, api} = this.props;
        const target = e.target.value.toLowerCase();
        let foundValues ;

        //Reset search result
        this.setState({searchResults : [], notFound : false, loading:true});
        
       this.validate(target)
       change(e.target.value);

       //Close 
        if(e.target.value.length === 0) {
            this.setState({open : false})
            return;
        }

        //Remote search
        if(api){
            foundValues = await this.getItemFromServer(target);
        }

        //local search
        else { 
            foundValues = this.values.filter(o => {
                return o[mapping.text].toLowerCase().indexOf(target)!== -1
            });
        }

        //Update tag list
        this.setState( {
            searchResults : foundValues,
            notFound : foundValues.length ? false : true ,
            loading : false
        });

        //Open
        this.open(e)
    }


    /**
     * Get input value 
     * 
     * @param {String} seperator is between key and text
     */
    getItemText (item){
        const {mapping} = this.props;
        const text = item[mapping.text];
        const inputValue = `${text}`;

        return inputValue;
    }
    
    /**
     * Clean search area
     */
    clean (){
        const {disabled} = this.props;
        if (disabled) return;

        this.setState({searchValue : ''})
        $(this.inputDom.current).focus()
    }   


    handleSearch  (e) {
        const Event = {target : {value : e.target.value}};
        clearTimeout(this.timer);
        
       // handle change
       this.setState({searchValue : e.target.value});

        this.timer = setTimeout(()=>{
            this.search(Event)
        }, this.waitInterval);
    }

    keydown (){
        clearTimeout(this.timer);
    }


   /**
     * Get style
     */
    getAutocompleteClass (){
        const {mapping, rtl, disabled, outline, className } = this.props;
        const {searchValue ,hasError, open} = this.state;
        const validationMode = this.isValidationMode ();
      
        let names =  {
            [className] : className ? true : false,
            'active' : open ,
            'r-autocomplete r-input' : true,
            'filled': searchValue.length > 0,
            'r-rtl': rtl,
            'r-bordered': outline,
            'r-disabled' : disabled,
            'r-has-icon' : mapping.icon,
            'r-error' :  validationMode && hasError,
        }

        return mapObjectToClassName(names)
    }

    render (){
        const {label, mapping, disabled, defaultValue, placeholer,style} = this.props;
        const {open, searchValue, selectedItem,errorMessage, hasError} = this.state;

        const showClean = searchValue.length !== 0 ? true : false 
      
        
        return (
            <div style={style} className={this.getAutocompleteClass ()}>
            
            {open && <Backdrop onClick={this.close} />}
           
            <input 
                onFocus={this.open}
                ref={this.inputDom}
                disabled={disabled} 
                type="text" 
                placeholder={placeholer}
                className="filled" 
                value={searchValue}  
                onChange={this.handleSearch.bind(this)}
            />
            {label && <label>{label}</label>}
            <span className="r-line"></span>

            {   hasError &&
                <span className="r-message">{errorMessage}</span> 
      
            }

            {mapping.icon && selectedItem !==null &&
                <span className="r-input-icon">{createIcon(getValueByProp(selectedItem, mapping.icon))}</span>
            }

            {showClean && <span className="r-icon" onClick={this.clean.bind(this)}>{icons.close}</span>}

            {open && this.renderOptions()}

        </div>
        )
    }
}

Autcomplete.defaultProps = {
    rtl : false,
    outline : false,
    disabled : false,
    values : [],
}

export default Autcomplete
