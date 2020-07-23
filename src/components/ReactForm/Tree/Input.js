import React, {Component, createRef} from 'react';
import $ from 'jquery';

class Input extends Component{
    constructor(props){
        super(props);
        this.state = {
            value : props.value
        }
        this.inputDom = createRef();
    }

    componentDidMount () {
        setTimeout(()=>{
            $(this.inputDom.current).select().focus()
        },100)
       
    }


    change = e => {
        this.setState({value : e.target.value})
    }
    
    render () {
        const {onBlur, onClick, onKeyUp, style} = this.props;
        const {value} = this.state;

        return (
            <input 
                style={style}
                onClick={onClick}
                ref={this.inputDom}
                onKeyUp={onKeyUp}
                onChange={this.change} 
                onBlur={onBlur}
                value={value} 
            />
        )
    }
}



export default Input