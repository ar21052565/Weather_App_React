import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({ info }) {
    const HOT_URL = "https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.jpg?s=2048x2048&w=is&k=20&c=MEinOvXAEFy9XXcclTgQV64m_FaoT_NRz8YyWItS9zM=";
    const RAINY_URL = "https://images.unsplash.com/photo-1695781401227-2762f7889d9e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const WINTER_URL = "https://images.unsplash.com/photo-1648518520687-34a14d251b10?q=80&w=1891&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const getWeatherCondition = () => {
        if (info.humidity > 80) return "Rainy";
        if (info.temp > 15) return "Sunny";
        return "Cold";
    };

    const getImageUrl = () => {
        if (info.humidity > 80) return RAINY_URL;
        if (info.temp > 15) return HOT_URL;
        return WINTER_URL;
    };

    return (
        <div className='InfoBox'>
            <div className='container'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={getImageUrl()}
                        title={getWeatherCondition()}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} - {getWeatherCondition()}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Humidity: {info.humidity}%</p>
                            <p>Temperature: {info.temp}&deg;C</p>
                            <p>Max Temperature: {info.temp_max}&deg;C</p>
                            <p>Min Temperature: {info.temp_min}&deg;C</p>
                            <p>Current Weather: <i>{info.weather}</i>, feels like {info.feels_like}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
