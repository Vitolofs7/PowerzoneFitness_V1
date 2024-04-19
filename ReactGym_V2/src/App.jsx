import './App.css';
import Home from './pages/home/Home';
import Location from './pages/location/Location';
import Login from './pages/login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/log" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App