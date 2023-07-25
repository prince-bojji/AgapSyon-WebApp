import { Outlet } from "react-router-dom";
import Header from './HeaderAdmin';

const AdminLayout = () => {
  return (
    <>
      <Header />
      <div className="mt-[72px] lg:mt-0"><Outlet /></div>
    </>
  );
};

export default AdminLayout;