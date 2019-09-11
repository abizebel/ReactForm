import React, {Component,Fragment} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Input, Select, Autocomplete, Tag} from './components/ReactForm';
import InputContainer from './containers/inputContainer'
import SelectContainer from './containers/selectContainer'
import AutocompleteContainer from './containers/autocompleteContainer'
import TagContainer from './containers/tagContainer'


const boxStyle ={width:'250px',position:'fixed',top:0,height:'100%',float:'left',background:'#eee',borderRight:'1px solid #ccc',padding:'15px'}





class App extends Component {

  changeInput (val){
   console.log(val)
  }
  render (){
   return (
    <Router>
         <div style={boxStyle} >
           <h2 >React Material Forms</h2>  
           <h3 >Author : Abbas Hosseini</h3>
           <h3 >Components</h3>
           <ul>

              <li>
                <Link to="/input/">Input</Link>
              </li>
              <li>
                <Link to="/select/">Select</Link>
              </li>
              <li>
                <Link to="/autocomplete/">Autocomplete</Link>
              </li>
              <li>
                <Link to="/tag/">Tag</Link>
              </li>
            </ul>

            
         </div>
        <div style={{width:'75%',float:'right'}}>
             <Route path="/input/" component={InputContainer} />
              <Route path="/select/" component={SelectContainer} />
              <Route path="/autocomplete/" component={AutocompleteContainer} />
              <Route path="/tag/" component={TagContainer} />
        </div>
         </Router>
      
    );
  }
  
}

export default App;
