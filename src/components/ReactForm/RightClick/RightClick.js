import React, {Fragment, Component, createRef, useCallback} from 'react';
import './RightClick.scss'
import Backdrop from '../Backdrop/Backdrop'

class RightClick extends Component {



    renderChild = item=> {
        const{rtl} = this.props;

        if(!item.children) return null;

        return (
            <Fragment>
                {rtl ? <span className="r-clickmenu-submenu-arrow">◀</span> :  <span className="r-clickmenu-submenu-arrow">►</span>}
                <div className="r-clickmenu-submenu">
                    {this.traverseMenu(item.children)}
                </div>
            </Fragment>
        )
    }

    clickHandler = (o) =>{
        const {onClose} = this.props;
        
        o.cb ();
        onClose()
    }
    traverseMenu = items =>{
        return items.map((o, i) =>{
            return (
                <Fragment key={i}>
                    <div className="r-clickmenu-item" onClick={this.clickHandler.bind(this, o)}>
                        <div className="r-clickmenu-item-content">
                            <span className={`r-clickmenu-item-icon ${o.icon}` }></span>
                            <span className="r-clickmenu-item-label">{o.name}</span>
                            {this.renderChild(o)}
                            {!o.children && <span className="r-clickmenu-item-accel">{o.shortKey}</span>}
                        </div>
                    </div>
                    {o.seperator && <div className="r-clickmenu-menuseparator" ></div>}
                </Fragment>
            )

            
        })
    }

    renderMenu = () =>{
        const { posX, posY, rtl, items, style} = this.props;
        
        return (
            <div className={`r-clickmenu-menu ${rtl ?'rtl' : ''}`} style={{top :  posY, left :posX, ...style }}>
                {this.traverseMenu(items)}
            </div>
        )
    }

 

    render () {
        const {onClose} = this.props;

        return (
            <div>
                {this.renderMenu()}
                <Backdrop onClick={onClose} />

            </div>
        )
    }
}


RightClick.defaultProps = {
    rtl : false,
    style : {}
}

export default RightClick