import React from 'react';

export function createIcon (icon){
    if(icon === null) return ;
    if (icon.type === 'svg'){
        return icon;
    }
    else {
        return <span className={icon}></span>
    }
}