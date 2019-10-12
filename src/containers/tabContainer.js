import React, {Component,Fragment} from 'react';
import { Tabs } from '../components/ReactForm';



const tmp1 = (obj) =>{
    return '111111'
}
const tmp2 = (obj) =>{
    return '22222'
}
const tmp3 = (obj) =>{
    return '33333'
}
class TabContainer extends Component {

  changeToggle (val){
   console.log('toggle is : '+val)
  }
  render (){
    return (
      <Fragment>

        <div className="page-content-box" >
            <div className="page-content-title">Tab</div>
            <Tabs
                items = {[
                    {label : 'One', icon : '', template: tmp1},
                    {label : 'two', icon : '', template:tmp2 },
                    {label : 'three', icon : '', template:tmp3 },
                ]}
            />
                
            
        </div>
        <div className="page-content-box" >
            <div className="page-content-title">RTL Tab</div>
            <Tabs
                rtl={true}
                items = {[
                    {label : 'One', icon : '', template: tmp1},
                    {label : 'two', icon : '', template:tmp2 },
                    {label : 'three', icon : '', template:tmp3 },
                ]}
            />
                
            
        </div>
         
         
      </Fragment>
      
    );
  }
  
}

export default TabContainer;
