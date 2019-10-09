import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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

        return  (<ul className="r-modal-sidebar">{sidebarItems}</ul>)
    }

    /**
     * Render buttons
     */
    renderButtons (){
        const {buttons, rtl} = this.props;
        return buttons.map((o, i) => {
            return (
                <li key={i} onClick={o.callback}>
                    <button type="button" className="r-button r-ripple r-xs r-defualt r-nospace"> 
                        {!rtl && o.icon && createIcon(o.icon)}
                        &nbsp;{o.text && o.text}&nbsp;
                        {rtl && o.icon && createIcon(o.icon)}
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
            <Fragment>
                <ReactCSSTransitionGroup 
                transitionName="fade" 
                transitionAppear={true}>
                    <div className="r-mode-backdrop"></div>
                </ReactCSSTransitionGroup>
               
                <ReactCSSTransitionGroup 
                transitionName={`slide-${rtl?'right':'left'}`} 
                transitionAppear={true}>
                    <div className={`r-modal${rtlClass}`} style={{width}}>
                        <div className="r-modal-header">
                            <div className="r-modal-title">{label}</div> 
                            <ul className="r-modal-buttons">
                                <li>
                                    <button onClick={onClose} type="button" className="r-button r-ripple r-xs r-defualt r-nospace"> 
                                        <span className="mdi mdi-close"></span>
                                    </button>
                                </li>
                                {this.renderButtons()}
                            </ul>
                        </div>

                        <div className="r-modal-body">
                            
                            {sidebar && this.renderSidebar()}

                            <div className="r-modal-content">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </ReactCSSTransitionGroup>
                
            </Fragment>      
        )
    }
}

Modal.defaultProps = {
    rtl : false,
    buttons : [],
}

export default Modal