import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Routers from './components/Routes';

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <Navbar />
      </div>
      <div>
        <Routers />
      </div>
    </div>
  );
}

export default App;
