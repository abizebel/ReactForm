import React, {Component,Fragment} from 'react';
import {Input, Modal, Select, Tag} from '../components/ReactForm';


class AutocomplteContainer extends Component {

  constructor(props) {
      super(props);
      this.state = {
          open1 : false,
          open2 : true
      }
  }


  changeTag (val){
    console.log(val)
   }
  changeInput (val){
    console.log(val)
   }
   changeSelect (val){
    console.log(val)
   }
  render (){
    return (
      <Fragment>



        <div className="page-content-box" >
            <div className="page-content-title">Modal</div>

            <button type="button" onClick={()=>{this.setState({open1 : true})}}>Open ltr Modal</button>
            
            <Modal 
                width = {500}
                isOpen = {this.state.open1}
                label={'Login Form'}
                onClose = {() => { this.setState({open1 : false}) }}
                buttons = {[
                    {text : 'save', icon : 'mdi mdi-home', callback:()=>{}},
                ]}

            > 
            
                <Select  
                    
                    change={this.changeSelect.bind(this)}
                    label={'User Type'}
                    defaultValue={11}
                    values ={
                    [{id:'11',name:'Administrator' },
                    {id:'22',name:'Author'},
                    {id:'33',name:'Editor'},
                    {id:'44',name:'Coleader'},
                    ]}
                    mapping = {{text : 'name', value : 'id'}}
                />
                <Input 
                    label={'Username'} 
                    value={'Abbas'} 
                    change={this.changeInput}
                />
                <Input 
                    label={'Password'} 
                    value={'123456'} 
                    change={this.changeInput}
                />
                
                <Tag change={this.changeTag.bind(this)}
                    label={'Contributers'}
                    defaultValue ={[{name: 'ahmadi'},{name: 'rahimi'}]}
                    api={'api/getTag'} //get search tag result from server
                    required={'asdasdasd'}
                    values ={
                    [{id:'11',name:'Hosseini' },
                    {id:'22',name:'feiz'},
                    {id:'33',name:'mohammadi'},
                    {id:'44',name:'khosravi'},
                    {id:'44',name:'ranjbar'}
                    ]}
                    mapping = {{text : 'name', value : 'id'}}
                />
      
            </Modal >
    
        </div>

        <div className="page-content-box" >
            <div className="page-content-title">RTL Modal</div>

            <button type="button" onClick={()=>{this.setState({open2 : true})}}>Open ltr Modal</button>
            
            <Modal 
                rtl={true}
                width = {500}
                isOpen = {this.state.open2}
                label={'Login Form'}
                onClose = {() => { this.setState({open2 : false}) }}
                buttons = {[
                    {text : 'save', icon : 'mdi mdi-home', callback:()=>{}},
                ]}

            > 
            
                <Select  
                    change={this.changeSelect.bind(this)}
                    label={'نوع کاربر'}
                    defaultValue={11}
                    values ={
                    [{id:'11',name:'مدیر کل' },
                    {id:'22',name:'نویسنده'},
                    {id:'33',name:'ویرایشگر'},
                    {id:'44',name:'معاون'},
                    ]}
                    mapping = {{text : 'name', value : 'id'}}
                />
                <Input 
                    rtl={true}
                    label={'نام خانوادگی'} 
                    value={'عباس'} 
                    change={this.changeInput}
                />
                <Input 
                    rtl={true}
                    label={'رمز عبور'} 
                    value={'123456'} 
                    change={this.changeInput}
                />
                
                <Tag 
                    rtl={true}
                    change={this.changeTag.bind(this)}
                    label={'Contributers'}
                    defaultValue ={[{name: 'احمدی'},{name: 'رحیمی'}]}
                    values ={
                    [{id:'11',name:'حسینی' },
                    {id:'22',name:'فیض'},
                    {id:'33',name:'محمدی'},
                    {id:'44',name:'خسروی'},
                    {id:'44',name:'رنجبر'}
                    ]}
                    mapping = {{text : 'name', value : 'id'}}
                />
      
            </Modal >
    
        </div>

       
        {/* <div className="page-content-box" >
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

           

        </div> */}
      </Fragment>
      
    );
  }
  
}

export default AutocomplteContainer;
