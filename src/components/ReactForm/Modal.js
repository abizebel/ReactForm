import React, {Component} from 'react';
import {createIcon} from './functions';


class Modal extends Component {
    /**
     * Render modal sidebar
     */
    renderSidebar (){
        const {sidebar} = this.props;

        const sidebarItems =  sidebar.map((o, i) => {
            return (
                <li key={i} onClick={o.callback}>
                    {createIcon(o.icon)}
                </li>
            )
        });

        return  (<ul className="r-popup-sidebar">{sidebarItems}</ul>)
    }

    /**
     * Render buttons
     */
    renderButtons (){
        const {buttons} = this.props;
        return buttons.map((o, i) => {
            return (
                <li key={i} onClick={o.callback}>
                    <button type="button" className="r-button r-ripple r-xs r-defualt r-nospace"> 
                        {o.icon && createIcon(o.icon)}
                        {o.text && o.text}
                    </button>
                </li>
            )
        })
    }

    render (){
        const {label, sidebar, onClose, isOpen, rtl, width} = this.props;
        const rtlClass = rtl ? ' r-rtl' : '';
        if(!isOpen) return null;

        return (
            <div className={`r-popup${rtlClass}`} style={{width}}>
                <div className="r-popup-header">
                    <div className="r-popup-title">{label}</div> 
                    <ul className="r-popup-buttons">
                        <li>
                            <button onClick={onClose} type="button" className="r-button r-ripple r-xs r-defualt r-nospace"> 
                                <span className="mdi mdi-close"></span>
                            </button>
                        </li>
                        {this.renderButtons()}
                    </ul>
                </div>

                <div className="r-popup-body">
                    
                    {sidebar && this.renderSidebar()}

                    <div className="r-popup-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
                
        )
    }
}

Modal.defaultProps = {
    rtl : false,
    buttons : [],
}

export default Modal