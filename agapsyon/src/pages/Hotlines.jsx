import React, { useEffect } from 'react';

const hotlines = [
  {
    logo: 'logo_redcross.png',
    title: 'PHILIPPINE NATIONAL RED CROSS',
    clientInformation: '143 | 8527 - 0000'
  },
  {
    logo: 'logo_bfr.png',
    title: 'BUREAU OF FIRE PROTECTION',
    clientInformation: '(02) 8426 - 0219 | 8426 - 0246'
  },
  {
    logo: 'logo_pnp.png',
    title: 'PHILIPPINE NATIONAL POLICE',
    clientInformation: '117 | 8723 - 0401 to 20'
  },
  {
    logo: 'logo_doh.png',
    title: 'DEPARTMENT OF HEALTH',
    clientInformation: '8711 - 1001 to 02'
  },
  {
    logo: 'logo_dswd.png',
    title: 'DEPARTMENT OF SOCIAL WELFARE AND DEVELOPMENT',
    clientInformation: '8931 - 8101 to 07'
  },
  {
    logo: 'logo_ndrrmc.png',
    title: 'NATIONAL DISASTER RISK REDUCTION & MANAGEMENT COUNCIL',
    clientInformation: '8911 - 1406 | 8911 - 2665'
  },
  {
    logo: 'logo_pagasa.png',
    title: 'PAGASA',
    clientInformation: '8927 - 1541 | 8926 - 4251'
  },
  {
    logo: 'logo_phivolcs.png',
    title: 'PHIVOLCS',
    clientInformation: '8929 - 8958 | 8426 - 1469-79'
  },
  {
    logo: 'logo_dpwh.png',
    title: 'DEPARTMENT OF PUBLIC WORKS AND HIGHWAYS',
    clientInformation: '165 - 02'
  },
  {
    logo: 'logo_coastguard.png',
    title: 'PHILIPPINE COASTGUARD',
    clientInformation: '(02) 8527 - 3677 | 8527-3880 to 85'
  }
];

function Hotlines() {
    useEffect(() => {
      document.body.style.background = 'linear-gradient(to right, #FFEDCC, #BFCFFF)';
      document.body.style.height = '100vh';
      return () => {
        document.body.style.background = null;
        document.body.style.height = null;
      };
    }, []);
  
    return (
      <div className='grid font-montserrat grid-cols-1 md:grid-cols-5 gap-4'>
        {hotlines.map((hotline, index) => (
          <div key={index} className='flex flex-col items-center p-4 rounded-md'>
            <img src={`src/images/hotlines/${hotline.logo}`} alt={hotline.title} className='w-16 h-16 mb-2'/>
            <h3 className='mb-2 font-semibold text-center'>{hotline.title}</h3>
            <p className='text-center'>{hotline.clientInformation}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Hotlines;