import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import './WeatherApp.css'; // Import the new CSS file

export default function WeatherApp() {
    const [Weatherinfo, setWeatherInfo] = useState({
        city: "Delhi",
        feels_like: 34.76,
        humidity: 65,
        temp: 30.4,
        temp_max: 30.4,
        temp_min: 30.4,
        weather: "clear sky"
    });

    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div className="WeatherApp">
            <h1 style={{ textAlign: "center" }}>Weather App By Ankit</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={Weatherinfo} />
        </div>
    );
}
