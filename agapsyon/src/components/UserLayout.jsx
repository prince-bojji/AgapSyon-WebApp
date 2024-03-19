import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const UserLayout = () => {
  return (
    <>
      <Header />
      <div className='mt-[72px] lg:mt-0'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default UserLayout;
