import React, {Component,Fragment} from 'react';
import {Select} from '../../components/ReactForm';

class InputContainer extends Component {

    changeSelect (val){
    console.log(val)
    }
    render (){
        const sampleIcon = <svg viewBox="0 0 24 24"><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>;
        return (
        <Fragment>

            <div className="content-box" dir="rtl">
            <div className="content-title">Simple Select</div>
                <Select   change={this.changeSelect.bind(this)}
                    label={'Last Name'}
                    defaultValue ={22}
                    values ={
                    [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
                    {id:'22',name:'feiz', info:{icon:sampleIcon}},
                    {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
                    {id:'44',name:'khosravi', info:{icon:sampleIcon}},
                    {id:'55',name:'ranjbar', info:{icon:sampleIcon}},
                    {id:'66',name:'mohammadi', info:{icon:sampleIcon}},
                    {id:'77',name:'khosravi', info:{icon:sampleIcon}},
                    {id:'88',name:'ranjbar', info:{icon:sampleIcon}},
                    {id:'99',name:'mohammadi', info:{icon:sampleIcon}},
                    {id:'10',name:'khosravi', info:{icon:sampleIcon}},
                    {id:'11',name:'ranjbar', info:{icon:sampleIcon}}
                    ]}
                    mapping = {{text : 'name', value : 'id'}}
                />
                <Select   change={this.changeSelect.bind(this)}
                    rtl={true}
                    label={'نام خانوادگی'}
                    defaultValue ={33}
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

            <div className="content-box" >
            <div className="content-title">Oulined Simple Select</div>
                <Select   change={this.changeSelect.bind(this)}
                label={'Last Name'}
                defaultValue ={33}
                outline={true}
                values ={
                [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
                {id:'22',name:'feiz', info:{icon:sampleIcon}},
                {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
                {id:'44',name:'khosravi', info:{icon:sampleIcon}},
                {id:'55',name:'ranjbar', info:{icon:sampleIcon}}
                ]}
                mapping = {{text : 'name', value : 'id'}}
            />
            <Select   change={this.changeSelect.bind(this)}
                rtl={true}
                outline={true}
                label={'نام خانوادگی'}
                defaultValue ={33}
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

export default InputContainer;
