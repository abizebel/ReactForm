import React, {Component,Fragment, createRef} from 'react';
import { RightClick } from '../../components/ReactForm';
import Backdrop from '../../components/ReactForm/Backdrop/Backdrop';



class RightClickContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            posx : null, 
            posY : null,
            show : false
        }

        this.dom = createRef();
        
    }
    change (val){
        console.log(val)
    }
    
    handler = e =>{
        e.preventDefault();
        e.stopPropagation()
        this.setState({
            posX : e.pageX, 
            posY : e.pageY,
            show:true
        })

        
      
    }
    close = () => {

        this.setState({show:false})
    }
    getMenuItems = () =>{
        return [
            {   
                icon : 'mdi mdi-content-cut',
                shortKey : 'Ctrl+X',
                name : 'برداشتن',
                cb : () =>{
                    alert(1)
                }
            },
            {   
                icon : 'mdi mdi-content-copy',
                shortKey : 'Ctrl+C',
                name : 'کپ کردن',
                cb : () =>{
                    alert(2)
                }
            },
            {   
                icon : 'mdi mdi-content-paste',
                shortKey : 'Ctrl+V',
                name : 'چسباندن',
                cb : () =>{
                    alert(3)
                },
                seperator : true
            },
            {
                name : 'ویرایش',
                icon : 'mdi mdi-pencil',

                cb : () =>{
                    alert(1)
                },
                children : [
                    {   
                        icon : 'mdi mdi-content-cut',
                        shortKey : 'Ctrl+X',
                        name : 'برداشتن',
                        cb : () =>{
                            alert(1)
                        }
                    },
                    {   
                        icon : 'mdi mdi-content-copy',
                        shortKey : 'Ctrl+C',
                        name : 'کپ کردن',
                        cb : () =>{
                            alert(2)
                        }
                    },
                    {   
                        icon : 'mdi mdi-content-paste',
                        shortKey : 'Ctrl+V',
                        name : 'چسباندن',
                        cb : () =>{
                            alert(3)
                        },
                        seperator : true
                    },
                ]
            }
        ]
    }
    render (){
        const {posX, posY, show } = this.state;
        return (
            <div className="content-box" >
                <div className="content-title">RTL Right Click</div>

                
                <div 
                    onContextMenu={this.handler} 
                    ref={this.dom} 
                    style={{position:'relative',width:600, height: 600, border: '1px solid #ccc'}}
                >
                </div>
               
                {   show && 
                    <RightClick 
                    onClose={this.close} 
                    items={this.getMenuItems()} 
                    posX={posX} 
                    posY={posY} 
                    style={{minHeight:100}}
                    rtl={true} />
                }
            </div>        
        );
    }
  
}

export default RightClickContainer;
