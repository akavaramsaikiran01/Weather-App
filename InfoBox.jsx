import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import './infoBox.css'

export default function InfoBox({info})
{
    // let img_url="https://plus.unsplash.com/premium_photo-1677593850639-9f1e14e4524b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdlYXRoZXIlMjBwcmVkaWN0aW9ufGVufDB8fDB8fHww";
    let Rainy_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8=";
    let cool_URL="https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D";
    let hot_URL="https://images.unsplash.com/photo-1561473880-3b8b12de0a71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";


    return(
        <div>
             <h2>Weather Info - {info.weather}</h2>
             <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity>80?Rainy_URL:(info.temp>15?hot_URL:cool_URL)}
                        title="green iguana"
                />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city}{info.humidity>80?<ThunderstormIcon/>:(info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature : {info.temp}&deg;C</p>
                        <p>Max Temp : {info.tempMax}&deg;C</p>
                        <p>Min Temp : {info.tempMin}&deg;C</p>
                        <p>Humidity : {info.humidity}</p>
                        <p>Weather can be described as <i>{info.weather} and feels like {info.feelsLike}</i></p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}