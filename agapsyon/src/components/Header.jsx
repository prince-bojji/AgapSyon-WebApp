import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';

const MenuItem = props => {
  const { pathname } = useLocation();

  return (
    <Link to={props.link}>
      <li
        className={`border-0 px-5 py-2 my-2 rounded-xl transition-all
          ${pathname === props.link && 'bg-white bg-opacity-80 shadow-md'}`}>
        {props.children}
      </li>
    </Link>
  );
};

const MenuLine = () => {
  return (
    <div className='w-full h-[3px] bg-[#5d7468] rounded-full transition-all duration-300'></div>
  );
};

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={`fixed lg:sticky top-0 left-0 z-30 w-full transition-all duration-300 bg-[#a8c9df] font-montserrat text-[#5d7468]
        ${scrollPosition > 30 && 'shadow-lg'}`}>
      <nav className='flex flex-wrap justify-between items-center px-4 py-4'>
        <Link to='/Home' className='flex font-unbounded items-center gap-5'>
          <img className='h-10 max-h-full w-auto' src={logo} alt='Logo' />
          <h1 className='text-lg'>Agapsyon</h1>
        </Link>
        <div
          className={`lg:hidden w-6 flex flex-col gap-1 justify-center cursor-pointer text-4xl text-[#5d7468]
                ${
                  isOpen &&
                  ' [&>*:nth-child(1)]:translate-y-[7.25px] [&>*:nth-child(1)]:rotate-45 [&>*:nth-child(2)]:opacity-0 [&>*:nth-child(3)]:-translate-y-[7.25px] [&>*:nth-child(3)]:-rotate-45'
                }`}
          onClick={() => setOpen(!isOpen)}>
          <MenuLine></MenuLine>
          <MenuLine></MenuLine>
          <MenuLine></MenuLine>
        </div>
        <ul
          className={`flex flex-col lg:flex-row lg:gap-8 lg:w-fit m-0 w-full text-center list-none overflow-hidden transition-all duration-300 ease-in-out 
                ${isOpen ? 'h-max pt-3 lg:pt-0' : 'h-0 lg:h-fit'}`}>
          <MenuItem link='/Home'>Home</MenuItem>
          <MenuItem link='/Guides'>Guides</MenuItem>
          <MenuItem link='/Maps'>Maps</MenuItem>
          <MenuItem link='/Report'>Report</MenuItem>
          <MenuItem link='/Hotlines'>Hotlines</MenuItem>
          <MenuItem link='/'>
            <div className='flex justify-center items-center gap-1 text-red-800'>
              <ion-icon name='log-out-outline'></ion-icon>
              <p>Logout</p>
            </div>
          </MenuItem>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
