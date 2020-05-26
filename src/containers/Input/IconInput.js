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

      
        <div className="page-content-box" >
          <div className="page-content-title">Input with Iocn</div>
          <Input 
            label={'Last Name'}
            value={'Hosseini'} 
            
            icon={sampleIcon}
            change={this.changeInput.bind(this)} />
          <Input 
            label={'نام خانوادگی'}
            icon={'mdi mdi-home'}
            rtl={true} 
            value={'حسینی'} 
            change={this.changeInput.bind(this)} 
          />
        </div>
        <div className="page-content-box" >
        <div className="page-content-title">Outlined Input with Iocn</div>
          <Input 
            label={'Last Name'}
            value={'Hosseini'} 
            outline={true}
            icon={sampleIcon}
            change={this.changeInput.bind(this)} />
          <Input 
            label={'نام خانوادگی'}
           icon={sampleIcon}
            rtl={true} 
            outline={true}

            value={'حسینی'} 
            change={this.changeInput.bind(this)} 
          />
          
        </div>
  


      </Fragment>
      
    );
  }
  
}

export default InputContainer;
