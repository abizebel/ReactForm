import React, {Component} from 'react';
import TableContext from './TableContext';




class Cell extends Component {
    static contextType = TableContext;
    render (){
        const {col, row} = this.props;
        

        return (
            (
                <td data-title={col.field}>
                    {row[col.field]}
                </td>
            )
        )
    }
}


export default Cell