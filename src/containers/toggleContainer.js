import React, {Component,Fragment} from 'react';
import { Toggle } from '../components/ReactForm';

class ToggleContainer extends Component {

  changeToggle (val){
   console.log('toggle is : '+val)
  }
  render (){
    return (
      <Fragment>

        <div className="page-content-box" >
            <div className="page-content-title">Toggle</div>
            <Toggle
                rtl={true}
                size={'lg'}
                change={this.changeToggle}
                value={true}
                disabled={true}
            />
            <Toggle
                rtl={true}
                size={'lg'}
                change={this.changeToggle}
                value={true}
            />
            <Toggle
                rtl={true}
                size={'lg'}
                change={this.changeToggle}
                value={true}
            />
        </div>
         
      </Fragment>
      
    );
  }
  
}

export default ToggleContainer;
