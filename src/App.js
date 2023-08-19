import './index.css';
import Header from './components/Header';
import Information from './components/Information/Information';
import { getFormattedWeatherData } from './services/weatherService';
import { useState, useEffect } from 'react';
import Search from './components/Search';

function App() {

  const [query, setQuery] = useState({ q: 'sofia' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const fetchWeather = async () => {
    await getFormattedWeatherData({ ...query, units })
      .then((data) => {
        setWeather(data);
      });
  };

  useEffect(() => {
    fetchWeather();
  }, [query, units, refresh]);

  const handleOnSearchChange = (searchData) => {
    setQuery({ q: searchData.label.split(' ')[0] }); //this is done in this way because otherwise the API data will be buggy.
  }


  return (
    <div
      className="mx-auto max-w-screen-lg mt-0.5 px-32 bg-gradient-to-br from-cyan-500 to-blue-900 h-fit shadow-4xl shadow-gray-900"
    >
      <Header />
      <Search onSearchChange={handleOnSearchChange} setRefresh={setRefresh} />
      {
        weather && (
          <Information weather={weather} units={units} setUnits={setUnits} />
        )
      };
    </div>
  );
}

export default App;
