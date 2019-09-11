import React, {Component,Fragment} from 'react';
import {Input, Select} from './components/ReactForm';

class App extends Component {

  changeInput (val){
   console.log(val)
  }
  render (){
    const sampleIcon = <svg viewBox="0 0 24 24"><path fill="#000000" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>;
    const boxStyle ={width:'500px', padding : '40px',border : '1px solid #ddd',margin : '50px auto',boxShadow : '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)'}
    const boxTileStyle = {fontSize : '15px',fontWeight: 'bold',paddingBottom :'40px'};
    return (
      <Fragment>
         <div style={boxStyle} >
           <h1 >React Material Forms</h1>  
           <h3 >Author : Abbas Hosseini</h3>
           <h3 >Features : </h3>
           <ul>
             <li>Pure Html/Css version for razor pages</li>
             <li>Clean Code</li>
             <li>Easy to Use</li>
             <li>Supports RTL</li>
             <li>Object Oriented & Extensible</li>
             <li>Both Oulined & inlined Components</li>
           </ul>
           <h3 >Components :</h3>
           <ul>
             <li>Input</li>
             <li>Tag</li>
             <li>Checkbox</li>
             <li>Autocomplete</li>
             <li>Select</li>  
           </ul>
         </div>
         <div style={boxStyle} >
           <h1 >Input Samples</h1>  
         </div>
        <div style={boxStyle} >
          <div style={boxTileStyle}>Inputs</div>
          <Input 
            label={'Last Name'}
            value={'Hosseini'} 
            change={this.changeInput.bind(this)} />
          <Input 
             label={'نام خانوادگی'}
            rtl={true} 
            value={'حسینی'} 
            change={this.changeInput.bind(this)} 
          />
        </div>
        <div style={boxStyle} >
          <div style={boxTileStyle}>Oulined Inputs</div>
          <Input 
           label={'Last Name'}
            value={'Hosseini'} 
            outline ={true}
            change={this.changeInput.bind(this)} />
          <Input 
            label={'نام خانوادگی'}
            rtl={true} 
            outline ={true}
            value={'حسینی'} 
            change={this.changeInput.bind(this)} 
          />
        </div>
        <div style={boxStyle} >
          <div style={boxTileStyle}>Disabled Inputs</div>
          <Input 
           label={'Last Name'}
            value={'Hosseini'} 
            disabled ={true}
            change={this.changeInput.bind(this)} />
          <Input 
            label={'نام خانوادگی'}
            rtl={true} 
            disabled ={true}
            value={'حسینی'} 
            change={this.changeInput.bind(this)} 
          />
        </div>
        <div style={boxStyle} >
          <div style={boxTileStyle}>Oulined Disabled Inputs</div>
          <Input 
           label={'Last Name'}
            value={'Hosseini'} 
            outline={true}
            disabled ={true}
            change={this.changeInput.bind(this)} />
          <Input 
            label={'نام خانوادگی'}
            rtl={true} 
            outline={true}
            disabled ={true}
            value={'حسینی'} 
            change={this.changeInput.bind(this)} 
          />
        </div>
        <div style={boxStyle} >
          <div style={boxTileStyle}>Inputs with Success Icon</div>
          <Input 
           label={'Last Name'}
            value={'Hosseini'} 
            success = {true}
            change={this.changeInput.bind(this)} />
          <Input 
            label={'نام خانوادگی'}
            rtl={true} 
            value={'حسینی'} 
            success = {true}
            change={this.changeInput.bind(this)} 
          />
        </div>
        <div style={boxStyle} >
          <div style={boxTileStyle}>Outlined Inputs with Success Icon</div>
          <Input 
           label={'Last Name'}
            value={'Hosseini'} 
            outline={true}
            success = {true}
            change={this.changeInput.bind(this)} />
          <Input 
            label={'نام خانوادگی'}
            rtl={true} 
            outline={true}
            value={'حسینی'} 
            success = {true}
            change={this.changeInput.bind(this)} 
          />
        </div>
        <div style={boxStyle} >
          <div style={boxTileStyle}>Inputs with Erros</div>
          <Input 
           label={'Last Name'}
            value={'Hosseini'} 
            error = {'This field is required'}
            change={this.changeInput.bind(this)} />
          <Input 
            label={'نام خانوادگی'}
            rtl={true} 
            value={'حسینی'} 
            error = {'ورود این فیلد الزامیست'}
            change={this.changeInput.bind(this)} 
          />
        </div>
        <div style={boxStyle} >
          <div style={boxTileStyle}>Outlined Inputs with Erros</div>
          <Input 
           label={'Last Name'}
            value={'Hosseini'} 
            outline= {true}
            error = {'This field is required'}
            change={this.changeInput.bind(this)} />
          <Input 
            label={'نام خانوادگی'}
            rtl={true} 
            outline= {true}
            value={'حسینی'} 
            error = {'ورود این فیلد الزامیست'}
            change={this.changeInput.bind(this)} 
          />
        </div>
        <div style={boxStyle} >
          <div style={boxTileStyle}>Textarea</div>
          <Input 
           label={'Description'}
            value={'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy'} 
            multiline={true}
            change={this.changeInput.bind(this)} />
          <Input 
            label={'توضیحات'}
            rtl={true} 
            multiline={true}
            value={'ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است'} 
            change={this.changeInput.bind(this)} 
          />
        </div>
        <div style={boxStyle} >
          <div style={boxTileStyle}>Outlined Textarea</div>
          <Input 
           label={'Description'}
           outline={true}
            value={'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy'} 
            multiline={true}
            change={this.changeInput.bind(this)} />
          <Input 
            label={'توضیحات'}
            outline={true}
            rtl={true} 
            multiline={true}
            value={'ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است'} 
            change={this.changeInput.bind(this)} 
          />
        </div>
        <div style={boxStyle} >
          <div style={boxTileStyle}>Inputs with Iocn</div>
          <Input 
            label={'Last Name'}
            value={'Hosseini'} 
            icon={sampleIcon}
            change={this.changeInput.bind(this)} />
          <Input 
            label={'نام خانوادگی'}
            icon={sampleIcon}
            rtl={true} 
            value={'حسینی'} 
            change={this.changeInput.bind(this)} 
          />
        </div>
        <div style={boxStyle} >
        <div style={boxTileStyle}>Outlined Inputs with Iocn</div>
          <Input 
            label={'Last Name'}
            value={'Hosseini'} 
            outline={true}
            icon={sampleIcon}
            change={this.changeInput.bind(this)} />
          <Input 
            label={'نام خانوادگی'}
           icon={sampleIcon}
            rtl={true} 
            outline={true}

            value={'حسینی'} 
            change={this.changeInput.bind(this)} 
          />
          
        </div>
        <div style={boxStyle} >
           <h1 >Select Samples</h1>  
         </div>
        
        <div style={boxStyle} >
          <div style={boxTileStyle}>Selects</div>
          <Select 
            label={'Last Name'}
            defaultValue ={33}
            values ={
              [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
              {id:'22',name:'feiz', info:{icon:sampleIcon}},
              {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
              {id:'44',name:'khosravi', info:{icon:sampleIcon}},
              {id:'44',name:'ranjbar', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id'}}
          />
          <Select 
            rtl={true}
            label={'نام خانوادگی'}
            defaultValue ={33}
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

        <div style={boxStyle} >
          <div style={boxTileStyle}>Outlined Selects</div>
          <Select 
            label={'Last Name'}
            defaultValue ={33}
            outline={true}
            values ={
              [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
              {id:'22',name:'feiz', info:{icon:sampleIcon}},
              {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
              {id:'44',name:'khosravi', info:{icon:sampleIcon}},
              {id:'44',name:'ranjbar', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id'}}
          />
          <Select 
            rtl={true}
            outline={true}
            label={'نام خانوادگی'}
            defaultValue ={33}
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


        <div style={boxStyle} >
          <div style={boxTileStyle}>Selects with Search</div>
          <Select 
            label={'Last Name'}
            defaultValue ={33}
            search = {true}
            searchLabel = {'search your item'}
            values ={
              [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
              {id:'22',name:'feiz', info:{icon:sampleIcon}},
              {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
              {id:'44',name:'khosravi', info:{icon:sampleIcon}},
              {id:'44',name:'ranjbar', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id'}}
          />
          <Select 
            rtl={true}
            label={'نام خانوادگی'}
            defaultValue ={33}
            search = {true}
            searchLabel = {'آیتم مورد نظرتان را جستجو کنید'}
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

        <div style={boxStyle} >
          <div style={boxTileStyle}>Outlined Selects with Search</div>
          <Select 
            label={'Last Name'}
            defaultValue ={33}
            outline={true}
            search = {true}
            searchLabel = {'search your item'}
            values ={
              [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
              {id:'22',name:'feiz', info:{icon:sampleIcon}},
              {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
              {id:'44',name:'khosravi', info:{icon:sampleIcon}},
              {id:'44',name:'ranjbar', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id'}}
          />
          <Select 
            rtl={true}
            outline={true}
            label={'نام خانوادگی'}
            defaultValue ={33}
            search = {true}
            searchLabel = {'آیتم مورد نظرتان را جستجو کنید'}
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
        <div style={boxStyle} >
          <div style={boxTileStyle}>Selects with Icon</div>
          <Select 
            label={'Last Name'}
            defaultValue ={33}
            search = {true}
            searchLabel = {'search your item'}
            values ={
              [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
              {id:'22',name:'feiz', info:{icon:sampleIcon}},
              {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
              {id:'44',name:'khosravi', info:{icon:sampleIcon}},
              {id:'44',name:'ranjbar', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id',icon:'info.icon'}}
          />
          <Select 
            rtl={true}
            label={'نام خانوادگی'}
            defaultValue ={33}
            search = {true}
            searchLabel = {'آیتم مورد نظرتان را جستجو کنید'}
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

        <div style={boxStyle} >
          <div style={boxTileStyle}>Outlined Selects with Icon</div>
          <Select 
            label={'Last Name'}
            defaultValue ={33}
            search = {true}
            searchLabel = {'search your item'}
            outline={true}
            values ={
              [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
              {id:'22',name:'feiz', info:{icon:sampleIcon}},
              {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
              {id:'44',name:'khosravi', info:{icon:sampleIcon}},
              {id:'44',name:'ranjbar', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id',icon:'info.icon'}}
          />
          <Select 
            rtl={true}
            outline={true}
            label={'نام خانوادگی'}

            defaultValue ={33}
            search = {true}
            searchLabel = {'آیتم مورد نظرتان را جستجو کنید'}            values ={
              [{id:'11',name:'حسینی' , info:{icon:sampleIcon}},
              {id:'22',name:'فیض', info:{icon:sampleIcon}},
              {id:'33',name:'محمدی', info:{icon:sampleIcon}},
              {id:'44',name:'خسروی', info:{icon:sampleIcon}},
              {id:'44',name:'رنجبر', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id',icon:'info.icon'}}
          />

        </div>
        <div style={boxStyle} >
          <div style={boxTileStyle}>Disabled Selects</div>
          <Select 
            label={'Last Name'}
            defaultValue ={33}
            disabled={true}
            values ={
              [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
              {id:'22',name:'feiz', info:{icon:sampleIcon}},
              {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
              {id:'44',name:'khosravi', info:{icon:sampleIcon}},
              {id:'44',name:'ranjbar', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id'}}
          />
          <Select 
            rtl={true}
            label={'Last Name'}
            defaultValue ={33}
            disabled={true}
            values ={
              [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
              {id:'22',name:'feiz', info:{icon:sampleIcon}},
              {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
              {id:'44',name:'khosravi', info:{icon:sampleIcon}},
              {id:'44',name:'ranjbar', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id'}}
          />

        </div>

        <div style={boxStyle} >
          <div style={boxTileStyle}>Disabled Outlined Selects</div>
          <Select 
            label={'Last Name'}
            defaultValue ={33}
            outline={true}
            disabled={true}
            values ={
              [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
              {id:'22',name:'feiz', info:{icon:sampleIcon}},
              {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
              {id:'44',name:'khosravi', info:{icon:sampleIcon}},
              {id:'44',name:'ranjbar', info:{icon:sampleIcon}}
            ]}
            mapping = {{text : 'name', value : 'id'}}
          />
          <Select 
            rtl={true}
            outline={true}
            label={'نام خانوادگی'}
            defaultValue ={33}
            disabled={true}
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
      </Fragment>
      
    );
  }
  
}

export default App;
