import React, {Component, Fragment, createRef} from 'react';
import TreeContext from './TreeContext'
import Icons from './Icons';
import Input from './Input';

import $ from 'jquery'

class Node extends Component {
    static contextType = TreeContext;
    constructor(props){
        super(props);
    }

    state = {
        editInput : false,
        editCode : false,
    }


    startEdit = (type) =>{
        this.setState({[type]:true})
    }

    /**
     * Quit edit mode then update model
     * @param {Event} e 
     */
    endEdit = (type, e) =>{
        const {TREE, model, changeData, mapping} = this.context;
        const {node} = this.props;
        let value  = e.target.value;
        
        node[mapping[type === 'editInput' ? 'text' : 'code']] = value;
        
        changeData(TREE.updateNode(model, node));
        this.setState({[type]:false})
    }

    closeWithEnter = (type, e) =>{
        if (e.keyCode === 13) {
            e.preventDefault();
            this.endEdit(type, e)
        }
    }

 
    /**
     * @param {Object} node
     * @param {Event} e
     * @description toggle tree nodes by click
     */
    toggle = (node, e) =>{
        const {TREE, data, changeData, mapping} = this.context;
        let newData = TREE.toggleNode(data, node[mapping.id]);
        changeData(newData)

    }

    /**
     * Render toggle arrow 
     * @param {Boolean} hasChild 
     */
    renderArrow = (hasChild) =>{
        const {node} = this.props;
        const {rtl} = this.context;

        return ( 
            <Fragment>
                {
                    hasChild ?
                    <span onClick={this.toggle.bind(this, node)} className="toggle-icon">
                        {node.open ? Icons.arrow_down : (rtl ? Icons.arrow_left :Icons.arrow_right)}
                    </span> :
                    <span style={{opacity:0}} className="toggle-icon">
                        { Icons.arrow_down }
                    </span>
                }
            </Fragment>
        )
    }


    renderIcon = () =>{
        const {node} = this.props;
        const {iconTempalte} = this.context;
        if (!node.icon) return null;

        return (
            <Fragment>{iconTempalte(node.icon)}</Fragment>
        )
    }


    renderNode = () =>{
        const {node} = this.props;
        const {mapping} = this.context;
        const {editInput} = this.state;

        if (editInput) {
            return( 
                <Input 
                    style={{}}
                    onKeyUp={this.closeWithEnter.bind(this,'editInput')} 
                    onBlur={this.endEdit.bind(this,'editInput')} 
                    value={node[mapping.text]}
                />
            )       
        }
        else {
            return <span onClick={this.startEdit.bind(this,'editInput')}>{node[mapping.text]}</span>;
        }
        
    }


    renderCode = () =>{
        const {node} = this.props;
        const {mapping} = this.context;
        const {editCode} = this.state;
        
        if (!mapping.code) return null;

        if (editCode) {
            return (
                <Fragment>
                    <Input 
                        style={{width:50}}
                        onKeyUp={this.closeWithEnter.bind(this,'editCode')} 
                        onBlur={this.endEdit.bind(this,'editCode')} 
                        value={node[mapping.code]}
                    /> - 
                </Fragment>      
            ) 
        }
        else {
            return <span onClick={this.startEdit.bind(this,'editCode')}>{node[mapping.code]+' - '}</span>;
        }
        
    }

    renderActions = () =>{

        return (
            <div className="node-actions">
                <span onClick={this.addNode} className="add-node">{Icons.plus}</span>
                <span onClick={this.removeNode} className="remove-node">{Icons.remove}</span>
            </div>
        ) 
    }

    addNode =() =>{
        const {node} = this.props;
        const {TREE, model, changeData, mapping} = this.context;
        let newData = TREE.addNode(model, node[mapping.id])
                
        changeData(newData); 
    }

    removeNode = () =>{
        const {node} = this.props;
        const {TREE, model, changeData, mapping} = this.context;


        let hasParent = TREE.hasParent(model, node[mapping.id]) ? true : false;
        if (!hasParent) return ;

        let newData = TREE.removeNode(model, node[mapping.id])
        changeData(newData); 
    }
    
    render () {
        const {node, recursive} = this.props;
        const {TREE, model} = this.context;
        let hasChild = TREE.hasChild(node, model) ? true : false;

        return (
            <Fragment>
                {   node.show && 
                    <li  className={`r-tree-node ${hasChild ? 'has-child' : ''}`}  >              
                        {this.renderArrow(hasChild)}
                        {this.renderIcon()}
                        {this.renderCode()}
                        {this.renderNode()}
                        {this.renderActions()}
                        {recursive()}
                    </li>
                }
            </Fragment>
        ) 
    }
}



export default Node;