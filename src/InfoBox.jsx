import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){

    const INIT_URL =
     "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const COLD_URL ="https://plus.unsplash.com/premium_photo-1673188038550-4c27a7316ed4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c25vdyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D";
    const HOT_URL ="https://media.istockphoto.com/id/1478417436/photo/colorful-pennant-string-decoration-in-green-tree-foliage-on-blue-sky-summer-party-background.webp?b=1&s=170667a&w=0&k=20&c=s1yvMQa7m3cwxpNGFPlEdVEctCGnTWUmKlznXPB6Wsg="
    const RAIN_URL ="https://media.istockphoto.com/id/647210188/photo/water-drop-forming-a-sun.webp?b=1&s=170667a&w=0&k=20&c=bWmGY7IL0ikcNyxjwe3YNI2NtcA1n4YbZnZOLXhH9Yo=";

    return(
        <div className="weatherInfo">
        <div className='cardContainer'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia id="cardbox"
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL : info.temp>15 ? HOT_URL : COLD_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city} &nbsp;
        {info.humidity>80 ? 
        <ThunderstormIcon /> 
        : info.temp>15 ? <WbSunnyIcon /> 
        : <AcUnitIcon /> }

        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <p>Temperature : {info.temp}&deg;C</p>
        <p>Humidity : {info.humidity}</p>
        <p>Max-Temp : {info.tempMax}&deg;C</p>
        <p>Min-Temp : {info.tempMin}&deg;C</p>
        <p>The weather can be described as {info.weather} and feels like: {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
        </div>
        </div>
    )
}