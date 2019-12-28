import React, {Component,Fragment} from 'react';
import { Table} from '../components/ReactForm';


class TableContainer extends Component {



  changeTag (val){
   console.log(val)
  }
  render (){
    return (
      <Fragment>

        <div className="page-content-box" >
          <div className="page-content-title">Tag</div>
          <Table
            columns = {[
                {field : 'name' },
                {field : 'type' },
                {
                    field : 'ccy',
                    type:'select',
                    values : [
                        {Name : 'Iran', Id : 1},
                        {Name : 'Iraq', Id : 2},
                        {Name : 'Usa', Id : 3},
                        {Name : 'Turkey', Id : 4},

                    ],
                    mapping : {text : 'Name', value : 'Id'}
                },
                {field : 'balance' }
            
            ]}
            data = {[
                {
                    name : 'David Washington',
                    type : 'Private',
                    number : '78',
                    ccy : 1,
                    balance : '8857'
                },
                {
                    name : 'David Washisangton',
                    type : 'Private',
                    number : '12',
                    ccy : 2,
                    balance : '476'
                },
                {
                    name : 'David Washington',
                    type : 'Private',
                    number : '22',
                    ccy : 3,
                    balance : '22'
                }
            ] }
            edit = {true}
            change={val => {
                console.log(val)
            }}
          />

        </div>

      </Fragment>
      
    );
  }
  
}

export default TableContainer;
