import React from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className='flex h-screen font-montserrat bg-gray-200 m-0 p-0 first-letter:bg-gradient-to-r from-[#FFEDCC] to-[#BFCFFF]'>
      {/* Left side */}
      <div className='w-full md:w-2/5 h-full flex flex-col items-center p-10 bg-gradient-to-r from-[#FFEDCC] to-[#BFCFFF]'>
        <img
          src='/src/images/logo.png'
          alt='Logo'
          className='h-[225px] w-[225px] m-0 mt-[20px] self-center'
        />
        <h1 className='text-2xl md:text-3xl font-bold m-0 mt-5 text-center'>
          AgapSyon: Paghanda at Pag-aksyon sa mga Sakuna
        </h1>
        <div className='flex flex-col justify-center items-center space-y-0 mt-auto mb-auto'>
          <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-10'>
            <button className='w-[200px] h-[70px] px-5 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 m-0' onClick={() => navigate('/UserLogin')}>
              User
            </button>
            <button className='w-[200px] h-[70px] px-5 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 m-0' onClick={() => navigate('/AdminLogin')}>
              Admin
            </button>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className='hidden md:block w-3/5 h-full m-0 p-0'>
        <img
          src='/src/images/cover.png'
          alt='Cover Photo'
          className='object-cover w-full h-full m-0 p-0'
        />
      </div>
    </div>
  );
}

export default Landing;
