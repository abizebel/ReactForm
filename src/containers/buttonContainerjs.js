import React, {Component,Fragment} from 'react';
import {Autocomplete} from '../components/ReactForm';

class ButtonContainer extends Component {


  render (){
    const sampleIcon = <svg viewBox="0 0 24 24"><path fill="#000000" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>;
    return (
      <Fragment>
        
     
        <div className="page-content-box" >
          <div className="page-content-title">Button</div>
          <div class="rf-button "><div class=" rf-button-text rf-ripple rf-big"> Download</div></div>
            <div class="rf-button "><div class=" rf-button-text rf-ripple rf-normal"> Download</div></div>
            <div class="rf-button "><div class=" rf-button-text rf-ripple rf-samll"> Download</div> </div><br />

            <div class="rf-button"><div class=" rf-button-text rf-ripple rf-big rf-gradient"> Download</div></div>
            <div class="rf-button"><div class=" rf-button-text rf-ripple rf-normal rf-gradient"> Download</div></div>
            <div class="rf-button"><div class=" rf-button-text rf-ripple rf-samll rf-gradient"> Download</div> </div><br />


            <div class="rf-button"><div class=" rf-button-text rf-ripple rf-big rf-gradient rf-rounded"> Download</div></div>
            <div class="rf-button"><div class=" rf-button-text rf-ripple rf-normal rf-gradient rf-rounded"> Download</div></div>
            <div class="rf-button"><div class=" rf-button-text rf-ripple rf-samll rf-gradient rf-rounded"> Download</div> </div><br />

            <div class="rf-button"><div class=" rf-button-text rf-ripple rf-big rf-rounded"> Download</div></div>
            <div class="rf-button"><div class=" rf-button-text rf-ripple rf-normal rf-rounded"> Download</div></div>
            <div class="rf-button"><div class=" rf-button-text rf-ripple rf-samll rf-rounded"> Download</div> </div><br />
             
            <div class="rf-button"><div class=" rf-button-text rf-ripple  rf-flat rf-big"> Download</div></div>
            <div class="rf-button"><div class=" rf-button-text rf-ripple rf-flat rf-normal"> Download</div></div>
            <div class="rf-button"><div class=" rf-button-text rf-ripple rf-flat rf-samll"> Download</div> </div><br /><br />
             
            <div class="rf-button"><div class=" rf-button-text rf-ripple rf-big   rf-rounded rf-flat"> Download</div></div>
            <div class="rf-button"><div class=" rf-button-text rf-ripple rf-normal   rf-rounded  rf-flat"> Download</div></div>
            <div class="rf-button"><div class=" rf-button-text rf-ripple rf-samll   rf-rounded rf-flat"> Download</div> </div><br />

            <div class="rf-button"><div class=" rf-button-text rf-ripple rf-big  rf-simple  rf-flat"> Download</div></div>
            <div class="rf-button"><div class=" rf-button-text rf-ripple rf-normal rf-simple    rf-flat"> Download</div></div>
            <div class="rf-button"><div class=" rf-button-text rf-ripple rf-samll  rf-simple  rf-flat"> Download</div> </div>
             

        </div>



      


        <div className="page-content-box" >
          <div className="page-content-title">Rtl buttons</div>
          <div class="rf-button rf-rtl"><div class=" rf-button-text rf-ripple rf-big"> دانلود نرم افزار</div></div>
            <div class="rf-button rf-rtl"><div class=" rf-button-text rf-ripple rf-normal"> دانلود نرم افزار</div></div>

            <div class="rf-button rf-rtl"><div class=" rf-button-text rf-ripple rf-samll"> دانلود نرم افزار</div> </div><br />

            <div class="rf-button rf-rtl"><div class=" rf-button-text rf-ripple rf-big rf-gradient"> دانلود نرم افزار</div></div>
            <div class="rf-button rf-rtl"><div class=" rf-button-text rf-ripple rf-normal rf-gradient"> دانلود نرم افزار</div></div>
            <div class="rf-button rf-rtl"><div class=" rf-button-text rf-ripple rf-samll rf-gradient"> دانلود نرم افزار</div> </div><br />

            <div class="rf-button rf-rtl"><div class=" rf-button-text rf-ripple rf-big rf-gradient rf-rounded"> دانلود نرم افزار</div></div>
            <div class="rf-button rf-rtl"><div class=" rf-button-text rf-ripple rf-normal rf-gradient rf-rounded"> دانلود نرم افزار</div></div>
            <div class="rf-button rf-rtl"><div class=" rf-button-text rf-ripple rf-samll rf-gradient rf-rounded"> دانلود نرم افزار</div> </div><br />

            <div class="rf-button rf-rtl"><div class=" rf-button-text rf-ripple rf-big rf-rounded"> دانلود نرم افزار</div></div>
            <div class="rf-button rf-rtl"><div class=" rf-button-text rf-ripple rf-normal rf-rounded"> دانلود نرم افزار</div></div>
            <div class="rf-button rf-rtl"><div class=" rf-button-text rf-ripple rf-samll rf-rounded"> دانلود نرم افزار</div> </div><br />
             
            <div class="rf-button rf-rtl"><div class=" rf-button-text rf-ripple  rf-flat rf-big"> دانلود نرم افزار</div></div>
            <div class="rf-button rf-rtl"><div class=" rf-button-text rf-ripple rf-flat rf-normal"> دانلود نرم افزار</div></div>
            <div class="rf-button rf-rtl"><div class=" rf-button-text rf-ripple rf-flat rf-samll"> دانلود نرم افزار</div> </div><br />
             
            <div class="rf-button rf-rtl"><div class=" rf-button-text rf-ripple rf-big   rf-rounded rf-flat"> دانلود نرم افزار</div></div>
            <div class="rf-button rf-rtl"><div class=" rf-button-text rf-ripple rf-normal   rf-rounded  rf-flat"> دانلود نرم افزار</div></div>
            <div class="rf-button rf-rtl"><div class=" rf-button-text rf-ripple rf-samll   rf-rounded rf-flat"> دانلود نرم افزار</div> </div><br /> 

                
            <div class="rf-button rf-rtl"><div class=" rf-button-text rf-ripple rf-big rf-simple  rf-flat"> دانلود نرم افزار</div></div>
            <div class="rf-button rf-rtl"><div class=" rf-button-text rf-ripple rf-normal  rf-simple   rf-flat"> دانلود نرم افزار</div></div>
            <div class="rf-button rf-rtl"><div class=" rf-button-text rf-ripple rf-samll   rf-simple rf-flat"> دانلود نرم افزار</div> </div> 
        </div>
    
      </Fragment>
      
    );
  }
  
}

export default ButtonContainer;
