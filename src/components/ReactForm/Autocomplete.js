import React, {Component, createRef} from 'react';
import {getValueByProp, createIcon, createUID} from './functions';
import './ReactForm.css';
import $ from 'jquery';
import icons from './icons';

class Autcomplete extends Component {
    constructor(props) {
        super(props);

        this.values =  [...this.props.values];
        this.inputDom = createRef();

        this.state = {
            open : false,
            searchValue : this.props.defaultValue || '',
            listValues : this.values,
            selectedItem : null,
            uid : createUID(),
        }
    }

    componentDidMount(){
        const {uid} = this.state;

        $(document).click((e) => {
            let selectElement = $(e.target).closest('.r-autocomplete');

            /* *
             * When one dropdown is opened close another
             */
            if (selectElement.attr('data-id') !== uid) {
                this.setState({open : false});
            }

            /**
             * If select was open and clicked outside of it close it
             * length == 0 means that user clicked outside of select
             */
            if(selectElement.length === 0 && this.state.open === true){
               this.setState({open : false});
            }
        })
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
        const {values, mapping, search ,notFoundMessage, rtl} = this.props;
        const { listValues } = this.state;
        let options;

        //If options list is empty show "Not Found"
        if (listValues.length === 0) {
            const notFoundText = notFoundMessage ? notFoundMessage : (rtl ? 'یافت نشد' : 'Not Found');
            options = (<div className="r-options-item">{notFoundText}</div>)
        }
        else {
            options = listValues.map((o, i) => {
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
             <div className="r-options">{options}</div>
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

        change(item[mapping.text])
    }

    /**
     * Open autocomplete
     * 
     * @param {Event} e 
     */
    open (e){        
        const len = $(e.target).closest('.r-options').length;
        if (len === 0) {
            this.setState({open : true})
        }
    }

    /**
     * Search in autocomplete options
     * 
     * @param {Event} e 
     */
    search (e){
        const {values, mapping, disabled, change} = this.props;
        if (disabled) return;

       // handle change
       this.setState({searchValue : e.target.value});
       change(e.target.value);

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

        this.setState({listValues : foundValues});

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
        this.setState({searchValue : ''})
        $(this.inputDom.current).focus()
    }   


    render (){
        const {label, mapping, rtl, disabled, outline, defaultValue} = this.props;
        const {open, searchValue, selectedItem, uid} = this.state;

        const activeClass = open ? ' active' : '';
        const hasIconClass =  mapping.icon ? ' r-has-icon' : '';
        const rtlClass = rtl ? ' r-rtl' : '';
        const outlineClass = outline ? ' r-bordered' :''; 
        const disabledClass = disabled ? ' r-disabled' :''; 
        const showClean = searchValue.length !== 0 ? true : false 
        // const inputValue = this.getItemText(selectedItem);
        // const renderIcon = mapping.icon ? createIcon(getValueByProp(selectedItem, mapping.icon)) : '';
        
        
        return (
            <div data-id={uid} className={`r-autocomplete r-input filled${activeClass}${hasIconClass}${rtlClass}${outlineClass}${disabledClass}`}>
            <input 
                ref={this.inputDom}
                disabled={disabled} 
                type="text" 
                className="filled" 
                value={searchValue}  
                onChange={this.search.bind(this)}
            />
            <label>{label}</label>
            <span className="r-line"></span>
            
            {mapping.icon && defaultValue.icon && selectedItem ===null &&
                <span className="r-input-icon">{createIcon(defaultValue.icon)}</span>
            }
            {mapping.icon && selectedItem !==null &&
                <span className="r-input-icon">{createIcon(getValueByProp(selectedItem, mapping.icon))}</span>
            }

            {showClean && <span className="r-icon" onClick={this.clean.bind(this)}>{icons.close}</span>}

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