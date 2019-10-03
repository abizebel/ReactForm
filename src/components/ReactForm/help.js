/************************************************************
 * Input Component
 ************************************************************/
<Input 
    label={'Last Name'} //label of input
    value={'Hosseini'} //value of input
    change={this.changeInput.bind(this)} //change method of input
    icon={'icon icon-home'} //user svg or icon string
    //Error handling
    serverError={{status : true,  message : 'this has a error'}}
    regex = {{pattern :  /^\d+$/, message : 'should be number'}}
    required={'this field is required'}
    //Booleans
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
    multi={true} // multi selecting => defaultValue should be array [33,22]
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
    api={'api/autocomplete'} //get search tag result from server
    values ={//if not exist api use this as tag list
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
    defaultValue ={[{name : 'ahmadi'},{name : 'rahimi'}]}
    api={'api/getTag'} //get search tag result from server
    values ={//if not exist api use this as tag list
        [{id:'11',name:'Hosseini' },
        {id:'22',name:'feiz'},
        {id:'33',name:'mohammadi'},
        {id:'44',name:'khosravi'},
        {id:'44',name:'ranjbar'}
    ]}
    mapping = {{text : 'name', value : 'id',}}
    //Boolean items
    rtl={true}
    disabled={true}
    outline = {true}
    //Translate
    notFoundMessage = {'Not Found'}

/>

/************************************************************
 * CHECKBOX
 ************************************************************/

<Checkbox 
change={this.changeCheckbox.bind(this)}
defaultValue={}
rtl={true}
disabled={true}
size = {'xs' || 'lg'}
justViewMode={true}//when true handle checkbox just with defaultValue hanle change not work
nospace={true} //When use it into other componenet remove spaces
/>