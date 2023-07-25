import React from 'react';
import WeatherUpdate from './WeatherUpdate';
import HeaderAdmin from '/src/components/HeaderAdmin';
import RetrieveReports from '/src/components/RetrieveReports';


function AdminDashboard() {
  return (
    <>
      <HeaderAdmin />
      <WeatherUpdate />
      <RetrieveReports />
    </>
  )
}

export default AdminDashboard;