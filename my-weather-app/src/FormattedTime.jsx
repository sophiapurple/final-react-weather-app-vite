import React from "react";

export default function FormattedTime(props){
    console.log(props.time)
    let day =["Sunday","Monday","Tuesday","Wednesday","Thursady","Friday","Saturday"];
    let days =day[props.time.getDay()]
    let hour = props.time.getHours();
    if(hour < 10){
        hour= `0${hour}`
    }
    let mins = props.time.getMinutes();
    if(mins < 10){
        mins=`0:${mins}`
    }
    return(
        <div>
        <div>{days}</div>
        <div className="colorChange">{hour}:{mins}</div>
        </div>
        
    )
}