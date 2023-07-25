import { Outlet } from "react-router-dom";
import Header from './HeaderAdmin';

const AdminLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AdminLayout;