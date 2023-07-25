import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'
import Maps from './pages/Maps';
import WeatherUpdate from './pages/WeatherUpdate';
import Landing from './pages/Landing';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import Guides from './pages/Guides';
import Hotlines from './pages/Hotlines';
import Report from './pages/Report';
import Layout from './components/Layout';
import RetrieveReports from './components/RetrieveReports';

const App = () => {
  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <div className='flex-1'>
          <ScrollToTop/>
          <Routes>
            <Route element={<Layout />}>
              <Route exact path="/" element = {<WeatherUpdate />} />
              <Route exact path="/Guides" element = {<Guides />} />
              <Route exact path="/Report" element = {<Report />} />
              <Route exact path="/Maps" element = {<Maps />} />
              <Route exact path="/Hotlines" element = {<Hotlines />} />
            </Route>
            <Route exact path="/AdminLogin" element = {<AdminLogin />} />
            <Route exact path="/RetrieveReports" element = {<RetrieveReports />} />
            <Route exact path="/AdminDashboard" element = {<AdminDashboard />} />
            <Route exact path="/WeatherUpdate" element = {<WeatherUpdate />} />
            <Route exact path="/UserLogin" element = {<Login/>} />
            <Route exact path="/UserSignUp" element = {<SignUp />} />
            <Route exact path="/Login" element = {<Landing />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
};

export default App;