import './SearchBox.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function SearchBox({updateinfo}){
    let[city,setCity] = useState("")
    let[error,setError] = useState(false)

    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY ="c134b5afa66d26e9ecd776208d573700";

    let getWeatherInfo = async() =>{
        try{
        let response  = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            feelsLike: jsonResponse.main.feels_like,
            humidity: jsonResponse.main.humidity,
            weather: jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
    }catch(err) {
        throw err;
    }
    }

    
    let handleCity =  (evt) =>{
        setCity(evt.target.value);
    }

    let handleSubmit = async(evt) =>{
        try{
            evt.preventDefault();
        console.log(city);
        setCity("")
        let newInfo = await getWeatherInfo();
        updateinfo(newInfo);
        }catch(err){
            setError(true)
        }
    }    

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit} >
            <TextField
             id="city"
             label="City Name"
            variant="filled"  
            required 
            value={city} 
            onChange={handleCity}
            placeholder='Search for city...'
            />
            <br /><br />
            <Button variant="contained" type="submit">
                Search
            </Button>
            {error && <p style={{color: "red"}}>No such place exist! </p>}
            </form>
        </div>
    )
}