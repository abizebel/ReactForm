<Autocomplete 
    //Basic
    change={this.changeAutocomplete.bind(this)}
    label={'Last Name'}
    defaultValue ={'abbas'}
    //remote tag search
    api={async (str) =>{
        const list = await loadApi({Query :str});
        return list.Data
    }}
    values ={//if not exist api use this as tag list
    [{id:'11',name:'Hosseini' , info:{icon:sampleIcon}},
    {id:'22',name:'feiz', info:{icon:sampleIcon}},
    {id:'33',name:'mohammadi', info:{icon:sampleIcon}},
    {id:'44',name:'khosravi', info:{icon:sampleIcon}},
    {id:'44',name:'ranjbar', info:{icon:sampleIcon}}
    ]}
    mapping = {{text : 'name', value : 'id'}}
    //Error handling
    serverError={{status : true,  message : 'this has a error'}}
    required={'This field is required'}
    //Boolean items
    outline = {true}
    rtl = {true}
    disabled={true}
    //Translate
    notFoundMessage = {'Not Found'}
/>
