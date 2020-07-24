import React, {Component, Fragment} from 'react';
import Select from '../Select/Select';

class DependencySelect extends Component {
    constructor(props){
        super(props);

        this.state = {}
        
        for(let prop in props.config) {
            this.state[`${prop}Values`] = props.config[prop].values ;
            this.state[`${prop}DefaultValue`] = props.config[prop].defaultValue;
            this.state[`${prop}Show`] = props.config[prop].show !== undefined ? props.config[prop].show : true;

        }
 
        

    }

    changeValues = (key, value) =>{
        this.setState({[`${key}Values`] : value})
    }

    changeDefaultValues = (key, value) =>{
        
        this.setState({[`${key}DefaultValue`] : value})
    }


    changeShow = (key, value) =>{
        
        this.setState({[`${key}Show`] : value})
    }

    createActions = (filter) =>{
        const {config} = this.props;
        let obj = {};

        for(let prop in config) {
            if (prop !==filter ){
                obj[prop] = {
                    changeValues : this.changeValues.bind(this,prop),
                   // changeDefaultValue  :this.changeDefaultValues.bind(this,prop),
                    changeShow  : this.changeShow.bind(this,prop),
                }
            }
            
        };

        return obj;
    }

    change = (changeCB,key, value) =>{
        let actions  = this.createActions(key);

        changeCB(value, actions)
    }
    renderSelects = () =>{
        const {config} = this.props;
        let selectDoms = [];
        
        for(let prop in config) {
            let item = config[prop]
            if (this.state[`${prop}Show`]) {
                selectDoms.push(
                    <Select 

                    
                        change={this.change.bind(this , item.change, prop)}    
                        label={item.label}
                        values ={this.state[`${prop}Values`]}
                        mapping = {item.mapping} 
                        defaultValue ={this.state[`${prop}DefaultValue`]}
                        nullable={true}
                        outline={true} 
                        search = {true}
                    />
                )
            }
            
        }

        return selectDoms;
        
    }
    render () {
        return (
            <Fragment>
                {this.renderSelects()}
            </Fragment>
            

        )
    }
}


export default DependencySelect;
