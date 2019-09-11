/************************************************************
 * Input Component
 ************************************************************/
<Input 
    label={'Last Name'} //label of input
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

/************************************************************
 * Select Component
 ************************************************************/
<Select 
    label={'Last Name'}//lable of Select
    values ={
        [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
        {id:'22',name:'feiz', info:{icon:sampleIcon}},
        {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
        {id:'44',name:'khosravi', info:{icon:sampleIcon}},
        {id:'44',name:'ranjbar', info:{icon:sampleIcon}}
    ]}
    mapping = {{text : 'name', value : 'id'}} //dataset for managing server model diffrences
    defaultValue ={33}
    showKey ={true} //show key on select list
    outline={true} //outlined input
    disabled={true} //disable select
    search = {true} // active search tool in select list
    searchLabel = {'search your item'}

/>