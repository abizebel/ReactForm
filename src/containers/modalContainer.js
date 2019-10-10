import React, {Component,Fragment} from 'react';
import {Input, Modal, Select, Tag} from '../components/ReactForm';


class AutocomplteContainer extends Component {

  constructor(props) {
      super(props);
      this.state = {
          open1 : false,
          open2 : false,
          open3 : false,
          open4 : false,
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

            <button type="button"  className="r-button r-ripple r-lg r-info r-gradient" onClick={()=>{this.setState({open1 : true})}}>Open ltr Modal</button>
            
            <Modal 
                width = {500}
                isOpen = {this.state.open1}
                label={'Login Form'}
                onClose = {() => { this.setState({open1 : false}) }}
                buttons = {[
                    { icon : 'mdi mdi-content-save', callback:()=>{}},
                    
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
            <div className="page-content-title">Modal with Sidebar</div>

            <button type="button"  className="r-button r-ripple r-lg r-info r-gradient" onClick={()=>{this.setState({open1 : true})}}>Open ltr Modal</button>
            
            <Modal 
                width = {500}
                isOpen = {this.state.open1}
                label={'Login Form'}
                onClose = {() => { this.setState({open1 : false}) }}
                buttons = {[
                    { icon : 'mdi mdi-content-save', callback:()=>{}},
                    
                ]}
                sidebar = {[
                    {icon : 'mdi mdi-account-group', callback : ()=>{alert()}},
                    {icon : 'mdi mdi-airplane-takeoff', callback : ()=>{alert()}},
                    {icon : 'mdi mdi-clipboard-pulse-outline', callback : ()=>{alert()}},
                    {icon : 'mdi mdi-coffee-outline', callback : ()=>{alert()}},
                    {icon : 'mdi mdi-image-filter', callback : ()=>{alert()}},
                    {icon : 'mdi mdi-laptop', callback : ()=>{alert()}}

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

            <button type="button" className="r-button r-ripple r-lg r-info r-gradient" onClick={()=>{this.setState({open3 : true})}}>Open RTL Modal</button>
            
            <Modal 
                rtl={true}
                width = {500}
                isOpen = {this.state.open3}
                label={'فرم ورود'}
                onClose = {() => { this.setState({open3 : false}) }}
                buttons = {[
                    {text : 'ذخیره', icon : 'mdi mdi-content-save', callback:()=>{}},
                ]}

            > 
            
                <Select  
                    rtl={true}
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
                    label={'مشارکت کنندگان'}
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

        <div className="page-content-box" >
            <div className="page-content-title">RTL Modal with Sidebar</div>

            <button type="button" className="r-button r-ripple r-lg r-info r-gradient" onClick={()=>{this.setState({open3 : true})}}>Open RTL Modal</button>
            
            <Modal 
                rtl={true}
                width = {500}
                isOpen = {this.state.open3}
                label={'فرم ورود'}
                onClose = {() => { this.setState({open3 : false}) }}
                buttons = {[
                    { icon : 'mdi mdi-content-save', callback:()=>{}},
                ]}
                sidebar = {[
                    {icon : 'mdi mdi-account-group', callback : ()=>{alert()}},
                    {icon : 'mdi mdi-airplane-takeoff', callback : ()=>{alert()}},
                    {icon : 'mdi mdi-clipboard-pulse-outline', callback : ()=>{alert()}},
                    {icon : 'mdi mdi-coffee-outline', callback : ()=>{alert()}},
                    {icon : 'mdi mdi-image-filter', callback : ()=>{alert()}},
                    {icon : 'mdi mdi-laptop', callback : ()=>{alert()}}

                ]}

            > 
            
                <Select  
                    rtl={true}
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
                    label={'مشارکت کنندگان'}
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

       
      </Fragment>
      
    );
  }
  
}

export default AutocomplteContainer;
