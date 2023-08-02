import React, { useEffect } from 'react';
import TsunamiGuideImg from '../images/guides/tsunami-guide.png';

const TsunamiGuides = () => {
    // useEffect(() => {
    //     document.body.style.background =
    //       'linear-gradient(to right, #00C9A7, #92F2C7)';
    //     document.body.style.height = '100vh';
    //     return () => {
    //       document.body.style.background = null;
    //       document.body.style.height = null;
    //     };
    //   }, []);
      
  return (
    <div className="font-montserrat text-justify min-h-screen bg-gradient-to-r from-[#00C9A7] to-[#92F2C7]">
      <header className="bg-[#008577] text-white py-4 text-center">
        <h1 className="text-3xl font-bold">Tsunami Safety Guide</h1>
      </header>
      <main className="p-4 md:p-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Before Tsunami</h2>
          <ul className="list-disc list-inside">
            <li>Learn the tsunami warning signs and evacuation routes in your area.</li>
            <li>Identify safe areas on higher ground where you can evacuate to.</li>
            <li>Have an emergency kit ready with essential supplies and first aid items.</li>
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">During Tsunami</h2>
          <ul className="list-disc list-inside">
            <li>If you feel a strong earthquake or receive a tsunami warning, move to higher ground immediately.</li>
            <li>Do not wait for official warnings, as tsunamis can arrive within minutes after an earthquake.</li>
            <li>Stay away from the coast and do not go near the shoreline to watch the tsunami.</li>
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">After Tsunami</h2>
          <ul className="list-disc list-inside">
            <li>Wait for official announcements before returning to coastal areas.</li>
            <li>Be cautious of damaged infrastructure and potential hazards in the affected areas.</li>
            <li>Listen to updates from local authorities and follow their instructions.</li>
          </ul>
        </section>
        <section className="mt-8">
          <img src={TsunamiGuideImg} alt="Tsunami Safety Guide" className="w-full" />
        </section>
      </main>
      {/* <footer className="bg-[#008577] text-white py-2 text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Tsunami Safety Guide</p>
      </footer> */}
    </div>
  );
};

export default TsunamiGuides;
