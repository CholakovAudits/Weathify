import './index.css';
import Inputs from './components/Inputs';
import Header from './components/Header';
import Information from './components/Information/Information';
import getWeatherData from './services/weatherService';
import getFormattedWeatherData from './services/weatherService';

function App() {

  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: 'london' });
    console.log(data);
  }
  fetchWeather();

  return (
    <div
      className="mx-auto max-w-screen-md mt-1 py-5 px-32 bg-gradient-to-br from-cyan-600 to-blue-600 h-fit shadow-xl shadow-gray-400"
    >
      <Header />
      <Inputs />
      <Information />
    </div>
  );
}

export default App;
