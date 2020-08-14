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
    traverseMenu = items =>{
        return items.map((o, i) =>{
            return (
                <Fragment>
                    <div className="r-clickmenu-item">
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
        const { posX, posY, rtl, items} = this.props;
        
        return (
            <div className={`r-clickmenu-menu ${rtl ?'rtl' : ''}`} style={{top :  posY, left :posX }}>
                {this.traverseMenu(items)}
            </div>
        )
    }

 

    render () {
        const {onClose} = this.props;

        return (
            <Fragment>
                {this.renderMenu()}
                <Backdrop onClick={onClose} />

            </Fragment>
        )
    }
}


RightClick.defaultProps = {
    rtl : false,
}

export default RightClick