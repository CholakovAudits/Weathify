const API_KEY = 'd71267c8db2c5f2f38dc2aa345a5d187';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

    return fetch(url)
        .then((res) => res.json())
        .then((data) => data);
};

export default getWeatherData;

