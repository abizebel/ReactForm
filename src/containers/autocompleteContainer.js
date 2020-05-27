import React, {Component,Fragment} from 'react';
import {Autocomplete} from '../components/ReactForm';

var arr =
    [{id:'11',name:'Hosseini' },
    {id:'22',name:'feiz'},
    {id:'33',name:'mohammadi'},
    {id:'44',name:'khosravi'},
    {id:'44',name:'ranjbar'}
  ]


let getList = (value) => new Promise(resolve => {
  setTimeout(()=>{
    const res = arr.filter(o => {
      return o.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    })
    resolve(res)
  },1500)
});
class AutocomplteContainer extends Component {

  changeAutocomplete (val){
   console.log(val)
  }
  render (){
    const sampleIcon = <svg viewBox="0 0 24 24"><path fill="#000000" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>;
    return (
      <Fragment>
        
     
        <div className="content-box" dir="rtl">
          <div className="content-title">Autocomplete</div>
          <Autocomplete change={this.changeAutocomplete.bind(this)}
            label={'Last Name'}
            defaultValue ='Abbas'
            api={async (value) => {
              const res = await getList(value);
              
              return res
            }}
            // values ={
            //   [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
            //   {id:'22',name:'feiz', info:{icon:sampleIcon}},
            //   {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
            //   {id:'44',name:'khosravi', info:{icon:sampleIcon}},
            //   {id:'44',name:'ranjbar', info:{icon:sampleIcon}}
            // ]}
            mapping = {{text : 'name', value : 'id'}}
          />
          <Autocomplete change={this.changeAutocomplete.bind(this)}
            rtl={true}
            label={'نام خانوادگی'}
            defaultValue ='عباس'
            values ={
              [{id:'11',name:'حسینی' , info:{icon:sampleIcon}},
              {id:'22',name:'فیض', info:{icon:sampleIcon}},
              {id:'33',name:'محمدی', info:{icon:sampleIcon}},
              {id:'44',name:'خسروی', info:{icon:sampleIcon}},
              {id:'44',name:'رنجبر', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id'}}
          />

        </div>
        <div className="content-box" >
          <div className="content-title">Outlined Autocomplete</div>
          <Autocomplete change={this.changeAutocomplete.bind(this)}
            label={'Last Name'}
            outline = {true}
            defaultValue ='abbas'
            values ={
              [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
              {id:'22',name:'feiz', info:{icon:sampleIcon}},
              {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
              {id:'44',name:'khosravi', info:{icon:sampleIcon}},
              {id:'44',name:'ranjbar', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id'}}
          />
          <Autocomplete change={this.changeAutocomplete.bind(this)}
            rtl={true}
            outline = {true}
            label={'نام خانوادگی'}
            defaultValue ='عباس'
            values ={
              [{id:'11',name:'حسینی' , info:{icon:sampleIcon}},
              {id:'22',name:'فیض', info:{icon:sampleIcon}},
              {id:'33',name:'محمدی', info:{icon:sampleIcon}},
              {id:'44',name:'خسروی', info:{icon:sampleIcon}},
              {id:'44',name:'رنجبر', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id'}}
          />

        </div>


        <div className="content-box" >
          <div className="content-title">Required Autocomplete</div>
          <Autocomplete change={this.changeAutocomplete.bind(this)}
            label={'Last Name'}
            required={'This filed is required'}
            values ={
              [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
              {id:'22',name:'feiz', info:{icon:sampleIcon}},
              {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
              {id:'44',name:'khosravi', info:{icon:sampleIcon}},
              {id:'44',name:'ranjbar', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id'}}
          />
          <Autocomplete change={this.changeAutocomplete.bind(this)}
            rtl={true}
            label={'نام خانوادگی'}
            required={'پر کردن این فیلد الزامیست'}
            values ={
              [{id:'11',name:'حسینی' , info:{icon:sampleIcon}},
              {id:'22',name:'فیض', info:{icon:sampleIcon}},
              {id:'33',name:'محمدی', info:{icon:sampleIcon}},
              {id:'44',name:'خسروی', info:{icon:sampleIcon}},
              {id:'44',name:'رنجبر', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id'}}
          />

        </div>
        <div className="content-box" >
          <div className="content-title">Required Outlined Autocomplete</div>
          <Autocomplete change={this.changeAutocomplete.bind(this)}
            label={'Last Name'}
            outline = {true}
            required={'This filed is required'}

            values ={
              [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
              {id:'22',name:'feiz', info:{icon:sampleIcon}},
              {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
              {id:'44',name:'khosravi', info:{icon:sampleIcon}},
              {id:'44',name:'ranjbar', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id'}}
          />
          <Autocomplete change={this.changeAutocomplete.bind(this)}
            rtl={true}
            outline = {true}
            label={'نام خانوادگی'}
            required={'پر کردن این فیلد الزامیست'}

            values ={
              [{id:'11',name:'حسینی' , info:{icon:sampleIcon}},
              {id:'22',name:'فیض', info:{icon:sampleIcon}},
              {id:'33',name:'محمدی', info:{icon:sampleIcon}},
              {id:'44',name:'خسروی', info:{icon:sampleIcon}},
              {id:'44',name:'رنجبر', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id'}}
          />

        </div>

      


        <div className="content-box" >
          <div className="content-title">Autocomplete with Icon</div>
          <Autocomplete change={this.changeAutocomplete.bind(this)}
            label={'Last Name'}
            defaultValue ='abbas'
            values ={
              [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
              {id:'22',name:'feiz', info:{icon:sampleIcon}},
              {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
              {id:'44',name:'khosravi', info:{icon:sampleIcon}},
              {id:'44',name:'ranjbar', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id',icon:'info.icon'}}
          />
          <Autocomplete change={this.changeAutocomplete.bind(this)}
            rtl={true}
            label={'نام خانوادگی'}
            defaultValue ='عباس'
            values ={
              [{id:'11',name:'حسینی' , info:{icon:sampleIcon}},
              {id:'22',name:'فیض', info:{icon:sampleIcon}},
              {id:'33',name:'محمدی', info:{icon:sampleIcon}},
              {id:'44',name:'خسروی', info:{icon:sampleIcon}},
              {id:'44',name:'رنجبر', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id',icon:'info.icon'}}
          />

        </div>
        <div className="content-box" >
          <div className="content-title">Outlined Autocomplete with Icon</div>
          <Autocomplete change={this.changeAutocomplete.bind(this)}
            label={'Last Name'}
            outline = {true}
            defaultValue ='abbas'
            values ={
              [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
              {id:'22',name:'feiz', info:{icon:sampleIcon}},
              {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
              {id:'44',name:'khosravi', info:{icon:sampleIcon}},
              {id:'44',name:'ranjbar', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id',icon:'info.icon'}}
          />
          <Autocomplete change={this.changeAutocomplete.bind(this)}
            rtl={true}
            outline = {true}
            label={'نام خانوادگی'}
            defaultValue ='عباس'
            values ={
              [{id:'11',name:'حسینی' , info:{icon:sampleIcon}},
              {id:'22',name:'فیض', info:{icon:sampleIcon}},
              {id:'33',name:'محمدی', info:{icon:sampleIcon}},
              {id:'44',name:'خسروی', info:{icon:sampleIcon}},
              {id:'44',name:'رنجبر', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id',icon:'info.icon'}}
          />

        </div>
        <div className="content-box" >
          <div className="content-title">Disabled Autocomplete</div>
          <Autocomplete change={this.changeAutocomplete.bind(this)}
            label={'Last Name'}
            disabled={true}
            defaultValue ='abbas'
            values ={
              [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
              {id:'22',name:'feiz', info:{icon:sampleIcon}},
              {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
              {id:'44',name:'khosravi', info:{icon:sampleIcon}},
              {id:'44',name:'ranjbar', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id',icon:'info.icon'}}
          />
          <Autocomplete change={this.changeAutocomplete.bind(this)}
            rtl={true}
            label={'نام خانوادگی'}
            disabled={true}

            defaultValue ='عباس'
            values ={
              [{id:'11',name:'حسینی' , info:{icon:sampleIcon}},
              {id:'22',name:'فیض', info:{icon:sampleIcon}},
              {id:'33',name:'محمدی', info:{icon:sampleIcon}},
              {id:'44',name:'خسروی', info:{icon:sampleIcon}},
              {id:'44',name:'رنجبر', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id',icon:'info.icon'}}
          />

        </div>
        <div className="content-box" >
          <div className="content-title">Disabled  Autocomplete</div>
          <Autocomplete change={this.changeAutocomplete.bind(this)}
            label={'Last Name'}
            outline = {true}
            disabled={true}

            defaultValue ='abbas'
            values ={
              [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
              {id:'22',name:'feiz', info:{icon:sampleIcon}},
              {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
              {id:'44',name:'khosravi', info:{icon:sampleIcon}},
              {id:'44',name:'ranjbar', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id',icon:'info.icon'}}
          />
          <Autocomplete change={this.changeAutocomplete.bind(this)}
            rtl={true}
            outline = {true}
            disabled={true}

            label={'نام خانوادگی'}
            defaultValue ='عباس'
            values ={
              [{id:'11',name:'حسینی' , info:{icon:sampleIcon}},
              {id:'22',name:'فیض', info:{icon:sampleIcon}},
              {id:'33',name:'محمدی', info:{icon:sampleIcon}},
              {id:'44',name:'خسروی', info:{icon:sampleIcon}},
              {id:'44',name:'رنجبر', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id',icon:'info.icon'}}
          />

        </div>
    
      </Fragment>
      
    );
  }
  
}

export default AutocomplteContainer;
