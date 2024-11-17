import React from "react";
import UnitConversion from "./UnitConversion";
import FormattedTime from "./FormattedTime";






export default function weatherData(props){

    return (
    <div className="WeatherData ">
       
       
        <div className="city-temp">
        <div className=" city">{props.data.city}</div>
       
        <div className=" temp colorChange"> <UnitConversion Celsius={props.data.temperature}/></div>

       </div>
        
        
        
   <div className="currentWrapper">
   <div className="currentWeather ">{` ${props.data.humidity}`}
    <p className="colorChange">humidity</p>
  </div>



<div className="currentWeather "> <FormattedTime time={props.data.time}/></div>
</div>

<div className="currentWrapper">
<div className="currentWeather">{props.data.description}
    <p className="colorChange">description</p>
</div>
  
<div className="currentWeather ">{" "}{`${props.data.wind} km/h`}
<p className="colorChange">wind</p>
</div>
  </div>


   </div>

    )
}