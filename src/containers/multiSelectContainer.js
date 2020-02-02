import React, {Component,Fragment} from 'react';
import {MultiSelect} from '../components/ReactForm';

class MultiSelectContainer extends Component {

  changeSelect (val){
   console.log(val)
  }
  render (){
    const sampleIcon = <svg viewBox="0 0 24 24"><path  d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>;
    return (
      <Fragment>   
               <div className="page-content-box" dir="rtl">
          <div className="page-content-title">Multi Select</div>
          <MultiSelect   change={this.changeSelect.bind(this)}       
            label={'Last Name'}
            defaultValue ={[11]}
            multi={true}
            nullable={true}
            search = {true}
            values ={
              [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
              {id:'22',name:'feiz', info:{icon:sampleIcon}},
              {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
              {id:'44',name:'khosravi', info:{icon:sampleIcon}},
              {id:'55',name:'ranjbar', info:{icon:sampleIcon}},
              {id:'66',name:'aghapour', info:{icon:sampleIcon}},
              {id:'77',name:'mardanian', info:{icon:sampleIcon}},
              {id:'88',name:'babaei', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id', icon : 'info.icon'}}
          />

          <MultiSelect  change={this.changeSelect.bind(this)}       
            label={'نام خانوادگی'}            
            defaultValue ={[11,22,33]}
            multi={true}
            rtl={true}
            nullable={true}
            search = {true}
            searchLabel = {'جستجو ...'}
            values ={
              [{id:'11',name:'حسینی' , info:{icon:sampleIcon}},
              {id:'22',name:'فیض', info:{icon:sampleIcon}},
              {id:'33',name:'محمدی', info:{icon:sampleIcon}},
              {id:'44',name:'خسروی', info:{icon:sampleIcon}},
              {id:'55',name:'رنجبر', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id'}}
          />


        </div>
        <div className="page-content-box" >
          <div className="page-content-title">Outlined Multi Select</div>
          <MultiSelect   change={this.changeSelect.bind(this)}       
            label={'Last Name'}
            defaultValue ={[11,22,33]}
            multi={true}
            outline={true}
            nullable={true}
            search = {true}
            searchLabel = {'Search ... '}
            values ={
              [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
              {id:'22',name:'feiz', info:{icon:sampleIcon}},
              {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
              {id:'44',name:'khosravi', info:{icon:sampleIcon}},
              {id:'55',name:'ranjbar', info:{icon:sampleIcon}},
              {id:'66',name:'aghapour', info:{icon:sampleIcon}},
              {id:'77',name:'mardanian', info:{icon:sampleIcon}},
              {id:'88',name:'babaei', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id'}}
          />

          <MultiSelect   change={this.changeSelect.bind(this)}       
            label={'نام خانوادگی'}            
            defaultValue ={[11,22,33]}
            multi={true}
            rtl={true}
            outline={true}

            nullable={true}
            search = {true}
            searchLabel = {'جستجو ...'}
            values ={
              [{id:'11',name:'حسینی' , info:{icon:sampleIcon}},
              {id:'22',name:'فیض', info:{icon:sampleIcon}},
              {id:'33',name:'محمدی', info:{icon:sampleIcon}},
              {id:'44',name:'خسروی', info:{icon:sampleIcon}},
              {id:'55',name:'رنجبر', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id'}}
          />


        </div>
        <div className="page-content-box" >
          <div className="page-content-title">Required Multi Select</div>
          <MultiSelect   change={this.changeSelect.bind(this)}       
            label={'Last Name'}
            required={'This filed is required'}
            multi={true}
            nullable={true}
            search = {true}
            searchLabel = {'Search ... '}
            values ={
              [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
              {id:'22',name:'feiz', info:{icon:sampleIcon}},
              {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
              {id:'44',name:'khosravi', info:{icon:sampleIcon}},
              {id:'55',name:'ranjbar', info:{icon:sampleIcon}},
              {id:'66',name:'aghapour', info:{icon:sampleIcon}},
              {id:'77',name:'mardanian', info:{icon:sampleIcon}},
              {id:'88',name:'babaei', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id'}}
          />

          <MultiSelect   change={this.changeSelect.bind(this)}       
            label={'نام خانوادگی'}            
            required={'پر کردن این فیلد الزامیست'}
            multi={true}
            rtl={true}
            nullable={true}
            search = {true}
            searchLabel = {'جستجو ...'}
            values ={
              [{id:'11',name:'حسینی' , info:{icon:sampleIcon}},
              {id:'22',name:'فیض', info:{icon:sampleIcon}},
              {id:'33',name:'محمدی', info:{icon:sampleIcon}},
              {id:'44',name:'خسروی', info:{icon:sampleIcon}},
              {id:'55',name:'رنجبر', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id'}}
          />


        </div>
        <div className="page-content-box" >
          <div className="page-content-title">Required Multi Select</div>
          <MultiSelect   change={this.changeSelect.bind(this)}       
            label={'Last Name'}
            required={'This filed is required'}
            multi={true}
            nullable={true}
            search = {true}
            outline={true}

            searchLabel = {'Search ... '}
            values ={
              [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
              {id:'22',name:'feiz', info:{icon:sampleIcon}},
              {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
              {id:'44',name:'khosravi', info:{icon:sampleIcon}},
              {id:'55',name:'ranjbar', info:{icon:sampleIcon}},
              {id:'66',name:'aghapour', info:{icon:sampleIcon}},
              {id:'77',name:'mardanian', info:{icon:sampleIcon}},
              {id:'88',name:'babaei', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id'}}
          />

          <MultiSelect   change={this.changeSelect.bind(this)}       
            label={'نام خانوادگی'}            
            required={'پر کردن این فیلد الزامیست'}
            multi={true}
            rtl={true}
            outline={true}
            nullable={true}
            search = {true}
            searchLabel = {'جستجو ...'}
            values ={
              [{id:'11',name:'حسینی' , info:{icon:sampleIcon}},
              {id:'22',name:'فیض', info:{icon:sampleIcon}},
              {id:'33',name:'محمدی', info:{icon:sampleIcon}},
              {id:'44',name:'خسروی', info:{icon:sampleIcon}},
              {id:'55',name:'رنجبر', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id'}}
          />


        </div>
     
   

      </Fragment>
      
    );
  }
  
}

export default MultiSelectContainer;