import React from "react";
import "./Weather.css";




export default function ForcastDay(props){
    

    function ForcastDay(){
        let now = new Date(props.forcast.time*1000);
        let days =["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        let day= days[now.getDay()];
        return day
    }
    

    function maxTemperature(){
        let maxTemp=Math.round(props.forcast.temperature.maximum);
        return `${maxTemp}`
    }

    function minTemperature(){
        let minTemp=Math.round(props.forcast.temperature.minimum);
        return <span className="red">{minTemp}</span>
    }
    
    

    return(
        
    <div className="forcast ">
       
        
        <div className="forcastWrapper">
            <div 
            className="forcastDay"> {ForcastDay()} 
            </div>
          
                <div >
                    <img src={props.forcast.condition.icon_url} 
                    alt={props.forcast.condition.description}  className="forcastIcon"/>
                </div>
                
                <div className="max-min">
                <span className=" minTemperature fw-light">{minTemperature()}°
                </span>
                <span className="maxTemperature colorChange" >{maxTemperature()}°
                </span>
                 </div>
       
        </div>
        
</div>
    
        
    )
}