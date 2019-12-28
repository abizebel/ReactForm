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
                {field : 'number' },
                {field : 'ccy' },
                {field : 'balance' }
            
            ]}
            data = {[
                {
                    name : 'David Washington',
                    type : 'Private',
                    number : '456456456465465',
                    ccy : 'EUR',
                    balance : '6555465465adasdasdasdasdujhuasihykahyddjhwayhedi4564'
                },
                {
                    name : 'David Washington',
                    type : 'Private',
                    number : '456456456465465',
                    ccy : 'EUR',
                    balance : '65554654654564'
                },
                {
                    name : 'David Washington',
                    type : 'Private',
                    number : '456456456465465',
                    ccy : 'EUR',
                    balance : '65554654654564'
                }
            ] }
          
          />

        </div>

      </Fragment>
      
    );
  }
  
}

export default TableContainer;
