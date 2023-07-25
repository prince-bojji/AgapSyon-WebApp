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
    <Router>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <div className='flex-1'>
          <ScrollToTop/>
          <Routes>
            <Route exact path="/" element = {<Landing />} />
            <Route exact path="/AdminLogin" element = {<AdminLogin />} />
            <Route exact path="/UserLogin" element = {<Login/>} />
            <Route exact path="/UserSignUp" element = {<SignUp />} />
            <Route exact path="/WeatherUpdate" element = {<WeatherUpdate />} />
            <Route exact path="/Guides" element = {<Guides />}>
              <Route path="Earthquake" element = {<EarthquakeGuides />} />
              <Route path="Fire" element = {<FireSafetyGuides />} />
              <Route path="Landslide" element = {<LandslideGuides />} />
              <Route path="Tsunami" element = {<TsunamiGuides />} />
              <Route path="Typhoon" element = {<TyphoonGuides />} />
              <Route path="VolcanicEruption" element = {<VolcanicEruptionGuides />} />
            </Route>
            <Route exact path="/Maps" element = {<Maps />} />
            <Route exact path="/Hotlines" element = {<Hotlines />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
};

export default App;