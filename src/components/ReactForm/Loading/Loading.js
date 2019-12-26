import React, {Component} from 'react';
import './Loading.scss'


export function DotsLoading(props){
    return (
        <div class="r-dots-loading">
            <div>{props.text}</div>&nbsp;
            <div class="dot one"></div>
            <div class="dot two"></div>
            <div class="dot three"></div>
        </div>
    )
}