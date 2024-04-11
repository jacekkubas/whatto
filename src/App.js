import './global.scss';
import Home from './pages/Home'
import Movies from './pages/Movies'
import Food from './pages/Food'
import Slider from './pages/Slider'
import Cities from './pages/Cities'
import Places from './pages/Places'
import Login from './pages/Login'
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
          <Route path="/cities" element={<Cities />} />
          <Route path="/places" element={<Places />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
