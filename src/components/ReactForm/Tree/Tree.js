import React, {Component} from 'react';
import './Tree.scss';
import TreeFactory from './Core/TreeFactory';
import TreeContext from './TreeContext'
import RenderTree from './RenderTree'

class Tree extends Component {
    constructor(props){
        super(props);
        const {dataType, mapping, data , columns} = props;

        this.TREE = TreeFactory.create(dataType, mapping);

        this.state = {
            columns,
            model : this.TREE.updateModel(data)
        }
        
    }

    /**
     * When using this function any data will update and fixed by 
     * 'this.TREE.updateModel' before setState and broadcasting for render
     */
    changeData = data => {
        const model = this.TREE.updateModel(data)
        this.setState({ model })
    }

    /**
     * Get context value for provider
     */
    getContext () {
        return {
            ...this.props,
            TREE : this.TREE,
            changeData : this.changeData,
            model : this.state.model,
        }
    }

    render () {
        const {model} = this.state;

        return (
            <TreeContext.Provider value={this.getContext()}>
                <div className="r-tree">
                    <RenderTree />
                </div>
            </TreeContext.Provider>
        )
    }
}

Tree.defaultProps = {
    rtl : false,
}

export default Tree