import React from 'react';
import WeatherUpdate from './WeatherUpdate';
import HeaderAdmin from '/src/components/HeaderAdmin';
import RetrieveReports from '/src/components/RetrieveReports';
import ShowUsers from '/src/components/ShowUsers';


function AdminDashboard() {
  return (
    <>
      <HeaderAdmin />
      <WeatherUpdate />
      <RetrieveReports />
      <ShowUsers />
    </>
  )
}

export default AdminDashboard;