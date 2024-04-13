import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateInfo})
{
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    // ?q={city name}&appid={API key}
    const API_key="5a76ac9a5da63afa40480ba11f5aef69";
    let [city,setCity]=useState("");
    let [err,setErr]=useState(false);

    async function getWeather()
    {
        try
        {
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_key}&units=metric`);
            let jsonResponse=await response.json();
            // console.log(jsonResponse);
            let result={
                city:city,
                temp:jsonResponse.main.temp,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                feelsLike:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].main
            }
            console.log(result);
            return result;
        }
        catch(err)
        {
            throw err;
        }
    }
    

    function handleChange(event)
    {
      setCity(event.target.value);
    }
   async function handleSubmit(event)
    {
       try
       {
            event.preventDefault();
            setCity("");
            let result= await getWeather()
            updateInfo(result);
            setErr(false);
       }
       catch(err)
       {
            setErr(true);
       }
    }

    return (
        <div className='whether'>

            <h1>Weather Status Today!</h1>
            <form onSubmit={handleSubmit}>
                <TextField required id="cityname" label="City Name" value={city} onChange={handleChange}/>
                <br /><br />
                <Button variant="contained" type="submit">Submit</Button>
                
            </form>
            {err===true? <p style={{color:"red"}}> No such place exist in API</p>:null
            }

        </div>
    )
}