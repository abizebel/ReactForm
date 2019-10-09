import React, {Component,Fragment} from 'react';
import { Modal} from '../components/ReactForm';


class AutocomplteContainer extends Component {

  constructor(props) {
      super(props);
      this.state = {
          open1 : false,
          open2 : false
      }
  }

  render (){
    return (
      <Fragment>

        <div className="page-content-box" >
            <div className="page-content-title">Modal</div>

            <button type="button" onClick={()=>{this.setState({open1 : true})}}>Open ltr Modal</button>
            
            <Modal 
                isOpen = {this.state.open1}
                label={'Login Form'}
                onClose = {() => { this.setState({open1 : false}) }}
                buttons = {[
                    {text : 'save', icon : 'mdi mdi-home', callback:()=>{alert()}},
                ]}
                sidebar = {[
                    {icon : 'mdi mdi-home', callback : ()=>{alert()}},
                    {icon : 'mdi mdi-send', callback : ()=>{alert()}}

                ]}
            > qweqwewqe</Modal >
    
        </div>
        <div className="page-content-box" >
            <div className="page-content-title">Modal</div>

            <button type="button" onClick={()=>{this.setState({open2 : true})}}>Open rtl Modal</button>

            <Modal 
                rtl={true}
                isOpen = {this.state.open2}
                label={'Login Form'}
                onClose = {() => {  this.setState({open2 : false}) }}
                buttons = {[
                    {text : 'save', icon : 'mdi mdi-home', callback:()=>{alert()}},
                ]}
                sidebar = {[
                    {icon : 'mdi mdi-home', callback : ()=>{alert()}},
                    {icon : 'mdi mdi-send', callback : ()=>{alert()}}

                ]}
            >wqeqweqwe</Modal>

           

        </div>
      </Fragment>
      
    );
  }
  
}

export default AutocomplteContainer;
