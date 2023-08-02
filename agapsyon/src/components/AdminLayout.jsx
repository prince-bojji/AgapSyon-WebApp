import { Outlet } from "react-router-dom";
import Header from './AdminHeader';

const AdminLayout = () => {
  return (
    <div className='flex flex-col flex-grow h-screen'>
      <div><Header /></div>
      <div className="flex-1"><Outlet /></div>
    </div>
  );
};

export default AdminLayout;