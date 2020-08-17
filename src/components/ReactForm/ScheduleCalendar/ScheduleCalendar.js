import React , { Component, useEffect, useState} from 'react';
import './ScheduleCalendar.scss';
import RightClick from '../RightClick/RightClick';
import Select from '../Select/Select';
import Icons from '../icons'
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
    const [showMenu, setShowMenu] = useState(false);
    const [posX, setPosX] = useState(null);
    const [posY, setPosY] = useState(null)


    useEffect ( ()=>{
        load()
        
    })


    const load = async () =>{
        let d =  await api();
        setData(d)
    }

    const handler = e =>{
        e.preventDefault();
        e.stopPropagation()
        setShowMenu(true)
        setPosX( e.pageX)
        setPosY(e.pageY)
    }
    const close = () =>{
        setShowMenu(false)
    }

    const renderCalendar = (month) =>{
       
        let days = month.days.map( (o, i) =>{
            return (
                <div onContextMenu={handler} class="r-calendar-item"><div> {persianNumber(o.name)} </div></div>
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
    const getMenuItems = () =>{
        return [
            {   
                icon : 'mdi mdi-content-cut',
                name : 'روز تعطیل',
                cb : () =>{
                    alert(1)
                }
            },
        ]
    }
    return (
        <div class="r-schedule r-rtl">
             <div className="r-schedule-toolbar">
                 <div>
                    <Select
                        style={{margin: 0}} 
                        change={val => {}}   
                        rtl = {true} 
                        label={'نام تقویم کاری'}
                        values ={ //icon can be <svg></svg> or 'mdi mdi-home'
                            [{id:'11',name:'Hosseini' },
                            {id:'22',name:'feiz'},
                            {id:'33',name:'mohammadi'},
                            {id:'44',name:'khosravi'},
                            {id:'44',name:'ranjbar'}
                        ]}
                        mapping = {{text : 'name', value : 'id'}} //dataset for managing server model diffrences
                        defaultValue ={33} // is id of selected value
                        nullable={true} // user cant select no item
                        outline={true}  // outlined input
                        search = {true} // active search tool in select list
                    />
                </div>
                <div className="change-year">
                    <ul>
                        <li className="change-icon">{Icons.left}</li>
                        <li className="change-year">سال 1396</li>
                        <li className="change-icon">{Icons.right}</li>
                    </ul>
                </div>
                <div className="toolbar-buttons" >
                    <button type="button" class="r-button r-ripple r-xs "> {Icons.close} </button>
                    <button type="button" class="r-button r-ripple  r-xs"> {Icons.save} </button>
        
                </div>
            </div>
            <div className="r-schedule-calendars">
                {renderCalendars()}
            </div>
            {showMenu && <RightClick  style={{minHeight:100, minWidth:40}} rtl={true} onClose={close} items={getMenuItems()} posX={posX} posY={posY}  /> }

        </div>
    )

}



export default ScheduleScheduleCalendar