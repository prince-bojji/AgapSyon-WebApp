import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'
import Maps from './pages/Maps';
import WeatherUpdate from './pages/WeatherUpdate';
import Landing from './pages/Landing';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin';
import Guides from './pages/Guides';
import Hotlines from './pages/Hotlines';
import EarthquakeGuides from './Guides/EarthquakeGuides';
import FireSafetyGuides from './Guides/FireSafetyGuides';
import LandslideGuides from './Guides/LandslideGuides';
import TsunamiGuides from './Guides/TsunamiGuides';
import TyphoonGuides from './Guides/TyphoonGuides';
import VolcanicEruptionGuides from './Guides/VolcanicEruptionGuides';

const App = () => {
  return (
    <>
      <Hotlines />
    </>
  );
}

export default App;