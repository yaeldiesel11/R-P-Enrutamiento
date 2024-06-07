import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Message from '../Message/Message';
import FancyWord from '../FancyWord/FancyWord';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:var" element={<Message />} />
        <Route path="/:var/:color/:background" element={<FancyWord />} />
      </Routes>
    </div>
  );
}

export default App;