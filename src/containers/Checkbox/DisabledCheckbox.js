import React, {Component,Fragment} from 'react';
import {Checkbox} from '../../components/ReactForm';

class CheckboxContainer extends Component {

  changeCheckbox (val){
   console.log(val)
  }
  render (){
    return (
      <Fragment>
        
     
        <div className="content-box" >
          <div className="content-title">Checkbox & Disabled</div>
            <Checkbox 
                disabled={true}
                defaultValue={true}
                label={'I Agree'}
                change={this.changeCheckbox.bind(this)}
                size={'lg'}
            />
            <br />
 
            <Checkbox
                disabled={true} 
                label={'I Agree'}
                change={this.changeCheckbox.bind(this)}
            />
            <br />
            <Checkbox 
                disabled={true}
                label={'I Agree'}
                change={this.changeCheckbox.bind(this)}
                size={'xs'}
            />
   
 

        </div>
        <div className="content-box" style={{textAlign:'right',direction:'rtl'}}>
          <div className="content-title">RTL Checkbox  & Disabled</div>
          <Checkbox 
                disabled={true}
                label={'موافقم'}
                change={this.changeCheckbox.bind(this)}
                size={'lg'}
            />
             <br />
            <Checkbox 
                disabled={true}
                label={'موافقم'}
                change={this.changeCheckbox.bind(this)}
            />
             <br />
            <Checkbox 
                disabled={true}
                label={'موافقم'}
                change={this.changeCheckbox.bind(this)}
                size={'xs'}
            />
 

        </div>
    
      </Fragment>
      
    );
  }
  
}

export default CheckboxContainer;
