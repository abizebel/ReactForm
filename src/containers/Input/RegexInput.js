import React, {Component,Fragment} from 'react';
import {Input} from '../../components/ReactForm';

class InputContainer extends Component {

  changeInput (val){
   console.log(val)
  }
  render (){
    const sampleIcon = <svg viewBox="0 0 24 24"><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>;
    return (
      <Fragment>

        
        <div className="content-box" >
          <div className="content-title">Regex Validation Input (EX : numbers)</div>
          <Input 
            label={'Phone Number'}
            value={''} 
            regex = {{pattern :  /^\d+$/, message : 'Should be a number'}}
            change={this.changeInput.bind(this)} />
          <Input 
            regex = {{pattern :  /^\d+$/, message : 'لطفا عدد وارد کنید'}}
            label={'شماره تلفن'}
            rtl={true} 
            value={''} 
            change={this.changeInput.bind(this)} 
          />
        </div>
        <div className="content-box" >
          <div className="content-title">Outlined Regex Validation Input (EX : numbers)</div>
          <Input 
            label={'Phone Number'}
            value={''} 
            outline={true}
            regex = {{pattern :  /^\d+$/, message : 'Should be a number'}}
            change={this.changeInput.bind(this)} />
          <Input 
            regex = {{pattern :  /^\d+$/, message : 'لطفا عدد وارد کنید'}}
            label={'شماره تلفن'}
            rtl={true} 
            outline={true}
            value={''} 
            change={this.changeInput.bind(this)} 
          />
        </div>



      </Fragment>
      
    );
  }
  
}

export default InputContainer;
