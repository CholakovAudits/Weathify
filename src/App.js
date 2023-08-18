import './index.css';
import Inputs from './components/Inputs';
import Header from './components/Header';

function App() {
  return (
    <div
      className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-500 to-blue-500 h-fit shadow-xl shadow-gray-400"
    >
      <Header />
      <Inputs />
    </div>
  );
}

export default App;
