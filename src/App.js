import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ButtonContainer from './containers/buttonContainerjs'
import CheckboxContainer from './containers/checkboxContainer'
import InputContainer from './containers/inputContainer'
import SelectContainer from './containers/selectContainer'
import AutocompleteContainer from './containers/autocompleteContainer'
import TagContainer from './containers/tagContainer'
import ModalContainer from './containers/modalContainer'
import ToggleContainer from './containers/toggleContainer';
import TabContainer from './containers/tabContainer';
import CalendarContainer from './containers/calendarContainer';


class App extends Component {
  render (){
   return (
    <Router>
        <div className="page-sidebar">
            <h3 >React Material Forms </h3>  
            <h4 >Author : Abbas Hosseini</h4>
            <ul>
              <li><Link to="/button/">Button</Link></li>
              <li><Link to="/checkbox/">Checkbox</Link></li>
              <li><Link to="/input/">Input</Link></li>
              <li><Link to="/select/">Select</Link></li>
              <li><Link to="/autocomplete/">Autocomplete</Link> </li>
              <li><Link to="/tag/">Tag</Link> </li>
              <li><Link to="/modal/">Modal</Link> </li>
              <li><Link to="/toggle/">Toggle</Link> </li>
              <li><Link to="/tab/">Tab</Link> </li>
              <li><Link to="/calendar/">Calendar</Link> </li>
            </ul>
           
        </div>

        <div  className="page-content">
          <Route exact path="/" component={ButtonContainer} />
          <Route path="/button/" component={ButtonContainer} />
          <Route path="/checkbox/" component={CheckboxContainer} />
          <Route path="/input/" component={InputContainer} />
          <Route path="/select/" component={SelectContainer} />
          <Route path="/autocomplete/" component={AutocompleteContainer} />
          <Route path="/tag/" component={TagContainer} />
          <Route path="/modal/" component={ModalContainer} />
          <Route path="/toggle/" component={ToggleContainer} />
          <Route path="/tab/" component={TabContainer} />
          <Route path="/calendar/" component={CalendarContainer} />
        </div>
    </Router>
      
    );
  }
  
}

export default App;
