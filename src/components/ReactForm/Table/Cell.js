import React, {Component, Fragment} from 'react';
import TableContext from './TableContext';
import Input from '../Input/Input';
import Select from '../Select/Select';


class Cell extends Component {
    static contextType = TableContext;

    constructor (props) {
        super(props);

        this.state = {
            editMode : false,
        }
    }

    startEdit = () => {
        this.setState({ editMode : true })
    }

    endEdit = () => {
        this.setState({ editMode : false })
    }

    enter = (e) => {
        if(e.keyCode === 13) {
            this.endEdit();
        }
    }
    
    editMode(){
        const {row, rowIndex, col} = this.props;
        const {changeCell} = this.context;
        const value = row[col.field]

        if (col.type === 'select') {
            return (
                <Select
                    style={{margin:0}}
                    defaultValue={1}
                    change={val => {
                        changeCell(rowIndex, col, val) ;
                        this.endEdit()
                    }}
                    mapping={col.mapping}
                    values = {col.values}
                    border={false}

                />
            )
        }

        else {
            return (
                <Input
                    style={{margin:0, zIndex : 10}}
                    value={value}
                    change={val => { changeCell(rowIndex, col, val) }}
                    autoFocus={true}
                    onBlur={this.endEdit}
                    onKeyUp={this.enter}
                />
            )
        }

        
    }

    readMode(){
        const {row , col} = this.props;
        return  row[col.field];
    }

    
    render (){
        const {col} = this.props;
        const {edit} = this.context;
        const {editMode} = this.state;
        const showEditMode = col.type || (edit && editMode ) ;


        return (
            (
                <td className={`${editMode ? 'edit' : ''}`} data-title={col.field} onClick={this.startEdit}>
                   { showEditMode? this.editMode() : this.readMode() }
                </td>
            )
        )
    }
}


export default Cell