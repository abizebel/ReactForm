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
          <div className="page-content-title">Table</div>
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
                {field : 'balance',width:200 }
            
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
                    name : 'Adel feiz',
                    type : 'Private',
                    number : '12',
                    ccy : 2,
                    balance : '476'
                },
                {
                    name : 'Mina Aghapour',
                    type : 'Private',
                    number : '22',
                    ccy : 3,
                    balance : '22'
                },
                {
                  name : 'David Washington',
                  type : 'Private',
                  number : '21232',
                  ccy : 3,
                  balance : '21232'
              },
              {
                name : 'Abbas Hosseini',
                type : 'Private',
                number : '22',
                ccy : 2,
                balance : '21232'
            },
            {
              name : 'Bratt Pitt',
              type : 'Private',
              number : '22',
              ccy : 1,
              balance : '2232'
            },
            {
              name : 'Reza Ranjbar',
              type : 'Private',
              number : '22',
              ccy : 3,
              balance : '1'
            },
            {
              name : 'David Washington',
              type : 'Private',
              number : '11',
              ccy : 2,
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
