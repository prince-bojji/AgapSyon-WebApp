import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'
import Maps from './pages/Maps';
import WeatherUpdate from './pages/WeatherUpdate';
import Landing from './pages/Landing';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin';
import Guides from './pages/Guides';
import Hotlines from './pages/Hotlines';
import Report from './pages/Report';
import UserLayout from './components/UserLayout';
import AdminLayout from './components/AdminLayout';
import RetrieveReports from './components/RetrieveReports';
import ShowUsers from './components/ShowUsers';

const App = () => {
  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <div className='flex-1'>
          <ScrollToTop/>
          <Routes>
            <Route element={<UserLayout />}>
              <Route exact path="/Home" element = {<WeatherUpdate />} />
              <Route exact path="/Guides" element = {<Guides />} />
              <Route exact path="/Report" element = {<Report />} />
              <Route exact path="/Maps" element = {<Maps />} />
              <Route exact path="/Hotlines" element = {<Hotlines />} />
            </Route>
            <Route element={<AdminLayout />}>
              <Route exact path="/Weather" element = {<WeatherUpdate />} />
              <Route exact path="/Users" element = {<ShowUsers />} />
              <Route exact path="/Reports" element = {<RetrieveReports />} />
            </Route>
            <Route exact path="/AdminLogin" element = {<AdminLogin />} />
            <Route exact path="/UserLogin" element = {<Login/>} />
            <Route exact path="/UserSignUp" element = {<SignUp />} />
            <Route exact path="/" element = {<Landing />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
};

export default App;