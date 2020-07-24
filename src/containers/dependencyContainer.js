
import React, {Component,Fragment} from 'react';
import {DependencySelect} from '../components/ReactForm';


class DependencyContainer extends Component {

  change (val){
    console.log(val)
  }


  render (){
    return (
      <Fragment>
        <div className="content-box" >
         
        <div className="content-box" >
          <div className="content-title">Dependency Select</div>
        </div>
            <DependencySelect
              config = {{
                A : {
                  change:(val, actions)=>{
                    actions.B.changeShow(true)
                   // actions.B.changeValues([{Name : 'x', Id:1}, {Name : 'xx', Id:2}])
                    
                  },
                  label:'Select A',
                  values:[{Name : 'abbas', Id:1}, {Name : 'ali', Id:2}],
                  mapping:{text : 'Name' , value : 'Id'},
                  defaultValue:1,
                  show:true
                } ,
                B : {
                  change:(val, actions)=>{
                    console.log(val)
                  },
                  label:'Select B',
                  values:[{Name : 'jafar', Id:1}, {Name : 'hossein', Id:2}],
                  mapping:{text : 'Name' , value : 'Id'},
                  defaultValue:1,
                  show:false
                }
              }}

            />
        </div>
      </Fragment>
    );
  }
  
}

export default DependencyContainer;
