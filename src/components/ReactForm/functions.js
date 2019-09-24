import React from 'react';


export function createUID (){
    var S4 = function() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
     };
     return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

export function createIcon (icon){
    if(icon === null) return ;
    if (icon.type === 'svg'){
        return icon;
    }
    else {
        return <span className={icon}></span>
    }
}

export function getValueByProp(obj, field) {
    if (field === undefined) {  console.log('field is wrong'); debugger; return false; }
    if (Array.isArray(field)) { field = field[obj.level]; }
    if (field === undefined) {  console.log('field is wrong'); debugger; return false; }
    field = field.split('.');
    var value = obj[field[0]];
    for (var i = 1; i < field.length; i++) {
      if (!value) { return '' }
      value = value[field[i]];
    }
    return value;
}


export function getValueById (arr, id, mappingName){
    return arr.filter(item => String(item[mappingName]) === String(id))[0]
}
