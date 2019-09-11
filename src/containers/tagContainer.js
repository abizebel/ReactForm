import React, {Component,Fragment} from 'react';
import {Input, Select, Autocomplete, Tag} from '../components/ReactForm';

class AutocomplteContainer extends Component {

  changeTag (val){
   console.log(val)
  }
  render (){
    const sampleIcon = <svg viewBox="0 0 24 24"><path fill="#000000" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>;
    const boxStyle ={width:'500px', padding : '40px',border : '1px solid #ddd',margin : '50px auto',boxShadow : '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)'}
    const boxTileStyle = {fontSize : '15px',fontWeight: 'bold',paddingBottom :'40px'};
    return (
      <Fragment>

        <div style={boxStyle} >
          <div style={boxTileStyle}>Tag</div>
          <Tag change={this.changeTag.bind(this)}
            label={'Last Name'}
            defaultValue ={{value : 'Hosseini' ,icon : sampleIcon}}
            values ={
              [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
              {id:'22',name:'feiz', info:{icon:sampleIcon}},
              {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
              {id:'44',name:'khosravi', info:{icon:sampleIcon}},
              {id:'44',name:'ranjbar', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id',icon:'info.icon'}}
          />
          <Tag change={this.changeTag.bind(this)}
            rtl={true}
            label={'نام خانوادگی'}
            defaultValue ={{value : 'Hosseini' ,icon : sampleIcon}}
            values ={
              [{id:'11',name:'حسینی' , info:{icon:sampleIcon}},
              {id:'22',name:'فیض', info:{icon:sampleIcon}},
              {id:'33',name:'محمدی', info:{icon:sampleIcon}},
              {id:'44',name:'خسروی', info:{icon:sampleIcon}},
              {id:'44',name:'رنجبر', info:{icon:sampleIcon}},
              {id:'55',name:'جعفری', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id',icon:'info.icon'}}
          />


        </div>
        <div style={boxStyle} >
          <div style={boxTileStyle}>Outlined Tag</div>
          <Tag change={this.changeTag.bind(this)}
            outline = {true}
            label={'Last Name'}
            defaultValue ={{value : 'Hosseini' ,icon : sampleIcon}}
            values ={
              [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
              {id:'22',name:'feiz', info:{icon:sampleIcon}},
              {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
              {id:'44',name:'khosravi', info:{icon:sampleIcon}},
              {id:'44',name:'ranjbar', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id',icon:'info.icon'}}
          />
          <Tag change={this.changeTag.bind(this)}
            rtl={true}
            outline = {true}

            label={'نام خانوادگی'}
            defaultValue ={{value : 'Hosseini' ,icon : sampleIcon}}
            values ={
              [{id:'11',name:'حسینی' , info:{icon:sampleIcon}},
              {id:'22',name:'فیض', info:{icon:sampleIcon}},
              {id:'33',name:'محمدی', info:{icon:sampleIcon}},
              {id:'44',name:'خسروی', info:{icon:sampleIcon}},
              {id:'44',name:'رنجبر', info:{icon:sampleIcon}},
              {id:'55',name:'جعفری', info:{icon:sampleIcon}}

            ]}
            mapping = {{text : 'name', value : 'id',icon:'info.icon'}}
          />
        </div>
          <div style={boxStyle} >
          <div style={boxTileStyle}>Disabled Tag</div>
          <Tag change={this.changeTag.bind(this)}
            label={'Last Name'}
            disabled={true}
            defaultValue ={{value : 'Hosseini' ,icon : sampleIcon}}
            values ={
              [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
              {id:'22',name:'feiz', info:{icon:sampleIcon}},
              {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
              {id:'44',name:'khosravi', info:{icon:sampleIcon}},
              {id:'44',name:'ranjbar', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id',icon:'info.icon'}}
          />
          <Tag change={this.changeTag.bind(this)}
            rtl={true}
            disabled={true}

            label={'نام خانوادگی'}
            defaultValue ={{value : 'Hosseini' ,icon : sampleIcon}}
            values ={
              [{id:'11',name:'حسینی' , info:{icon:sampleIcon}},
              {id:'22',name:'فیض', info:{icon:sampleIcon}},
              {id:'33',name:'محمدی', info:{icon:sampleIcon}},
              {id:'44',name:'خسروی', info:{icon:sampleIcon}},
              {id:'44',name:'رنجبر', info:{icon:sampleIcon}},
              {id:'55',name:'جعفری', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id',icon:'info.icon'}}
          />


        </div>
        <div style={boxStyle} >
          <div style={boxTileStyle}>Disabled Outlined Tag</div>
          <Tag change={this.changeTag.bind(this)}
            outline = {true}
            label={'Last Name'}
            disabled={true}

            defaultValue ={{value : 'Hosseini' ,icon : sampleIcon}}
            values ={
              [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
              {id:'22',name:'feiz', info:{icon:sampleIcon}},
              {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
              {id:'44',name:'khosravi', info:{icon:sampleIcon}},
              {id:'44',name:'ranjbar', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id',icon:'info.icon'}}
          />
          <Tag change={this.changeTag.bind(this)}
            rtl={true}
            outline = {true}
            disabled={true}

            label={'نام خانوادگی'}
            defaultValue ={{value : 'Hosseini' ,icon : sampleIcon}}
            values ={
              [{id:'11',name:'حسینی' , info:{icon:sampleIcon}},
              {id:'22',name:'فیض', info:{icon:sampleIcon}},
              {id:'33',name:'محمدی', info:{icon:sampleIcon}},
              {id:'44',name:'خسروی', info:{icon:sampleIcon}},
              {id:'44',name:'رنجبر', info:{icon:sampleIcon}},
              {id:'55',name:'جعفری', info:{icon:sampleIcon}}

            ]}
            mapping = {{text : 'name', value : 'id',icon:'info.icon'}}
          />


        </div>
      </Fragment>
      
    );
  }
  
}

export default AutocomplteContainer;
