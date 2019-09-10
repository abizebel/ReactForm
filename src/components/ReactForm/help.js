/************************************************************
 * Input Component
 ************************************************************/
<Input 
    label={'Last Name'} //lable of input
    value={'Hosseini'} //value of input
    change={this.changeInput.bind(this)} //change method of input
    icon={'icon icon-home'} //user svg or icon string
    error={'this filed has a error'} //string - never use success and error together
    success={true} //never use success and error together
    disabled={true} //disable input
    outline={true} //outlined input
    rtl={true} //rtl support
    multiline={true} //textarea
/>