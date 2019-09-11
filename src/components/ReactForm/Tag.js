import React, {Component, createRef} from 'react';
import {getValueByProp, createIcon, getValueById, gene} from './functions';
import icons from './icons';
import './ReactForm.css';
import $ from 'jquery';

///////////// DELETE /////////////
const sampleIcon = <svg viewBox="0 0 24 24"><path fill="#000000" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>;
///////////// DELETE /////////////


class Tag extends Component {
    constructor(props){
        super(props);
        this.state = {
            open : false,
            searchValue :  '',
            values : this.props.values || [],//tags
            usedTags : [],
            selectedItem : null
        }
        this.inputDom = createRef()
    }

    handleChange (e){
        const {change} = this.props;
        
        this.setState({searchValue : e.target.value});
        //change(e.target.value)
    }


    componentDidMount(){
        $(document).click((e) => {
            var len = $(e.target).closest('.rf-autocomplete').length
            if(len === 0 && this.state.open === true){
               this.setState({open : false})
            }
        })
    }

    renderOptions (){
        const {mapping} = this.props;
        const {usedTags} = this.state;
        var options;

        if (usedTags.length === 0) {
            options = (<div className="rf-options-item">Not Found</div>)
        }
        else {
            options = usedTags.map((o, i) => {
                return (
                    <div key={i} className="rf-options-item" onClick={this.select.bind(this,o)}>
                        {mapping.icon && 
                            <span className="rf-option-icon" onClick={this.removeTag.bind(this)}>
                                {createIcon(getValueByProp(o, mapping.icon))}
                            </span> 
                        }
                        {getValueByProp(o, mapping.text)}
                    </div>
                )
            })
        }
        
        return <div className="rf-options">{options}</div>
    }


    renderTags (){
        const {values} = this.state;
        const {mapping} = this.props;

            const tags = values.map((o, i) =>{
                return (
                    <li key={i} class="rf-tag-list-item" >{o[mapping.text]}
                        <span className="rf-tag-icon">{icons.close}</span>
                    </li>
                )
            });

            return (<ul class="rf-tag-list">{tags}</ul>)
    }
    removeTag (index){
        this.setState((prevState) =>({
            values : prevState.values.splice(1, index)
        }))

    }
    select (item){
        const { mapping} = this.props;
        this.setState({selectedItem:item})
        this.setState((prevState) =>{
            prevState.values.push(item)
            return {
                values : prevState.values
            }
        })

        this.setState({open:false})
        //change(e.target.value)
    }
    open (e){        
        const len = $(e.target).closest('.rf-options').length;
        if (len === 0) {
            this.setState({open : true})
        }
    }


    ////////////////////// CHANGE //////////////////////
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

    
    enter (e){
        const {mapping} = this.props;
        if (e.keyCode === 13) {
            this.setState((prevState) =>{
                prevState.values.push({[mapping.text] : this.inputDom.current.value})
                return {
                    values : prevState.values
                }
            })
            this.setState({open:false})
        }
       
    }

    search (e){
        const {values, mapping, disabled} = this.props;
        if (disabled) return;

        //handlechange
        this.handleChange(e);

       //Close 
        if(e.target.value.length === 0) {
            this.setState({open : false})
            return;
        }

        //Remote search
        const tagList = this.getTagFromServer(e.target.value);
        this.setState({usedTags : tagList});

        //Open
        this.open(e)
    }

    render (){
        const {rtl, outline, label, disabled, multiline, icon, mapping} = this.props;
        const {searchValue, open} = this.state;
        const filledClass = searchValue.length > 0 ? ' filled' :''; 
        const rtlClass = rtl ? ' rf-rtl' :''; 
        const outlineClass = outline ? ' rf-bordered' :''; 
        const disabledClass = disabled ? ' rf-disabled' :''; 
        const activeClass = open ? ' active' : '';
        const hasIconClass =  mapping.icon ? ' rf-has-icon' : '';


        return (
            <div className={`rf-tag${filledClass}${hasIconClass}${rtlClass}${outlineClass}${disabledClass}${activeClass}`}  >
                {this.renderTags()}
                <input ref={this.inputDom} type="text" onChange={this.search.bind(this)} onKeyUp={this.enter.bind(this)}/>
                <label>{label}</label>
                <span class="rf-line"></span>
                {this.open && this.renderOptions()}
            </div>
        )
    }
}

Tag.defaultProps = {
    rtl : false,
    outline : false,
    disabled : false,
}

export default Tag