import React, {Component,Fragment} from 'react';
import { Tag} from '../components/ReactForm';

class AutocomplteContainer extends Component {

  changeTag (val){
   console.log(val)
  }
  render (){
    const sampleIcon = <svg viewBox="0 0 24 24"><path fill="#000000" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>;
    return (
      <Fragment>

        <div className="page-content-box" >
          <div className="page-content-title">Tag</div>
          <Tag change={this.changeTag.bind(this)}
            label={'Last Name'}
            defaultValue ={[{name: 'ahmadi'},{name: 'rahimi'}]}
            api={'api/getTag'} //get search tag result from server

            values ={
              [{id:'11',name:'Hosseini' },
              {id:'22',name:'feiz'},
              {id:'33',name:'mohammadi'},
              {id:'44',name:'khosravi'},
              {id:'44',name:'ranjbar'}
            ]}
            mapping = {{text : 'name', value : 'id'}}
          />
          <Tag change={this.changeTag.bind(this)}
            rtl={true}
            label={'نام خانوادگی'}
            defaultValue ={[{name: 'ahmadi'},{name: 'rahimi'}]}
            values ={
              [{id:'11',name:'حسینی' },
              {id:'22',name:'فیض'},
              {id:'33',name:'محمدی'},
              {id:'44',name:'خسروی'},
              {id:'44',name:'رنجبر'},
              {id:'55',name:'جعفری'}
            ]}
            mapping = {{text : 'name', value : 'id'}}
          />


        </div>
        <div className="page-content-box" >
          <div className="page-content-title">Outlined Tag</div>
          <Tag change={this.changeTag.bind(this)}
            outline = {true}
            label={'Last Name'}
            defaultValue ={[{name: 'ahmadi'},{name: 'rahimi'}]}
            values ={
              [{id:'11',name:'Hosseini' },
              {id:'22',name:'feiz'},
              {id:'33',name:'mohammadi'},
              {id:'44',name:'khosravi'},
              {id:'44',name:'ranjbar'}
            ]}
            mapping = {{text : 'name', value : 'id'}}
          />
          <Tag change={this.changeTag.bind(this)}
            rtl={true}
            outline = {true}

            label={'نام خانوادگی'}
            defaultValue ={[{name: 'ahmadi'},{name: 'rahimi'}]}
            values ={
              [{id:'11',name:'حسینی' },
              {id:'22',name:'فیض'},
              {id:'33',name:'محمدی'},
              {id:'44',name:'خسروی'},
              {id:'44',name:'رنجبر'},
              {id:'55',name:'جعفری'}

            ]}
            mapping = {{text : 'name', value : 'id'}}
          />
        </div>
          <div className="page-content-box" >
          <div className="page-content-title">Disabled Tag</div>
          <Tag change={this.changeTag.bind(this)}
            label={'Last Name'}
            disabled={true}
            defaultValue ={[{name: 'ahmadi'},{name: 'rahimi'}]}
            values ={
              [{id:'11',name:'Hosseini' },
              {id:'22',name:'feiz'},
              {id:'33',name:'mohammadi'},
              {id:'44',name:'khosravi'},
              {id:'44',name:'ranjbar'}
            ]}
            mapping = {{text : 'name', value : 'id'}}
          />
          <Tag change={this.changeTag.bind(this)}
            rtl={true}
            disabled={true}

            label={'نام خانوادگی'}
            defaultValue ={[{name: 'ahmadi'},{name: 'rahimi'}]}
            values ={
              [{id:'11',name:'حسینی' },
              {id:'22',name:'فیض'},
              {id:'33',name:'محمدی'},
              {id:'44',name:'خسروی'},
              {id:'44',name:'رنجبر'},
              {id:'55',name:'جعفری'}
            ]}
            mapping = {{text : 'name', value : 'id'}}
          />


        </div>
        <div className="page-content-box" >
          <div className="page-content-title">Disabled Outlined Tag</div>
          <Tag change={this.changeTag.bind(this)}
            outline = {true}
            label={'Last Name'}
            disabled={true}

            defaultValue ={[{name: 'ahmadi'},{name: 'rahimi'}]}
            values ={
              [{id:'11',name:'Hosseini' },
              {id:'22',name:'feiz'},
              {id:'33',name:'mohammadi'},
              {id:'44',name:'khosravi'},
              {id:'44',name:'ranjbar'}
            ]}
            mapping = {{text : 'name', value : 'id'}}
          />
          <Tag change={this.changeTag.bind(this)}
            rtl={true}
            outline = {true}
            disabled={true}

            label={'نام خانوادگی'}
            defaultValue ={[{name: 'ahmadi'},{name: 'rahimi'}]}
            values ={
              [{id:'11',name:'حسینی' },
              {id:'22',name:'فیض'},
              {id:'33',name:'محمدی'},
              {id:'44',name:'خسروی'},
              {id:'44',name:'رنجبر'},
              {id:'55',name:'جعفری'}

            ]}
            mapping = {{text : 'name', value : 'id'}}
          />


        </div>
      </Fragment>
      
    );
  }
  
}

export default AutocomplteContainer;
