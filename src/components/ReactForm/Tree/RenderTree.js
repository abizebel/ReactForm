import React, {Component, Fragment} from 'react';
import TreeContext from './TreeContext';
import Node from './Node';

class RenderTree extends Component{

    static contextType = TreeContext;
    constructor(props){
        super(props)
    }

    renderFlat(model, parentId = '#') {
        const {mapping, TREE} = this.context;

        let nodes = model.map(o =>{
            if (o[mapping.parentId] === parentId) {
                return <Node node={o} cb={()=> TREE.hasChild(o, model) && this.renderFlat(model, o[mapping.id]) } /> 
            }
        });

        return (<ul>{nodes}</ul>);
    }

    renderComposition(model) {
        const {mapping, TREE} = this.context;

        let nodes = model.map(o =>{
            return  <Node node={o} cb={()=> TREE.hasChild(o) && this.renderComposition(o[mapping.children])} />
        });

        return (<ul>{nodes}</ul>);
    }

    renderTree () {
        const {dataType, model} = this.context;

        if (dataType === 'flat') {
            return this.renderFlat(model)
        }
        else if (dataType === 'composition') {
            return this.renderComposition(model)
        }
    }
    
    render () {
        return (
            <Fragment>
                {this.renderTree()}
            </Fragment>
        )
    }
}


export default RenderTree;