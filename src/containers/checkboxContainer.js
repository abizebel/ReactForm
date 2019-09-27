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
                defaultValue={true}
                label={'I Agree'}
                change={this.changeCheckbox.bind(this)}
                size={'lg'}
            />
            <Checkbox 
                label={'I Agree'}
                change={this.changeCheckbox.bind(this)}
                disabled={true}
                size={'lg'}
            /><br />
            <Checkbox 
                label={'I Agree'}
                change={this.changeCheckbox.bind(this)}
            />
            <Checkbox 
                label={'I Agree'}
                disabled={true}
                change={this.changeCheckbox.bind(this)}
            /><br />
            <Checkbox 
                label={'I Agree'}
                change={this.changeCheckbox.bind(this)}
                size={'xs'}
            />
            <Checkbox 
                label={'I Agree'}
                change={this.changeCheckbox.bind(this)}
                disabled={true}
                size={'xs'}
            /><br />
 

        </div>
        <div className="page-content-box" style={{textAlign:'right',direction:'rtl'}}>
          <div className="page-content-title">RTL Checkbox  & Disabled</div>
          <Checkbox 
                label={'موافقم'}
                change={this.changeCheckbox.bind(this)}
                size={'lg'}
            />
            <Checkbox 
                label={'موافقم'}
                change={this.changeCheckbox.bind(this)}
                disabled={true}
                size={'lg'}
            /><br />
            <Checkbox 
                label={'موافقم'}
                change={this.changeCheckbox.bind(this)}
            />
            <Checkbox 
                label={'موافقم'}
                disabled={true}
                change={this.changeCheckbox.bind(this)}
            /><br />
            <Checkbox 
                label={'موافقم'}
                change={this.changeCheckbox.bind(this)}
                size={'xs'}
            />
            <Checkbox 
                label={'موافقم'}
                change={this.changeCheckbox.bind(this)}
                disabled={true}
                size={'xs'}
            /><br />

        </div>
    
      </Fragment>
      
    );
  }
  
}

export default CheckboxContainer;
