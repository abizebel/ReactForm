import React, {Component} from 'react';
import './Backdrop.scss';



class Backdrop extends Component {
    render (){

        return (
           <span className="r-backdrop" {...this.props} >
           </span>
        )
    }
}


export default Backdrop