import React, { useEffect } from 'react';

const TyphoonGuides = () => {
    useEffect(() => {
        document.body.style.background =
          'linear-gradient(to right, #2980b9, #6dd5fa)';
        document.body.style.height = '100vh';
        return () => {
          document.body.style.background = null;
          document.body.style.height = null;
        };
      }, []);
      
  return (
    <div className="font-montserrat text-justify min-h-screen">
      <header className="bg-[#0071b5] text-white py-4 text-center">
        <h1 className="text-3xl font-bold">Typhoon Safety Guide</h1>
      </header>
      <main className="p-4 md:p-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Before Typhoon</h2>
          <ul className="list-disc list-inside">
            <li>Secure loose objects in your yard.</li>
            <li>Stock up on essential supplies like food, water, and first aid items.</li>
            <li>Stay updated with weather forecasts and warnings.</li>
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">During Typhoon</h2>
          <ul className="list-disc list-inside">
            <li>Stay indoors and away from windows.</li>
            <li>Do not go near rivers or other bodies of water.</li>
            <li>Keep emergency contacts handy.</li>
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">After Typhoon</h2>
          <ul className="list-disc list-inside">
            <li>Check for damages and hazards in your surroundings.</li>
            <li>Assist others who may need help.</li>
            <li>Listen to updates from local authorities.</li>
          </ul>
        </section>
      </main>
      <footer className="bg-[#0071b5] text-black py-2 text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Typhoon Safety Guide</p>
      </footer>
    </div>
  );
};

export default TyphoonGuides;
