<h3 align="center">WEATHIFY</h3>

  <p align="center">
    Application that displays the current weather forecast for a specific city
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<a href="https://drive.google.com/uc?export=view&id=1OqjjHF0NYIjKlKQOMV9FeQ7KhxsRPP49"><img src="https://drive.google.com/uc?export=view&id=1OqjjHF0NYIjKlKQOMV9FeQ7KhxsRPP49" style="width: 650px; max-width: 100%; height: auto" title="Click to enlarge picture" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- [![Tailwind][TailwindCSS]][TailwindCSS-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:CholakovAudits/Weather-App.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your API in `weatherService.js`

   You can get it from https://api.openweathermap.org/

```js
const API_KEY = "ENTER YOUR API";
```

4. Start the application

```sh
npm start
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

### Display the current weather forecast for a specific city:

- Enter a city name in the input field and select it from the dropdown list.

<a href="https://drive.google.com/uc?export=view&id=14x5_a5FLF60xFuHXwTkGA4nAwmx4tY3n"><img src="https://drive.google.com/uc?export=view&id=14x5_a5FLF60xFuHXwTkGA4nAwmx4tY3n" style="width: 650px; max-width: 100%; height: auto" title="Click to enlarge picture" />

### Refresh the weather data:

- Press the refresh button.

<a href="https://drive.google.com/uc?export=view&id=1Y61guo9RRtI5Faf4tDUsiqxzucPEraiM"><img src="https://drive.google.com/uc?export=view&id=1Y61guo9RRtI5Faf4tDUsiqxzucPEraiM" style="width: 650px; max-width: 100%; height: auto" title="Click to enlarge picture" />

### Change between Celsius and Fahrenheit:

- Press the button C° or F° depending on how you want the temperature to be displayed.

<a href="https://drive.google.com/uc?export=view&id=19_FXy26KCpmgiBrCa6d9gT_vehzQiq76"><img src="https://drive.google.com/uc?export=view&id=19_FXy26KCpmgiBrCa6d9gT_vehzQiq76" style="width: 650px; max-width: 100%; height: auto" title="Click to enlarge picture" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Explanation

### App.js:

The `App` component is the main component of the app. It renders the header, the search bar, and the weather information. The `fetchWeather` function is called when the app first loads, and it is also called whenever the user changes the search query. The `useState` hook is used to store the current weather and the user's search query. The `useEffect` hook is used to fetch the weather data when the app first loads and when the user changes the search query.

The `handleOnSearchChange` function is called when the user changes the search query. It updates the query state variable with the new search query.

The `weather && (<Information weather={weather} units={units} setUnits={setUnits} />)` statement checks if the weather state variable is not null. If it is not null, it renders the Information component with the current weather data.

### weatherService.js:

The `weatherService` fetches weather data from the OpenWeatherMap API and the GeoDB Cities API.

The `getFormattedWeatherData` function first calls the `getWeatherData` function to fetch the current weather data for the given location. The `getWeatherData` function makes an HTTP request to the OpenWeatherMap API and returns the response data. The `getFormattedWeatherData` function then calls the `formatCurrentWeather` function to format the current weather data. The `formatCurrentWeather` function extracts the relevant data from the response data and returns an object with the formatted data.

The `getFormattedWeatherData` function then calls the `getWeatherData` function again to fetch the forecast weather data for the given location. The `getWeatherData` function makes an HTTP request to the OpenWeatherMap API and returns the response data. The `getFormattedWeatherData` function then calls the `formatForecastWeather` function to format the forecast weather data. The `formatForecastWeather` function extracts the relevant data from the response data and returns an object with the formatted data.

The `getFormattedWeatherData` function then combines the current weather data and the forecast weather data into a single object and returns it.

The `formatToLocalTime` function takes a Unix timestamp and a time zone as input and returns a formatted string representing the local time for the given timestamp and time zone. The function uses the `luxon` library to do the formatting.

The `iconUrl` function takes a weather condition icon code as input and returns the URL for the icon. The function uses the OpenWeatherMap API icon URL as the base URL and appends the weather condition icon code to the end.

### Search.js:

The `Search` component allows users to search for cities. It uses the `AsyncPaginate` component to load a list of cities that match the user's search query. The `AsyncPaginate` component makes an asynchronous request to the GeoDB Cities API to get the list of cities.

The `handleOnChange` function is called when the user changes the search query. It updates the search state variable with the new search query.

The `loadOptions` function is called by the `AsyncPaginate` component to load the list of cities. It makes an asynchronous request to the GeoDB Cities API with the `minPopulation` and `namePrefix` query parameters. The `minPopulation` query parameter specifies that the cities must have a population of at least 500,000. The `namePrefix` query parameter specifies that the cities must start with the search query string.

The `AsyncPaginate` component renders a dropdown menu with a list of cities that match the user's search query. The user can select a city from the dropdown menu. The `AsyncPaginate` component also has a refresh button. When the user clicks the refresh button, the `Search` component makes a new request to the GeoDB Cities API to get the latest list of cities.

### Refresh.js:

The `Refresh` component renders a refresh button.

When the user clicks the button, the `setRefresh` prop is called. The `setRefresh` prop is used to set the refresh state of the component to true. This cause the component to refresh its data.

### Header.js:

Renders the `WEATHIFY` header.

### DegreeConversion.js:

The `DegreeConversion` component renders a degree conversion button. The button allows the user to switch between Celsius and Fahrenheit.

The `handleUnitsChange` function is called when the user clicks on one of the buttons. The function takes one argument, which is the `e` event object. The `e` event object has a property called `currentTarget`. The `currentTarget` property is the element that was clicked. The `handleUnitsChange` function gets the name of the button that was clicked from the `currentTarget` property. It then checks if the current units are different from the name of the button that was clicked. If they are different, the `handleUnitsChange` function calls the `setUnits` prop to set the new units of measurement.

### WeatherInformation.js:

The `WeatherInformation` component renders weather information. The component uses the `WeatherDetailsTop`(Real feel, Humidity annd Wind) and `WeatherDetailsBottom`(Rise, Set, Max and Min) components to render the top and bottom rows of weather information, respectively. It takes three props:

- `weather`: This prop is the weather data.
- `units`: This prop is the current unit of measurement. It can be either "metric" or "imperial".
- `setUnits`: This prop is a function that is used to set the units of measurement.

The `WeatherInformation` component renders the following information:

- The weather condition icon.
- The current temperature.
- The real feel temperature.
- The humidity.
- The wind speed.
- The sunrise time.
- The sunset time.
- The maximum temperature for the day.
- The minimum temperature for the day.

### WeatherDetailsTop.js and WeatherDetailsBottom.js:

The `WeatherDetailsTop` and `WeatherDetailsBottom` components are responsible for rendering the top and bottom rows of weather information, respectively.

### TimeAndLocation.js:

The `TimeAndLocation` component renders the time and location of the weather data. The component uses the `formatToLocalTime` function to format the Unix timestamp of the weather data to local time. It takes one prop:

- `weather`: This prop is the weather data.

The `TimeAndLocation` component renders the following information:

- The city name.
- The country name.
- The local time.

The city name and country name are rendered using the `name` and `country` props. The local time is rendered using the `formatToLocalTime` function and the `dt` prop.

The `formatToLocalTime` function takes two arguments:

- The Unix timestamp of the weather data.
- The time zone of the weather data.
  The `formatToLocalTime` function returns a formatted string representing the local time for the given timestamp and time zone.

### Forecast.js:

The `Forecast` component renders the forecast for a location. It takes two props:

- `forecastType`: This prop is the type of forecast. The possible values are "HOURLY" and "DAILY".
- `items`: This prop is the list of forecast items.

The `Forecast` component renders a `<div />` element with the following children:

- A heading that indicates the type of forecast.
- A horizontal rule.
- A list of forecast items.

Each forecast item is rendered as a `<div />` element with the following children:

- The time of the forecast item.
- The weather condition for the forecast item.
- The temperature for the forecast item.

The weather condition is rendered as an icon using the `iconUrl` function. The temperature is rendered as a text string.

### Information.js:

The `Information` component renders the time, weather information, and forecast for a location.

The `TimeAndLocation`, `Forecast` and `WeatherInformation` components are discussed in the previous explanations.

<!-- CONTACT -->

## Contact

Simeon Cholakov - [@linkedin-simeon-cholakov](https://www.linkedin.com/in/simeon-cholakov/) - simeonstefanovcholakov@gmail.com

Project Link: [Weathify](https://github.com/CholakovAudits/Weathify)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Next-url]: https://nextjs.org/
[TailwindCSS-URL]: https://tailwindcss.com/
[TailwindCSS]: https://img.shields.io/badge/tailwindcss-20232A?style=for-the-badge&logo=tailwindcss&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TailwindCSS]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
