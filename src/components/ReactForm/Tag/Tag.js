import React, {Component, createRef} from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Chips from '../Chips/Chips';
import {DotsLoading} from '../Loading/Loading';
import {getValueByProp, createIcon, mapObjectToClassName} from '../functions';

import '../ReactForm.css';
import './Tag.scss';
import icons from '../icons';

class Tag extends Component {
    constructor(props){
        super(props);

        this.values = [...this.props.values];
        const defaultValues = this.props.defaultValue || [];
        const selectedTags = [...defaultValues] || [];

        this.state = {
            open : false,
            searchValue :  '',
            tags : selectedTags, // tags
            listValues :  this.values || [], //search list
            selectedItem : null,
            hasError : this.validate(selectedTags).hasError,
            errorMessage : this.validate(selectedTags).errorMessage,
        }

        this.inputDom = createRef();

        this.timer =null; 
        this.waitInterval = 800; 
    }

    handleChange (e){    
        const {disabled} = this.props;
        if (disabled) return ;

        this.setState({searchValue : e.target.value});
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
    validate (selectedTags = []){
        const {serverError, required} = this.props;
        let hasError = false;
        let errorMessage = '';

        if(!this.isValidationMode()) return {hasError,errorMessage} ;
       
        if(serverError && serverError.status) {
            hasError = true;
            errorMessage = serverError.message;
        }
        else if(!serverError && required && selectedTags.length === 0){
            hasError = true;
            errorMessage = required;
        }
 
        this.setState({hasError, errorMessage});
        return {hasError, errorMessage}
    }


    /**
     * Render tag list for selection
     */
    renderOptions (){
        const {mapping, rtl} = this.props;
        const {listValues, searchValue} = this.state;
        var options;

        //If options list is empty show "Not Found"
        if (listValues.length === 0 && searchValue.length) {
            const notFoundText = rtl ? 'افزودن' : 'Add';
            options = (
                <div onClick={this.addNotfound} className="r-options-item add-item">
                    {icons.add}&nbsp;
                    {`${notFoundText} "${searchValue}"`}
                </div>
            )
        }
        else if (!searchValue.length) {
            const doSearch = rtl ? 'جستجو کنید' : 'Search';
            options = (
                <div onClick={this.close} className="r-options-item">
                    <DotsLoading text={doSearch} />
                </div>
            )
        }
        else {
            options = listValues.map((o, i) => {
                return (
                    <div key={i} className="r-options-item" onClick={this.select.bind(this,o)}>
                        {mapping.icon && 
                            <span className="r-option-icon" onClick={this.removeTag.bind(this)}>
                                {createIcon(getValueByProp(o, mapping.icon))}
                            </span> 
                        }
                        {getValueByProp(o, mapping.text)}
                    </div>
                )
            })
        }
        
    
        return (
            <div className="r-options">
                <div className="r-options-items">{options}</div>
            </div>
        )
      
    }

    /**
     * Render tag list
     */
    renderTags (){
        const {tags} = this.state;
        const {mapping} = this.props;

        return (
            <Chips
                values={tags}
                onClose={this.removeTag.bind(this)}
                mapping={mapping}
            />
        )
    }

    /**
     * Select and and tag to tag list1
     * 
     * @param {Object} item 
     */
    select (item){
        this.setState({selectedItem:item})
        this.addTag(item)
        this.setState({open:false})
    }

    /**
     * Open tag list
     * 
     * @param {Event} e 
     */
    open = e =>{        
        this.setState({open : true})
    }

    /**
     * Close tag list
     */
    close = e =>{
        this.setState({open : false})
    }


    /**
     * Get searching tag results from server
     * 
     * @param {String} str 
     */
    async getTagFromServer (str){
        const {api} = this.props;
        return await api(str);
    }

    /**
     * Preventing add duplicate tag to tag list
     * 
     * @param {Object} tag
     * @returns {Boolean}
     */
    isExist (tag){
        const {mapping} = this.props;
        const {tags} = this.state;

        for (var i=0 ; i< tags.length ; i++) {
            if(tag[mapping.text] === tags[i][mapping.text]) {
                return true;
            }
        }
        return false;
    }

    /**
     * Add tag to the tag list
     * 
     * @param {Object} tag 
     */
    addTag (tag){
        const {change} = this.props;
        if (this.isExist(tag)) return ;

        this.setState((prevState) =>{
            prevState.tags.push(tag);
            this.validate(prevState.tags)
            change(prevState.tags);

            return {
                tags : prevState.tags
            }
        });
        
        this.setState({searchValue : ''})
    }
    
    /**
     * Remove tag from tag list
     * 
     * @param {Number} index 
     */
    removeTag (index){
        const {change,disabled} = this.props;

        if (disabled) return ;

        let {tags} = this.state
        tags.splice(index, 1 )
        this.setState({tags})
        this.validate(tags)
        change(tags)

    }

    /**
     * Press enter ky on keyboard
     * 
     * @param {Event} e 
     */
    enter = e =>{
        const {mapping} = this.props;

        if (e.keyCode === 13) {
            const value = this.inputDom.current.value;
            if (value.trim() === '') return;

            this.addTag({[mapping.text] : value});
            this.setState({open:false});

        }
    }

    /**
     * Add notfound text with plus icon in option list
     * 
     * @param {Event} e 
     */
    addNotfound = e =>{
        const {mapping} = this.props;
        const {searchValue} = this.state;
        if (searchValue.trim() === '') return;

        this.addTag({[mapping.text] : searchValue});
        this.setState({open:false});
    
    }


  

    /**
     * Search for a tag
     * 
     * @param {Evenet} e 
     */
    async search (e){
        const {api, mapping} = this.props;
        const target = e.target.value.toLowerCase();
        let foundValues ;

        

       //Close if search value is empty
        if(e.target.value.length === 0) {
            this.setState({open : false})
            return;
        }
        
        //Remote search
        if(api){
            foundValues = await this.getTagFromServer(target);
        }
        //local search
        else { 
            foundValues = this.values.filter(o => {
                return o[mapping.text].toLowerCase().indexOf(target)!== -1
            });
        }
        
        //Update tag list
        this.setState({listValues : foundValues});

        //Open
        this.open(e)
    }


    handleSearch  (e) {
        const Event = {target : {value : e.target.value}};
        clearTimeout(this.timer);

        //handle change
        this.handleChange(e);
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
    getTagClass (){
        const {rtl, outline, disabled, mapping, className} = this.props;
        const {searchValue, open, tags, hasError} = this.state;
        const validationMode = this.isValidationMode();

      
        let names =  {
            [className] : className ? true : false,
            'active' : open ,
            'r-tag r-input' : true,
            'filled':(searchValue.length > 0 || tags.length >0),
            'r-rtl': rtl,
            'r-bordered': outline,
            'r-disabled' : disabled,
            'r-has-icon' : mapping.icon,
            'r-error' :  validationMode && hasError,
        }

        return mapObjectToClassName(names)
    }

    render (){
        const {rtl, outline, label, disabled, mapping, style} = this.props;
        const {searchValue, open, tags, hasError, errorMessage} = this.state;
        const filledClass = (searchValue.length > 0 || tags.length >0) ? ' filled' :''; 
        const rtlClass = rtl ? ' r-rtl' :''; 
        const outlineClass = outline ? ' r-bordered' :''; 
        const disabledClass = disabled ? ' r-disabled' :''; 
        const activeClass = open ? ' active' : '';
        const hasIconClass =  mapping.icon ? ' r-has-icon' : '';
        const validationMode = this.isValidationMode();
        const errorClass =  validationMode && hasError ? ' r-error' :''; 
      

        return (
            <div style={style} className={this.getTagClass()} >
                 {open && <Backdrop onClick={this.close} />}
           

                {this.renderTags()}

                <input 
                    onFocus={this.open}
                    onKeyDown={this.keydown.bind(this)} 
                    value={searchValue}
                    disabled={disabled}
                    ref={this.inputDom} type="text" 
                    onChange={this.handleSearch.bind(this)} 
                    onKeyUp={this.enter.bind(this)}
                />
                <label>{label}</label>
                <span className="r-line"></span>
                {   hasError &&
                    <span className="r-message">{errorMessage}</span> 
      
                }
                {this.open && this.renderOptions()}
            </div>
        )
    }
}

Tag.defaultProps = {
    rtl : false,
    outline : false,
    disabled : false,
    values : [],
    style : {},
}

export default Tag;
