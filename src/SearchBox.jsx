import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';
import InfoBox from './InfoBox';

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "c3ff8f1ed17bfccd4d387a9e5c00aca5";

    const get_weather_info = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let data = await response.json();

            // Check if the response contains a valid city and weather data
            if (response.ok) {
                let result = {
                    city: city,
                    temp: data.main.temp,
                    temp_max: data.main.temp_max,
                    temp_min: data.main.temp_min,
                    humidity: data.main.humidity,
                    feels_like: data.main.feels_like,
                    weather: data.weather[0].description,
                };
                console.log(result);
                setError(false); // Reset error state on successful fetch
                return result;
            } else {
                throw new Error(data.message); // Handle specific error messages from the API
            }
        } catch (err) {
            console.error(err);
            setError(true); // Set error state if fetch fails or if the city is not found
        }
    };

    const updateCityName = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(city);
        let newInfo = await get_weather_info();
        if (newInfo) {
            updateInfo(newInfo);
        }
        setCity(""); // Clear city input after submission
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={updateCityName}
                />
                <br /><br />
                <Button variant="contained" type='submit'>
                    Search
                </Button>
                {error && <p style={{ color: "red" }}>No such place exists in our API or another error occurred.</p>}
            </form>
        </div>
    );
}
