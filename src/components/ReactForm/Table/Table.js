import React, {Component} from 'react'
import TableContext from './TableContext';
import Row from './Row';
import './Table.scss';


class Table extends Component {

    renderRows (){
        const {data} = this.props;

        return data.map((o, i) => {
            return (<Row key={i} row={o} />)
        });
    }

    renderColumns (){
        const {columns} = this.props;

        const cols =  columns.map((o, i) => {
            return <th key={i}>{o.field}</th>
        })
        return (<tr>{cols}</tr>) 
    }

    render (){
        const {columns, data} = this.props;

        const contextValue = {
            columns,
            data
        }

        return (
            <TableContext.Provider value={contextValue}>
 
                <div class="r-table">
                    <div class="table-header">
                        <span class="table-title">Material Datatable</span>
                        <div class="actions">
                        <a href="#" class="search-toggle waves-effect btn-flat nopadding"><i class="material-icons">search</i></a>
                        </div>
                    </div>
                    <table >
                        <thead>
                            {this.renderColumns()}
                        </thead>
                        <tbody>
                            {this.renderRows ()}
                        </tbody>
                    </table>
                </div>
            </TableContext.Provider>
        )
    }
}


export default Table