import React, {Component, createRef} from 'react';
import {getValueByProp, createIcon} from './functions';
import icons from './icons';
import './ReactForm.css';
import $ from 'jquery';

///////////// DELETE /////////////
const sampleIcon = <svg viewBox="0 0 24 24"><path fill="#000000" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>;
///////////// DELETE /////////////


class Tag extends Component {
    constructor(props){
        super(props);

        this.values = [...this.props.values];

        this.state = {
            open : false,
            searchValue :  '',
            tags : [...this.props.defaultValue] || [], // tags
            listValues :  this.values, //search list
            selectedItem : null,

        }
        this.inputDom = createRef()
    }

    handleChange (e){    
        const {disabled} = this.props;
        if (disabled) return ;

        this.setState({searchValue : e.target.value});
    }

    /**
     * Render tag list for selection
     */
    renderOptions (){
        const {mapping} = this.props;
        const {listValues} = this.state;
        var options;

        if (listValues.length === 0) {
            options = (<div className="r-options-item">Not Found</div>)
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

            const tagEls = tags.map((o, i) =>{
                return (
                    <li key={i} className="r-chips-item" >{o[mapping.text]}
                        <span className="r-tag-icon" onClick={this.removeTag.bind(this, i)}>{icons.close}</span>
                    </li>
                )
            });

            return (<ul className="r-chips">{tagEls}</ul>)
    }

    /**
     * Select and and tag to tag list1
     * 
     * @param {Object} item 
     */
    select (item){
        const {change} = this.props;

        this.setState({selectedItem:item})
        this.addTag(item)
        this.setState({open:false})
        change(this.state.tags)
    }

    /**
     * Open tag list
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
     * Close tag list
     */
    close (){
        setTimeout(()=>{
            this.setState({open : false})
        },100)
    }


    ////////////////////// CHANGE //////////////////////
    /**
     * Get searching tag results from server
     * 
     * @param {String} str 
     */
    getTagFromServer (str){
        const {rtl} = this.props
        var ltrList = [
            {id:'0110',name:'Hosseini' , info:{icon:sampleIcon}},
            {id:'0220',name:'feiz', info:{icon:sampleIcon}},
            {id:'0330',name:'mohammadi', info:{icon:sampleIcon}},
            {id:'0440',name:'khosravi', info:{icon:sampleIcon}},
            {id:'0440',name:'ranjbar', info:{icon:sampleIcon}}
        ];
        var rtlList = [
            {id:'0110',name:'حسینی' , info:{icon:sampleIcon}},
            {id:'0220',name:'فیض', info:{icon:sampleIcon}},
            {id:'0330',name:'محمدی', info:{icon:sampleIcon}},
            {id:'0440',name:'خسروی', info:{icon:sampleIcon}},
            {id:'0440',name:'رنجبر', info:{icon:sampleIcon}}
         ];
        const list = rtl ? rtlList :ltrList;
        const target = str.toLowerCase();

        const foundValues = list.filter(o => {
            return o.name.toLowerCase().indexOf(target)!== -1
        })
        return foundValues;
    }
    ////////////////////// CHANGE //////////////////////

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
        if (this.isExist(tag)) return ;

        this.setState((prevState) =>{
            prevState.tags.push(tag);
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
        change(tags)

    }

    /**
     * Press enter ky on keyboard
     * 
     * @param {Event} e 
     */
    enter (e){
        const {mapping, change} = this.props;

        if (e.keyCode === 13) {
            this.addTag({[mapping.text] : this.inputDom.current.value});
            this.setState({open:false});
            change(this.state.tags);
        }
       
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

        //handle change
        this.handleChange(e);

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

    render (){
        const {rtl, outline, label, disabled, mapping} = this.props;
        const {searchValue, open, tags} = this.state;
        const filledClass = (searchValue.length > 0 || tags.length >0) ? ' filled' :''; 
        const rtlClass = rtl ? ' r-rtl' :''; 
        const outlineClass = outline ? ' r-bordered' :''; 
        const disabledClass = disabled ? ' r-disabled' :''; 
        const activeClass = open ? ' active' : '';
        const hasIconClass =  mapping.icon ? ' r-has-icon' : '';
        

        return (
            <div className={`r-tag r-input${filledClass}${hasIconClass}${rtlClass}${outlineClass}${disabledClass}${activeClass}`} >
                {this.renderTags()}
                <input 
                    onBlur={this.close.bind(this)}
                    value={searchValue}
                    disabled={disabled}
                    ref={this.inputDom} type="text" 
                    onChange={this.search.bind(this)} 
                    onKeyUp={this.enter.bind(this)}
                />
                <label>{label}</label>
                <span className="r-line"></span>
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
}

export default Tag;