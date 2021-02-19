
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
        <div className="content-box"  dir="rtl">
         
        <div className="content-box" >
          <div className="content-title">Tree</div>
        </div >
            <Tree
                change ={(value)=>{console.log(value)}}
                mapping = {{ parentId : 'ParentId',id : 'Id', children : 'Children', code : 'Code', text : 'Name'}}
                code={true}
                data = {flatData}// 
                rtl={true}
                dataType = "flat" //(flat/composition)
                iconTempalte ={icon =>{
                  return (<img style={{width:50, padding:10}} src={icon.url} />)
                }}
            />
        </div>
      </Fragment>
    );
  }
  
}

export default TreeContainer;
