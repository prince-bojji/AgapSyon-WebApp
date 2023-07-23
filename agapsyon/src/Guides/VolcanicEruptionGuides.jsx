import React, { useEffect } from 'react';

const VolcanicEruptionGuides = () => {
    useEffect(() => {
        document.body.style.background =
          'linear-gradient(to right, #FF5733, #FFC300)';
        document.body.style.height = '100vh';
        return () => {
          document.body.style.background = null;
          document.body.style.height = null;
        };
      }, []);
      
  return (
    <div className="font-montserrat text-justify min-h-screen">
      <header className="bg-[#FF5733] text-white py-4 text-center">
        <h1 className="text-3xl font-bold">Volcanic Eruption Safety Guide</h1>
      </header>
      <main className="p-4 md:p-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Before Volcanic Eruption</h2>
          <ul className="list-disc list-inside">
            <li>Stay informed about the volcanic activity in your area and follow updates from local authorities.</li>
            <li>Prepare an emergency kit with essentials such as food, water, flashlight, and first aid supplies.</li>
            <li>Have a family emergency plan and discuss evacuation routes and meeting points.</li>
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">During Volcanic Eruption</h2>
          <ul className="list-disc list-inside">
            <li>Follow evacuation orders and move to higher ground or a safe location away from the volcanic activity.</li>
            <li>Wear a mask or cloth to protect yourself from ash inhalation.</li>
            <li>Listen to local authorities for updates on the situation and safety measures.</li>
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">After Volcanic Eruption</h2>
          <ul className="list-disc list-inside">
            <li>Avoid areas downwind from the volcano due to potential ashfall and hazardous gases.</li>
            <li>Check your property for ash and debris and clean it up carefully, wearing protective gear.</li>
            <li>Stay tuned to news and advisories for information on when it is safe to return home.</li>
          </ul>
        </section>
      </main>
      <footer className="bg-[#FF5733] text-white py-2 text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Volcanic Eruption Safety Guide</p>
      </footer>
    </div>
  );
};

export default VolcanicEruptionGuides;
