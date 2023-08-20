import { DateTime } from "luxon";

const API_KEY = 'd71267c8db2c5f2f38dc2aa345a5d187';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';;

const getWeatherData = async (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

    return fetch(url)
        .then((res) => res.json())
        .then((data) => data);
};

const formatCurrentWeather = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed }
    } = data;

    const { main: details, icon } = weather[0];

    return {
        lat,
        lon,
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        name,
        dt,
        country,
        sunrise,
        sunset,
        details,
        icon,
        speed
    };
};

const formatForecastWeather = (data) => {
    let { timezone, daily, hourly } = data;

    hourly = hourly.slice(1, 7).map((d) => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp,
            icon: d.weather[0].icon
        };
    });

    daily = daily.slice(1, 7).map((d) => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        };
    });

    return { timezone, daily, hourly };
};

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams)
        .then(formatCurrentWeather);

    const { lat, lon } = formattedCurrentWeather;

    const formattedForecastWeather = await getWeatherData('onecall', {
        lat,
        lon,
        exclude: 'current,minutely,alerts',
        units: searchParams.units,
    }).then(formatForecastWeather);

    return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") => DateTime
    .fromSeconds(secs)
    .setZone(zone)
    .toFormat(format);

const iconUrl = (iconCode) => `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

export const geoApiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'be699ce3e6mshe391e5ea439500fp1626e6jsnc5cbab2a6808',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};

export { getFormattedWeatherData, formatToLocalTime, iconUrl };