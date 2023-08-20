import './index.css';
import Header from './components/Header';
import Information from './components/Information/Information';
import { getFormattedWeatherData } from './services/weatherService';
import { useState, useEffect } from 'react';
import Search from './components/Search';
import BG from './img/bg.jpg';

function App() {

  const [query, setQuery] = useState({ q: 'sofia' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const fetchWeather = async () => {
    await getFormattedWeatherData({ ...query, units })
      .then((data) => {
        setWeather(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchWeather();
  }, [query, units, refresh]);

  const handleOnSearchChange = (searchData) => {
    setQuery({ q: searchData.label.split(' ')[0] }); //this is done in this way because otherwise the API data will be buggy.
  }


  return (
    <div className="w-full h-screen">
      <img
        src={BG}
        className="top-0 left-0 w-full h-screen object-cover "
      />
      <div className="w-full h-screen py-5 px-40 bg-black/20 absolute top-0 left-0">
        <Header />
        <Search onSearchChange={handleOnSearchChange} setRefresh={setRefresh} />
        {
          weather && (
            <Information weather={weather} units={units} setUnits={setUnits} />
          )
        }
      </div>
    </div>
  );
}

export default App;
