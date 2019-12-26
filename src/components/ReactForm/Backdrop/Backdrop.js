import React, {Component} from 'react';
import './Backdrop.scss';



class Backdrop extends Component {
    render (){
        const {onClick} = this.props;

        return (
           <div className="r-backdrop" onClick={onClick} >
           </div>
        )
    }
}


export default Backdrop