import React, {Component, Fragment} from 'react';


class Input extends Component {
    constructor (props) {
        super(props);
    }



    render (){
        return (
            
            <div className="rf-input  rf-error">
                <input type="text" className="filled" value="abbas" />
                <label>Last Name</label>
                <span className="rf-line"></span>
                {/* <span className="rf-icon"><?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg></span> */}
                <span className="rf-message">You should fill this field</span>    
            </div>
        )
    }

}



export default Input