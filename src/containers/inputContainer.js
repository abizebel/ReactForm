import React, {Component,Fragment} from 'react';
import {Input} from '../components/ReactForm';

class InputContainer extends Component {

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
          <div style={boxTileStyle}>Input</div>
          <Input 
            label={'Last Name'}
            value={''} 
            change={this.changeInput.bind(this)} />
          <Input 
             label={'نام خانوادگی'}
            rtl={true} 
            value={''} 
            change={this.changeInput.bind(this)} 
          />
        </div>
        <div style={boxStyle} >
          <div style={boxTileStyle}>Oulined Input</div>
          <Input 
           label={'Last Name'}
            value={''} 
            outline ={true}
            change={this.changeInput.bind(this)} />
          <Input 
            label={'نام خانوادگی'}
            rtl={true} 
            outline ={true}
            value={''} 
            change={this.changeInput.bind(this)} 
          />
        </div>
        <div style={boxStyle} >
          <div style={boxTileStyle}>Disabled Input</div>
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
          <div style={boxTileStyle}>Oulined Disabled Input</div>
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
          <div style={boxTileStyle}>Input with Success Icon</div>
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
          <div style={boxTileStyle}>Outlined Input with Success Icon</div>
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
          <div style={boxTileStyle}>Input with Erros</div>
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
          <div style={boxTileStyle}>Outlined Input with Erros</div>
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
          <div style={boxTileStyle}>Input with Iocn</div>
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
        <div style={boxTileStyle}>Outlined Input with Iocn</div>
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
  
      </Fragment>
      
    );
  }
  
}

export default InputContainer;
