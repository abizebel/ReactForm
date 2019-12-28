import React, {Component} from 'react';
import TableContext from './TableContext';
import Cell from './Cell';


class Row extends Component {
    static contextType = TableContext;

    renderCells (){
        const {columns} = this.context;
        const {row, index} = this.props;


        return columns.map((o, i) => {
            return (
                <Cell
                    key={i}
                    row={row}
                    col={o}
                    rowIndex = {index}
                />
            )
        })
    }


    render (){



        return (
            <tr>
                {this.renderCells()} 
            </tr>
        )
    }
}


export default Row