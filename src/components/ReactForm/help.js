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

<Select 
    label={'Last Name'}
    defaultValue ={33}
    outline={true}
    disabled={true}
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