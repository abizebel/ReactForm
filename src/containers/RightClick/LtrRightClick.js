import React, {Component,Fragment, createRef} from 'react';
import { RightClick } from '../../components/ReactForm';



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
        document.addEventListener('contextmenu', event => event.preventDefault());

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
                name : 'Cut',
                cb : () =>{
                    alert(1)
                }
            },
            {   
                icon : 'mdi mdi-content-copy',
                shortKey : 'Ctrl+C',
                name : 'Copy',
                cb : () =>{
                    alert(2)
                }
            },
            {   
                icon : 'mdi mdi-content-paste',
                shortKey : 'Ctrl+V',
                name : 'Paste',
                cb : () =>{
                    alert(3)
                },
                seperator : true
            },
            {
                icon : 'mdi mdi-pencil',
                name : 'Edit',
                cb : () =>{
                    alert(1)
                },
                children : [
                    {   
                        icon : 'mdi mdi-content-cut',
                        shortKey : 'Ctrl+X',
                        name : 'Cut',
                        cb : () =>{
                            alert(1)
                        }
                    },
                    {   
                        icon : 'mdi mdi-content-copy',
                        shortKey : 'Ctrl+C',
                        name : 'Copy',
                        cb : () =>{
                            alert(2)
                        }
                    },
                    {   
                        icon : 'mdi mdi-content-paste',
                        shortKey : 'Ctrl+V',
                        name : 'Paste',
                        cb : () =>{
                            alert(3)
                        }
                    },
                ]
            }
        ]
    }
    render (){
        const {posX, posY, show } = this.state;

        return (
        <Fragment>
                  <div className="content-box" >
                <div className="content-title">LTR Right Click</div>

                
                <div 
                    onContextMenu={this.handler} 
                    ref={this.dom} 
                    style={{position:'relative',width:600, height: 600, border: '1px solid #ccc'}}
                >
                </div>
               
                {show && <RightClick onClose={this.close} items={this.getMenuItems()} posX={posX} posY={posY}  /> }
            </div>
            
            

        </Fragment>
        
        );
    }
  
}

export default RightClickContainer;
