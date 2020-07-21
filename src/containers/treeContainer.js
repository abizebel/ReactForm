
import React, {Component,Fragment} from 'react';
import {Tree} from '../components/ReactForm';
import flatData from '../components/ReactForm/Tree/flatData'
import compositionData from '../components/ReactForm/Tree/compositionData'


class TreeContainer extends Component {

  changeTree (val){
    console.log(val)
  }


  render (){
    return (
      <Fragment>
        <div className="content-box" >
         
        <div className="content-box" >
          <div className="content-title">Tree</div>
        </div>
            <Tree
                mapping = {{ parentId : 'ParentId',id : 'Id', children : 'Children'}}
                data = {flatData}// 
                dataType = "flat" //(flat/composition)
                fields ={{ text : 'Name' }}
                iconTempalte ={icon =>{
                  return (<span style={{paddingRight : 5, color:icon.color}} className={icon.name}></span>)
                }}
            />
        </div>
      </Fragment>
    );
  }
  
}

export default TreeContainer;
