import axios from 'axios';

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_Key = "79946b6e9a2cbe91e515ffe5635089a2";

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL ,{
        params: {
            q: query,
            units: 'metric',
            APPID: API_Key,
        }
    })

    return data;
}