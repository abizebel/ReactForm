import React , { Component, useEffect, useState} from 'react';
import './ScheduleCalendar.scss';
import RightClick from '../RightClick/RightClick';

const latinToPersianMap = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'];
const latinNumbers = [/1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g, /0/g];
function latinToPersian(string) {
    let result = string;
  
    for (let index = 0; index < 10; index++) {
      result = result.replace(latinNumbers[index], latinToPersianMap[index]);
    }
  
    return result;
}
  
 function persianNumber(input) {
    return latinToPersian(prepareNumber(input));
}
  
function prepareNumber(input) {
    let string;
    if (typeof input === 'number') {
      string = input.toString();
    } else if (typeof input === 'undefined') {
      string = '';
    } else {
      string = input;
    }
  
    return string;
  }


function ScheduleScheduleCalendar (props) {
    const {api} = props;

    const [data, setData] = useState(null);
    const [showMenu, setShowMenu] = useState(false)


    useEffect ( ()=>{
        load()
        
    })


    const load = async () =>{
        let d =  await api();
        setData(d)
    }

    const handler = e =>{
        e.preventDefault();
        setShowMenu(true)
    }
    const close = () =>{
        setShowMenu(false)
    }

    const renderCalendar = (month) =>{
       
        let days = month.days.map( (o, i) =>{
            return (
                <div onContextMenu={handler} class="r-calendar-item"><span> {persianNumber(o.name)} </span></div>
            )
        })


        return (
            <div class="r-schedule-calendar">
                <div class="r-calendar-wrapper">
                    <div class="r-calendar-header">
                        <div class="r-title">{month.name}</div>
                    </div>
                    <div class="r-calendar-content">
                        <div class="r-calendar-item r-week"><span>ش</span></div>
                        <div class="r-calendar-item r-week"><span>ی</span></div>
                        <div class="r-calendar-item r-week"><span>د</span></div>
                        <div class="r-calendar-item r-week"><span>س</span></div>
                        <div class="r-calendar-item r-week"><span>چ</span></div>
                        <div class="r-calendar-item r-week"><span>پ</span></div>
                        <div class="r-calendar-item r-week"><span>ج</span></div>
                        
                        {/* <div class="r-calendar-item r-today"><span> {o.name} </span></div> */}
                        {days}
                    </div>
                </div>
            </div>
        )
    }

    const renderCalendars = () =>{
        if (!data) return null;
        return data.months.map((o, i) =>{
            return renderCalendar(o)
        })
    }
    
    return (
        <div class="r-schedule r-rtl">
             <div className="r-schedule-toolbar">
               asdasdasdasdasd
            </div>
            <div className="r-schedule-calendars">
                {showMenu && <h1>adasdasdasdasdasdsadasdasdasd</h1> }
                {renderCalendars()}
            </div>
           
        </div>
    )

}



export default ScheduleScheduleCalendar