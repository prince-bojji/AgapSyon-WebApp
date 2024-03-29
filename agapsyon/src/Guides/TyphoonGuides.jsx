import React, { useEffect } from 'react';
import TyphoonGuideImg from '../images/guides/typhoon-guide.png';

const TyphoonGuides = () => {
  return (
    <div className='font-montserrat text-justify min-h-screen bg-gradient-to-r from-[#2980b9] to-[#6dd5fa]'>
      <header className='bg-[#0071b5] text-white py-4 text-center'>
        <h1 className='text-3xl font-bold'>Typhoon Safety Guide</h1>
      </header>
      <main className='p-4 md:p-8'>
        <section>
          <h2 className='text-2xl font-bold mb-4'>Before Typhoon</h2>
          <ul className='list-disc list-inside'>
            <li>Secure loose objects in your yard.</li>
            <li>
              Stock up on essential supplies like food, water, and first aid
              items.
            </li>
            <li>Stay updated with weather forecasts and warnings.</li>
          </ul>
        </section>
        <section className='mt-8'>
          <h2 className='text-2xl font-bold mb-4'>During Typhoon</h2>
          <ul className='list-disc list-inside'>
            <li>Stay indoors and away from windows.</li>
            <li>Do not go near rivers or other bodies of water.</li>
            <li>Keep emergency contacts handy.</li>
          </ul>
        </section>
        <section className='mt-8'>
          <h2 className='text-2xl font-bold mb-4'>After Typhoon</h2>
          <ul className='list-disc list-inside'>
            <li>Check for damages and hazards in your surroundings.</li>
            <li>Assist others who may need help.</li>
            <li>Listen to updates from local authorities.</li>
          </ul>
        </section>
        <section className='mt-8'>
          <img
            src={TyphoonGuideImg}
            alt='Typhoon Safety Guide'
            className='w-full'
          />
        </section>
      </main>
    </div>
  );
};

export default TyphoonGuides;
