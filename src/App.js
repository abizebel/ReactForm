import React, {Component,Fragment} from 'react';
import {Input} from './components/ReactForm';

class App extends Component {

  changeInput (val){
   console.log(val)
  }
  render (){
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
          <Input 
            label={'Last Name'}
              value={'Hosseini'} 
              change={this.changeInput.bind(this)} />
          <Input 
              label={'نام خانوادگی'}
              rtl={true} 
              value={'حسینی'} 
              error ={'ورود این فیلد الزامیست'}
              change={this.changeInput.bind(this)} 
          />
        </div>
      </Fragment>
      
    );
  }
  
}

export default App;
