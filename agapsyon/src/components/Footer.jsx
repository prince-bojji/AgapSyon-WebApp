import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';

const Collapsible = (props) => {
  const [isOpen, setOpen] = useState(false);
  const [isLargeScreen, setLargeScreen] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setHeight((isOpen || isLargeScreen) ? ref.current.offsetHeight : 0);
  }, [isOpen, isLargeScreen]);

  return (
    <div>
      <div className='flex justify-between items-center pb-2'>
        <h1 className='font-semibold text-sm'>{props.title}</h1>
        <button className={`flex text-3xl lg:hidden transition duration-500 ${isOpen && 'rotate-180'}`} onClick={() => setOpen(!isOpen)}>
          <ion-icon name='caret-down-circle'></ion-icon>
        </button>
      </div>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen && 'mb-5'}`} style={{height}}>
        <div ref={ref}>{props.children}</div>
      </div>
    </div>
  )
};

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className='flex flex-col lg:flex-row justify-evenly py-12 px-5 bg-[#a8c9df] font-montserrat text-[#5d7468] text-[0.725rem]'>
      <div className='px-20 pt-3 lg:pt-0 m-auto lg:m-0 w-fit text-center order-1 lg:-order-1'>
        <img src={logo} className='m-auto w-36 max-w-full h-auto pb-5 cursor-pointer' />
        &copy; 2023 Agapsyon. All rights reserved
      </div>

      <Collapsible title='Title'>
        To be added...
      </Collapsible>

      <Collapsible title='Title'>
        To be added...
      </Collapsible>
    </footer>
  )
};

export default Footer;