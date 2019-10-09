import React, {Component,Fragment} from 'react';
import { Tag} from '../components/ReactForm';

class AutocomplteContainer extends Component {

  changeTag (val){
   console.log(val)
  }
  render (){
    return (
      <Fragment>

        <div className="page-content-box" >
          <div className="page-content-title">Tag</div>
          <Tag change={this.changeTag.bind(this)}
            label={'Last Name'}
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
          <div className="page-content-title">Required Tag</div>
          <Tag change={this.changeTag.bind(this)}
            label={'Last Name'}
            required={'This filed is required'}

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
            required={'پر کردن این فیلد الزامیست'}

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
          <div className="page-content-title">Required Outlined Tag</div>
          <Tag change={this.changeTag.bind(this)}
            outline = {true}
            label={'Last Name'}
            required={'This filed is required'}

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
            required={'پر کردن این فیلد الزامیست'}

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
