import React, {Component,Fragment} from 'react';
import {Autocomplete} from '../components/ReactForm';

class ButtonContainer extends Component {


  render (){
    const sampleIcon = <svg viewBox="0 0 24 24"><path fill="#000000" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>;
    return (
      <Fragment>
        
     
        <div className="page-content-box" >
          <div className="page-content-title">Button</div>
             <button type="button" class="r-button r-ripple r-lg r-info r-gradient"> Download</button>
          <button type="button" class="r-button r-ripple r-info r-gradient"> Download </button>
          <button type="button" class="r-button r-ripple r-xs r-info r-gradient"> Download </button>
          <button type="button" class="r-button r-ripple r-xs r-info  r-gradient r-rounded"> Download </button><br />

          <button type="button" class="r-button r-ripple r-lg r-info"> Download</button>
          <button type="button" class="r-button r-ripple r-info"> Download </button>
          <button type="button" class="r-button r-ripple r-xs r-info"> Download </button>
          <button type="button" class="r-button r-ripple r-xs r-info r-rounded"> Download </button><br />

          <button type="button" class="r-button r-ripple r-lg r-success"> Download</button>
          <button type="button" class="r-button r-ripple r-success"> Download </button>
          <button type="button" class="r-button r-ripple r-xs r-success"> Download </button>
          <button type="button" class="r-button r-ripple r-xs r-success r-rounded"> Download </button><br />


          <button type="button" class="r-button r-ripple r-lg r-warning"> Download</button>
          <button type="button" class="r-button r-ripple r-warning"> Download </button>
          <button type="button" class="r-button r-ripple r-xs r-warning"> Download </button>
          <button type="button" class="r-button r-ripple r-xs r-warning r-rounded"> Download </button><br />


          <button type="button" class="r-button r-ripple r-lg r-danger"> Download</button>
          <button type="button" class="r-button r-ripple r-danger"> Download </button>
          <button type="button" class="r-button r-ripple r-xs r-danger"> Download </button>
          <button type="button" class="r-button r-ripple r-xs r-danger r-rounded"> Download </button><br />


          <button type="button" class="r-button r-ripple r-lg r-default"> Download</button>
          <button type="button" class="r-button r-ripple r-default"> Download </button>
          <button type="button" class="r-button r-ripple r-xs r-default"> Download </button>
          <button type="button" class="r-button r-ripple r-xs r-default  r-rounded"> Download </button><br /> 

          <button type="button" class="r-button r-ripple r-lg r-bordered"> Download</button>
          <button type="button" class="r-button r-ripple r-bordered"> Download </button>
          <button type="button" class="r-button r-ripple r-xs r-bordered"> Download </button>
          <button type="button" class="r-button r-ripple r-xs r-bordered  r-rounded"> Download </button><br /> 

          <button type="button" class="r-button r-ripple r-lg"> Download</button>
          <button type="button" class="r-button r-ripple "> Download </button>
          <button type="button" class="r-button r-ripple r-xs "> Download </button>
          <button type="button" class="r-button r-ripple r-xs r-rounded"> Download </button><br /> 
        </div>



      


        <div className="page-content-box" style={{textAlign:'right',direction:'rtl'}}>
          <div className="page-content-title">Rtl buttons</div>
         
         
              <button type="button" class="r-button r-ripple r-lg r-info r-gradient"> دانلود نرم افزار</button>
            <button type="button" class="r-button r-ripple r-info r-gradient"> دانلود نرم افزار </button>
            <button type="button" class="r-button r-ripple r-xs r-info r-gradient"> دانلود نرم افزار </button>
            <button type="button" class="r-button r-ripple r-xs r-info  r-gradient r-rounded"> دانلود نرم افزار </button><br />

            <button type="button" class="r-button r-ripple r-lg r-info"> دانلود نرم افزار</button>
            <button type="button" class="r-button r-ripple r-info"> دانلود نرم افزار </button>
            <button type="button" class="r-button r-ripple r-xs r-info"> دانلود نرم افزار </button>
            <button type="button" class="r-button r-ripple r-xs r-info r-rounded"> دانلود نرم افزار </button><br />

            <button type="button" class="r-button r-ripple r-lg r-success"> دانلود نرم افزار</button>
            <button type="button" class="r-button r-ripple r-success"> دانلود نرم افزار </button>
            <button type="button" class="r-button r-ripple r-xs r-success"> دانلود نرم افزار </button>
            <button type="button" class="r-button r-ripple r-xs r-success r-rounded"> دانلود نرم افزار </button><br />


            <button type="button" class="r-button r-ripple r-lg r-warning"> دانلود نرم افزار</button>
            <button type="button" class="r-button r-ripple r-warning"> دانلود نرم افزار </button>
            <button type="button" class="r-button r-ripple r-xs r-warning"> دانلود نرم افزار </button>
            <button type="button" class="r-button r-ripple r-xs r-warning r-rounded"> دانلود نرم افزار </button><br />


            <button type="button" class="r-button r-ripple r-lg r-danger"> دانلود نرم افزار</button>
            <button type="button" class="r-button r-ripple r-danger"> دانلود نرم افزار </button>
            <button type="button" class="r-button r-ripple r-xs r-danger"> دانلود نرم افزار </button>
            <button type="button" class="r-button r-ripple r-xs r-danger r-rounded"> دانلود نرم افزار </button><br />


            <button type="button" class="r-button r-ripple r-lg r-default"> دانلود نرم افزار</button>
            <button type="button" class="r-button r-ripple r-default"> دانلود نرم افزار </button>
            <button type="button" class="r-button r-ripple r-xs r-default"> دانلود نرم افزار </button>
            <button type="button" class="r-button r-ripple r-xs r-default  r-rounded"> دانلود نرم افزار </button><br /> 

            <button type="button" class="r-button r-ripple r-lg r-bordered"> دانلود نرم افزار</button>
            <button type="button" class="r-button r-ripple r-bordered"> دانلود نرم افزار </button>
            <button type="button" class="r-button r-ripple r-xs r-bordered"> دانلود نرم افزار </button>
            <button type="button" class="r-button r-ripple r-xs r-bordered  r-rounded"> دانلود نرم افزار </button><br /> 

            <button type="button" class="r-button r-ripple r-lg"> دانلود نرم افزار</button>
            <button type="button" class="r-button r-ripple "> دانلود نرم افزار </button>
            <button type="button" class="r-button r-ripple r-xs "> دانلود نرم افزار </button>
            <button type="button" class="r-button r-ripple r-xs r-rounded"> دانلود نرم افزار </button><br /> 

       
        </div>
    
      </Fragment>
      
    );
  }
  
}

export default ButtonContainer;
