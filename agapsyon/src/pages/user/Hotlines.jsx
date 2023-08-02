import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '/src/firebase-config';

function Hotlines() {
  const [hotlines, setHotlines] = useState([]);

  useEffect(() => {
    // Read data from the "hotlines" collection in the database
    const getHotlines = async () => {
      const hotlinesCollectionRef = collection(db, 'hotlines');
      const data = await getDocs(hotlinesCollectionRef);
      setHotlines(data.docs.map((doc) => doc.data()));
    };

    getHotlines();
  }, []);

  useEffect(() => {
    document.body.style.background = 'linear-gradient(to right, #FFEDCC, #BFCFFF)';
    document.body.style.height = '100vh';
    return () => {
      document.body.style.background = null;
      document.body.style.height = null;
    };
  }, []);

  return (
    <div className="min-h-screen font-montserrat bg-gradient-to-r from-[#FFEDCC] to-[#BFCFFF] m-0 p-10 flex justify-center">
      <div className="w-full md:w-4/5 xl:w-3/4 2xl:w-2/3 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl text-[#5D7468] font-bold mb-4">Hotlines</h1>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-400">
            <thead>
              <tr className="">
                <th className="p-4 text-center border border-gray-400">Contact Name</th>
                <th className="p-4 text-center border border-gray-400">Contact Information</th>
              </tr>
            </thead>
            <tbody>
              {hotlines.map((hotline, index) => (
                <tr key={index}>
                  <td className="p-4 text-center border border-gray-400">{hotline.name}</td>
                  <td className="p-4 text-center border border-gray-400">{hotline.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Hotlines;
