import React, { useEffect } from 'react';

const LandslideGuides = () => { 
  return (
    <div className="font-montserrat text-justify min-h-screen bg-gradient-to-r from-[#BCAAA4] to-[#D7CCC8]">
      <header className="bg-[#6D4C41] text-white py-4 text-center">
        <h1 className="text-3xl font-bold">Landslide Safety Guide</h1>
      </header>
      <main className="p-4 md:p-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Before Landslide</h2>
          <ul className="list-disc list-inside">
            <li>Identify landslide-prone areas in your vicinity and be aware of the warning signs.</li>
            <li>Consult local authorities and experts for information about landslide risks in your area.</li>
            <li>Develop an evacuation plan and establish a safe meeting point for your family.</li>
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">During Landslide</h2>
          <ul className="list-disc list-inside">
            <li>If you suspect an imminent landslide, evacuate the area immediately and move to higher ground.</li>
            <li>Avoid crossing rivers or streams during heavy rainfall, as it can trigger landslides.</li>
            <li>Listen to weather advisories and stay informed about the situation.</li>
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">After Landslide</h2>
          <ul className="list-disc list-inside">
            <li>Stay away from landslide-affected areas until authorities declare it safe to return.</li>
            <li>Check for damage to your property and assess its stability before entering.</li>
            <li>Report any blocked roads, damaged infrastructure, or hazards to local authorities.</li>
          </ul>
        </section>
      </main>
      {/* <footer className="bg-[#6D4C41] text-white py-2 text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Landslide Safety Guide</p>
      </footer> */}
    </div>
  );
};

export default LandslideGuides;
