import React, { useEffect } from 'react';
import EarthquakeGuideImg from '../images/guides/earthquake-guide.png';

const EarthquakeGuides = () => {
  return (
    <div className='bg-transparent font-montserrat min-h-screen bg-gradient-to-r from-[#D2B48C] to-[#8B4513]'>
      <header className='bg-[#8B4513] text-white py-4 text-center'>
        <h1 className='text-3xl font-bold'>Earthquake Safety Guide</h1>
      </header>
      <main className='p-4 md:p-8'>
        <section>
          <h2 className='text-2xl font-bold mb-4'>Before Earthquake</h2>
          <ul className='list-disc list-inside'>
            <li>Secure heavy furniture and appliances to the walls.</li>
            <li>
              Create an emergency kit with essential items like food, water, and
              first aid supplies.
            </li>
            <li>
              Identify safe spots in each room, such as under sturdy tables or
              against interior walls.
            </li>
          </ul>
        </section>
        <section className='mt-8'>
          <h2 className='text-2xl font-bold mb-4'>During Earthquake</h2>
          <ul className='list-disc list-inside'>
            <li>
              Drop down to your hands and knees to prevent being knocked over.
            </li>
            <li>
              Cover your head and neck with your arms and seek shelter under
              furniture or against interior walls.
            </li>
            <li>
              Stay indoors until the shaking stops and it is safe to go outside.
            </li>
          </ul>
        </section>
        <section className='mt-8'>
          <h2 className='text-2xl font-bold mb-4'>After Earthquake</h2>
          <ul className='list-disc list-inside'>
            <li>
              Check yourself and others for injuries and provide first aid as
              needed.
            </li>
            <li>
              Check for gas leaks, damaged electrical wires, and structural
              damage in your home.
            </li>
            <li>
              Listen to updates from local authorities and follow evacuation
              orders if necessary.
            </li>
          </ul>
        </section>
        <section className='mt-8'>
          <img
            src={EarthquakeGuideImg}
            alt='Earthquake Safety Guide'
            className='w-full'
          />
        </section>
      </main>
    </div>
  );
};

export default EarthquakeGuides;
