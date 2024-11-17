import React,{useState, useEffect} from "react";
import axios from "axios";
import ForcastDay from "./ForcastDay";


  export default function WeatherForcast(props){
    let[forcast, setForcast]=useState(null);
    let[loaded, setLoaded]=useState(false);

    
 useEffect(()=>{
  setLoaded(false)
 },[props.coordinates])
console.log(forcast)
 function displayForcast(response){
    setLoaded(true)
    setForcast(response.data.daily)
 }

 
 
    if(loaded){
    return(
        <div className="forcast">
           {forcast.map(function(dailyForcast, index){
            if(index < 6){
            return(
              <div key={index}>
              <ForcastDay forcast={dailyForcast}/>
              </div>
            )
          }
           })}

   
   </div> 
    
    )

    
    }
    else{
        let apiKey="93cf0a589b1befff9b43f05fbt79bo02"
    let latitude= props.coordinates.latitude;
    let longitude= props.coordinates.longitude;
    let apiUrl=`https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`
   
      axios.get(apiUrl).then(displayForcast);
    }
    return "Loading.."

}