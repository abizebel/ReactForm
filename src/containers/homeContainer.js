import React, {Component,Fragment} from 'react';
import {Input, Select, Autocomplete, Tag} from './components/ReactForm';

class HomeContainer extends Component {

  changeInput (val){
   console.log(val)
  }
  render (){
    const sampleIcon = <svg viewBox="0 0 24 24"><path fill="#000000" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>;
    const boxStyle ={width:'500px', padding : '40px',border : '1px solid #ddd',margin : '50px auto',boxShadow : '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)'}
    const boxTileStyle = {fontSize : '15px',fontWeight: 'bold',paddingBottom :'40px'};
    return (
      <Fragment>
         <div style={boxStyle} >
           <h1 >React Material Forms</h1>  
           <h3 >Author : Abbas Hosseini</h3>
           <h3 >Features : </h3>
           <ul>
             <li>Pure Html/Css version for razor pages</li>
             <li>Clean Code</li>
             <li>Easy to Use</li>
             <li>Supports RTL</li>
             <li>Object Oriented & Extensible</li>
             <li>Both Oulined & inlined Components</li>
           </ul>
           <h3 >Components :</h3>
           <ul>
             <li>Input</li>
             <li>Tag</li>
             <li>Checkbox</li>
             <li>Autocomplete</li>
             <li>Select</li>  
           </ul>
         </div>

      </Fragment>
      
    );
  }
  
}

export default HomeContainer;
