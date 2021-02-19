import React, {Component,Fragment} from 'react';
import {MultiSelect} from '../../components/ReactForm';

class MultiSelectContainer extends Component {

    changeSelect (val){
    console.log(val)
    }
    render (){
        const sampleIcon = <svg viewBox="0 0 24 24"><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>;
        return (
        <Fragment>

            <div className="content-box" dir="rtl">
            <div className="content-title">Simple Select</div>
                <MultiSelect   change={this.changeSelect.bind(this)}       
                    label={'Last Name'}
                    defaultValue ={[11]}
                    
                    nullable={true}
                    search = {true}
                    groupField={'group'}
                    values ={
                    [{id:'11',name:'Hosseini', group : 'Food Group'},
                    {id:'22',name:'feiz', group : 'Food Group'},
                    {id:'33',name:'mohammadi', group : 'Food Group'},
                    {id:'44',name:'khosravi', group : 'Food Group'},
                    {id:'55',name:'ranjbar', group : 'Art Group'},
                    {id:'66',name:'aghapour', group : 'Art Group'},
                    {id:'77',name:'mardanian', group : 'Art Group'},
                    {id:'88',name:'babaei', group : 'Art Group'}
                    ]}
                    mapping = {{text : 'name', value : 'id'}}
                />

                <MultiSelect  change={this.changeSelect.bind(this)}       
                    label={'نام خانوادگی'}            
                    defaultValue ={[11,22,33]}
                    
                    rtl={true}
                    nullable={true}
                    search = {true}
                    searchLabel = {'جستجو ...'}
                    groupField={'group'}

                    values ={
                    [{id:'11',name:'حسینی', group : 'برنامه نویس'},
                    {id:'22',name:'فیض', group : 'برنامه نویس'},
                    {id:'33',name:'محمدی', group : 'برنامه نویس'},
                    {id:'44',name:'خسروی', group : 'بازاریابی'},
                    {id:'55',name:'رنجبر', group : 'بازاریابی'}
                    ]}
                    mapping = {{text : 'name', value : 'id'}}
                />
            </div>

            <div className="content-box" >
            <div className="content-title">Oulined Simple Select</div>
                <MultiSelect   change={this.changeSelect.bind(this)}       
                    label={'Last Name'}
                    defaultValue ={[11,22,33]}
                    
                    outline={true}
                    nullable={true}
                    search = {true}
                    searchLabel = {'Search ... '}
                    values ={
                    [{id:'11',name:'Hosseini'},
                    {id:'22',name:'feiz'},
                    {id:'33',name:'mohammadi'},
                    {id:'44',name:'khosravi'},
                    {id:'55',name:'ranjbar'},
                    {id:'66',name:'aghapour'},
                    {id:'77',name:'mardanian'},
                    {id:'88',name:'babaei'}
                    ]}
                    mapping = {{text : 'name', value : 'id'}}
                />

                <MultiSelect   change={this.changeSelect.bind(this)}       
                    label={'نام خانوادگی'}            
                    defaultValue ={[11,22,33]}
                    
                    rtl={true}
                    outline={true}

                    nullable={true}
                    search = {true}
                    searchLabel = {'جستجو ...'}
                    values ={
                    [{id:'11',name:'حسینی'},
                    {id:'22',name:'فیض'},
                    {id:'33',name:'محمدی'},
                    {id:'44',name:'خسروی'},
                    {id:'55',name:'رنجبر'}
                    ]}
                    mapping = {{text : 'name', value : 'id'}}
                />

            </div>


        </Fragment>
        
        );
    }
    
}

export default MultiSelectContainer;
