import React, {Component} from 'react';

class Calendar extends Component {

    render (){
        return (
            <div class="r-calender">
                <div class="r-calender-header">
                    <div class="r-title">February 2015</div>
                    <div class="r-changer">
                        <svg viewBox="0 0 24 24">
                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                        <svg viewBox="0 0 24 24">
                            <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
                        </svg>
                    </div>
                </div>
                <div class="r-calender-content">
                    <table>
                        <thead class="r-calender-weeks">
                            <tr>
                                <th><span class="r-calender-week">Su</span></th>
                                <th><span class="r-calender-week">Mo</span></th>
                                <th><span class="r-calender-week">Tu</span></th>
                                <th><span class="r-calender-week">We</span></th>
                                <th><span class="r-calender-week">Th</span></th>
                                <th><span class="r-calender-week">Fr</span></th>
                                <th><span class="r-calender-week">Sa</span></th>
                            </tr>
                        </thead>
                        <tbody class="r-calender-days">
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><span class="r-calender-day">1</span></td>
                                <td><span class="r-calender-day r-calender-today">2</span></td>
                                <td><span class="r-calender-day">3</span></td>
                                <td><span class="r-calender-day">4</span></td>
                            </tr>
                            <tr>
                                <td><span class="r-calender-day">5</span></td>
                                <td><span class="r-calender-day">6</span></td>
                                <td><span class="r-calender-day">7</span></td>
                                <td><span class="r-calender-day">8</span></td>
                                <td><span class="r-calender-day">9</span></td>
                                <td><span class="r-calender-day">10</span></td>
                                <td><span class="r-calender-day">11</span></td>
                            </tr>
                            <tr>
                                <td><span class="r-calender-day">12</span></td>
                                <td><span class="r-calender-day">13</span></td>
                                <td><span class="r-calender-day">14</span></td>
                                <td><span class="r-calender-day">15</span></td>
                                <td><span class="r-calender-day">16</span></td>
                                <td><span class="r-calender-day">17</span></td>
                                <td><span class="r-calender-day">18</span></td>
                            </tr>
                            <tr>
                                <td><span class="r-calender-day">19</span></td>
                                <td><span class="r-calender-day">20</span></td>
                                <td><span class="r-calender-day">21</span></td>
                                <td><span class="r-calender-day">22</span></td>
                                <td><span class="r-calender-day">23</span></td>
                                <td><span class="r-calender-day">24</span></td>
                                <td><span class="r-calender-day">25</span></td>
                            </tr>
                            <tr>
                                <td><span class="r-calender-day">26</span></td>
                                <td><span class="r-calender-day">27</span></td>
                                <td><span class="r-calender-day">28</span></td>
                                <td><span class="r-calender-day">29</span></td>
                                <td><span class="r-calender-day">30</span></td>
                                <td><span class="r-calender-day">31</span></td>
                                <td></td>
                            </tr>
                        </tbody>
                        
                    </table>
                </div>
                <div class="r-calender-footer">
                        <button type="button" class="r-button r-ripple r-nospace"> Today </button>
                </div>
            </div>
        )
    }
}


export default Calendar