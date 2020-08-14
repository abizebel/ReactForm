import React, {Component,Fragment} from 'react';
import { ScheduleCalendar } from '../../components/ReactForm';


function generateMonthDays () {
    let arr =[];
    for (let i=1 ; i<31; i++) {
        arr.push({
            name : String(i) ,
            status : 1,//تعطیل - کاری - عادی
            startTime : '8:12',//زمان شروع
            endtime : '8:12',//زمان پایان
            duration : 8,// زمان به دقیقه
            usefullDuration : 5,// زمان مفید
            overtimeDuration : 2,// زمان اضافه کاری
            description : 'عالی است',
            totalDuration : 2,//جمع زمان
            totalOvertimeDuration : 3,// جمع اضافه کاری
            totalusefullDuration : 4, // جمع زمان مفید
        })
    }
    return arr;
}

function generateMonths () {
    const months = [ 'فروردین',  'اردیبهشت',  'خرداد',  'تیر',  'مرداد', 'شهریور',  'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند' ];
    let arr =[];
    for (let i=0 ; i<12; i++) {
        arr.push({
            name : months[i] + ' سال 99',
            days : generateMonthDays()
        })
    }
    return arr
}
async function loadCalendar () {
    let api = new Promise ((resolve, reject)=>{
        setTimeout(()=>{  resolve({  months : generateMonths()  })  },200)
    });

    return api
}


class ScheduleCalendarContainer extends Component {
    change (val){
        console.log(val)
    }
        
    render (){
        return (
        <Fragment>
            <div className="content-box" >
                <div className="content-title">Simple Schedule Calendar</div>
              
                <ScheduleCalendar
                    api={loadCalendar}
                />

            </div>
            

        </Fragment>
        
        );
    }
  
}

export default ScheduleCalendarContainer;
