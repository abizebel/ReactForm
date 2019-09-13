import React, {Component,Fragment} from 'react';
import {Checkbox} from '../components/ReactForm';

class CheckboxContainer extends Component {

  changeCheckbox (val){
   console.log(val)
  }
  render (){
    return (
      <Fragment>
        
     
        <div className="page-content-box" >
          <div className="page-content-title">Checkbox & Disabled</div>
            <Checkbox 
                label={'I Agree'}
                change={this.changeCheckbox.bind(this)}
            />
             <Checkbox 
                label={'I Agree'}
                change={this.changeCheckbox.bind(this)}
                disabled={true}
            />

        </div>
        <div className="page-content-box" >
          <div className="page-content-title">RTL Checkbox  & Disabled</div>
          <Checkbox 
                label={'موافقم'}
                rtl={true}
                change={this.changeCheckbox.bind(this)}
            />
             <Checkbox 
                label={'موافقم'}
                rtl={true}
                change={this.changeCheckbox.bind(this)}
                disabled={true}
            />

        </div>
    
      </Fragment>
      
    );
  }
  
}

export default CheckboxContainer;
