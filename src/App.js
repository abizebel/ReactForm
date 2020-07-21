import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ButtonContainer from './containers/buttonContainerjs';
import CheckboxContainer from './containers/checkboxContainer';
import {SimpleInput, IconInput, RequiredInput, RegexInput, DisabledInput, Textarea} from './containers/Input';
import SelectContainer from './containers/selectContainer';
import MultiSelectContainer from './containers/multiSelectContainer';

import AutocompleteContainer from './containers/autocompleteContainer';
import TagContainer from './containers/tagContainer';
import ModalContainer from './containers/modalContainer';
import ToggleContainer from './containers/toggleContainer';
import TabContainer from './containers/tabContainer';
import {SimpleCalendar, RangeCalendar, DisabledCalendar, MonthCalendar, DatePicker, DateButtonPicker, DisabledSides} from './containers/Calendar';
import DatepickerContainer from './containers/datepickerContainer';
import TableContainer from './containers/tableContainer';
import $ from 'jquery'
import TreeContainer from './containers/treeContainer';

class App extends Component {
    toggle = (e) =>{
        e.preventDefault()
        $(e.target).closest('li').find('ul').toggle(500);
        let span = $(e.target).closest('li').find('>a > span').eq(0);
        var cls = span.attr('class');
        if (cls === 'mdi mdi-chevron-right') {
            span.removeClass('mdi-chevron-right')
            span.addClass('mdi-chevron-down')
        }
        else {
            span.removeClass('mdi-chevron-down')
            span.addClass('mdi-chevron-right')
        }
        
    }
    render (){
    return (
        <Router>


        <div id="main">
            <div id="sidebar">
                <div className="sidebar-header">
                    <img src="../../images/react-icon.svg" alt="" width="70" />
                    <h2>React Components</h2>
                </div>
                <div className="sidebar-search">
                    <input type="text" placeholder="Search your component ..." />
                </div>
                <div className="sidebar-menu">
                    <ul>
                        <li onClick={this.toggle}> 
                            <a href=""><span className="mdi mdi-chevron-right"></span>Inputs</a>
                            <ul>
                                <li><Link to="/input/simple">Simple</Link></li>
                                <li><Link to="/input/icon">with icon</Link></li>
                                <li><Link to="/input/required">Required</Link></li>
                                <li><Link to="/input/regex">Regex</Link></li>
                                <li><Link to="/input/disabled">Disabled</Link></li>
                                <li><Link to="/input/textarea">Textarea</Link></li>
                            </ul>
                        </li>
                        <li>
                            <a href=""><span className="mdi mdi-chevron-right"></span>Select</a>
                            <ul>
                                <li><Link to="/select">Simple</Link></li>
        
                            </ul>
                        </li>
                        <li>
                            <a href=""><span className="mdi mdi-chevron-right"></span>MultiSelect</a>
                            <ul>
                                <li><Link to="/multiselect">MultiSelect</Link></li>
        
                            </ul>
                        </li>
                        <li onClick={this.toggle}>
                            <a href=""><span className="mdi mdi-chevron-right"></span>Calenders</a>
                            <ul>
                                <li><Link to="/calendar/simple">Simple Calendar</Link> </li>
                                <li><Link to="/calendar/range">Rangle Calendar</Link> </li>
                                <li><Link to="/calendar/disabled">Disabled Calendar</Link> </li>
                                <li><Link to="/calendar/disabledsides">Disabled Sides Calendar</Link> </li>
                                <li><Link to="/calendar/month">Month Calendar</Link> </li>
                                <li><Link to="/calendar/datepicker">Datepicker</Link> </li>
                                <li><Link to="/calendar/datebuttonpicker">DateButtonPicker</Link> </li>
                            </ul>
                        </li>
                        <li onClick={this.toggle}>
                            <a href=""><span className="mdi mdi-chevron-right"></span>Tree</a>
                            <ul>
                                <li><Link to="/tree">TreeList</Link></li>
        
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
            <div id="content">
                <div className="content-header">
                    
                </div>
                <Route exact path="/" component={ButtonContainer} />
                <Route path="/button/" component={ButtonContainer} />
                <Route path="/checkbox/" component={CheckboxContainer} />
                <Route path="/input/simple" component={SimpleInput} />
                <Route path="/input/icon" component={IconInput} />
                <Route path="/input/required" component={RequiredInput} />
                <Route path="/input/regex" component={RegexInput} />
                <Route path="/input/disabled" component={DisabledInput} />
                <Route path="/input/textarea" component={Textarea} />



                <Route path="/select/" component={SelectContainer} />
                <Route path="/multiselect/" component={MultiSelectContainer} />
                <Route path="/autocomplete/" component={AutocompleteContainer} />
                <Route path="/tag/" component={TagContainer} />
                <Route path="/modal/" component={ModalContainer} />
                <Route path="/toggle/" component={ToggleContainer} />
                <Route path="/tab/" component={TabContainer} />

                <Route path="/calendar/simple" component={SimpleCalendar} />
                <Route path="/calendar/range" component={RangeCalendar} />
                
                <Route path="/calendar/disabledsides" component={DisabledSides} />
                <Route path="/calendar/disabled" component={DisabledCalendar} />
                <Route path="/calendar/month" component={MonthCalendar} />
                <Route path="/calendar/datepicker" component={DatePicker} />
                <Route path="/calendar/datebuttonpicker" component={DateButtonPicker} />


                <Route path="/datepicker/" component={DatepickerContainer} />

                <Route path="/tree/" component={TreeContainer} />
                <Route path="/table/" component={TableContainer} />
            </div>
        </div>
    
        </Router>
        
        );
    }
  
}

export default App;
