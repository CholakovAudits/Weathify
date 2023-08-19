import './index.css';
import Header from './components/Header';
import Information from './components/Information/Information';
import getFormattedWeatherData from './services/weatherService';
import { useState, useEffect } from 'react';
import Search from './components/Search';

function App() {

  const [query, setQuery] = useState({ q: 'sofia' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units })
        .then((data) => {
          setWeather(data);
          console.log(data);
        });
    };

    fetchWeather();
  }, [query, units]);


  return (
    <div
      className="mx-auto max-w-screen-lg py-3.5 px-32 bg-gradient-to-br from-cyan-500 to-blue-900 h-fit shadow-4xl shadow-gray-900"
    >
      <Header />
      <Search />
      {
        weather && (
          <Information weather={weather} />
        )
      };
    </div>
  );
}

export default App;
