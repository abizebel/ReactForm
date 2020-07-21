import React, {Component, Fragment} from 'react';
import TreeContext from './TreeContext'
import Icons from './Icons';


class Node extends Component {
    static contextType = TreeContext;

 
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
    render () {
        const {node, cb} = this.props;
        const {TREE, fields, model} = this.context;
        let hasChild = (TREE.hasChild(node, model)) ? true : false;

        return (
            <Fragment>
                {   node.show && 
                    <li className={`r-tree-node ${hasChild ? 'has-child' : ''}`} >              
                        {this.renderArrow(hasChild)}
                        {this.renderIcon()}
                        {node[fields.text]}
                        {cb()}
                    </li>
                }
            </Fragment>
        ) 
    }
}



export default Node;