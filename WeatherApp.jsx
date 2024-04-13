import SearchBox from './SearchBox.jsx'
import InfoBox from './InfoBox.jsx'
import { useState } from 'react'

export default function WeatherApp()
{
    let [info,setInfo]=useState({
        // city:"Delhi",
        // feelsLike: 17.92,
        // humidity:39,
        // temp: 18.95,
        // tempMax: 19.05,
        // tempMin: 18.95,
        // weather: "haze"
    })
    let updateInfo=(newinfo)=>{
        setInfo(newinfo);
    }

    return(
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={info}/>
        </div>
    )
}