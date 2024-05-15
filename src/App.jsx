import './App.css';
import Home from './pages/home/Home';
import Location from './pages/location/Location';
import Login from './pages/login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reviews from './pages/reviews/Reviews';
import Cookies from './pages/cookies/cookies';




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/log" element={<Login />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/cookies" element={<Cookies />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App