import React, { useEffect } from 'react';
import FireSafetyImg from '../images/guides/Sunog-guide.png';

const FireSafetyGuides = () => { 
  return (
    <div className="font-montserrat text-justify min-h-screen bg-gradient-to-r from-[#FFC38B] to-[#FF6B6B]">
      <header className="bg-[#FF3F1A] text-white py-4 text-center">
        <h1 className="text-3xl font-bold">Fire Safety Guide</h1>
      </header>
      <main className="p-4 md:p-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Preventing Fires</h2>
          <ul className="list-disc list-inside">
            <li>Install smoke detectors on every floor of your home and test them regularly.</li>
            <li>Keep flammable materials away from heat sources.</li>
            <li>Do not leave cooking or heating appliances unattended.</li>
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">During a Fire</h2>
          <ul className="list-disc list-inside">
            <li>If a fire occurs, evacuate the building immediately and call emergency services.</li>
            <li>Crawl low under smoke to escape to safety, as smoke rises and can be toxic.</li>
            <li>Feel doors before opening them; if they are hot, do not open and find an alternate escape route.</li>
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Fire Extinguisher Use</h2>
          <ul className="list-disc list-inside">
            <li>Only attempt to use a fire extinguisher if the fire is small and contained.</li>
            <li>Remember the PASS method: Pull the pin, Aim at the base of the fire, Squeeze the handle, and Sweep from side to side.</li>
            <li>If the fire is spreading rapidly or too large to control, evacuate immediately.</li>
          </ul>
        </section>
        <section className="mt-8">  
          <img src={FireSafetyImg} alt="Earthquake Safety Guide" className="w-full" />
        </section>
      </main>
      {/* <footer className="bg-[#FF3F1A] text-white py-2 text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Fire Safety Guide</p>
      </footer> */}
    </div>
  );
};

export default FireSafetyGuides;
