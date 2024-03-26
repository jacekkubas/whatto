import './App.css';
import Home from './pages/Home'
import Movies from './pages/Movies'
import Food from './pages/Food'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/movies" element={<Movies />} />
          <Route path="/food" element={<Food />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
