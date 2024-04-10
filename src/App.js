import './global.scss';
import Home from './pages/Home'
import Movies from './pages/Movies'
import Food from './pages/Food'
import Slider from './pages/Slider'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/movies" element={<Movies />} />
          <Route path="/food" element={<Food />} />
          <Route path="/" element={<Home />} />
          <Route path="/slider" element={<Slider />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
