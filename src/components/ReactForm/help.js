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
    //Basic
    change={this.changeSelect.bind(this)}    
    label={'Last Name'}
    values ={ //icon can be <svg></svg> or 'mdi mdi-home'
        [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
        {id:'22',name:'feiz', info:{icon:sampleIcon}},
        {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
        {id:'44',name:'khosravi', info:{icon:sampleIcon}},
        {id:'44',name:'ranjbar', info:{icon:sampleIcon}}
    ]}
    mapping = {{text : 'name', value : 'id'}} //dataset for managing server model diffrences
    defaultValue ={33} // is id of selected value
    //Boolean items
    nullable={true} // user cant select no item
    showKey ={true} // show key on select list
    outline={true}  // outlined input
    disabled={true} // disable select
    search = {true} // active search tool in select list
    //Translate
    searchLabel = {'search your item'}
    notFoundMessage = {'Not Found'}
    notSelectedText = {'Not Selected'}

/>



/************************************************************
 * AUTOCOMPLETE
 ************************************************************/
<Autocomplete 
    //Basic
    change={this.changeAutocomplete.bind(this)}
    label={'Last Name'}
    defaultValue ={'abbas'}
    values ={
    [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
    {id:'22',name:'feiz', info:{icon:sampleIcon}},
    {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
    {id:'44',name:'khosravi', info:{icon:sampleIcon}},
    {id:'44',name:'ranjbar', info:{icon:sampleIcon}}
    ]}
    mapping = {{text : 'name', value : 'id'}}
    //Boolean items
    outline = {true}
    rtl = {true}
    disabled={true}
    //Translate
    notFoundMessage = {'Not Found'}
/>


/************************************************************
 * TAG
 ************************************************************/
<Tag 
    change={this.changeTag.bind(this)}
    label={'Last Name'}
    rtl={true}
    disabled={true}
    outline = {true}
    defaultValue ={{value : 'Hosseini' ,icon : sampleIcon}}
    values ={
        [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
        {id:'22',name:'feiz', info:{icon:sampleIcon}},
        {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
        {id:'44',name:'khosravi', info:{icon:sampleIcon}},
        {id:'44',name:'ranjbar', info:{icon:sampleIcon}}
    ]}
    mapping = {{text : 'name', value : 'id',icon:'info.icon'}}
/>

/************************************************************
 * CHECKBOX
 ************************************************************/

<Checkbox 
change={this.changeCheckbox.bind(this)}
rtl={true}
disabled={true}
size = {'xs' || 'lg'}
/>