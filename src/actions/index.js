import axios from 'axios';

const API_KEY = 'f97fb4f7a7b7ccd8e8f3a8a180ebf851';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, country = 'us') {
    const url = `${ROOT_URL}&q=${city},${country}`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
