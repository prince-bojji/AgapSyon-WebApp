import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '/src/firebase-config';

const RetrieveReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Read data from the "reports" collection in the database
    const getReports = async () => {
      const reportsCollectionRef = collection(db, 'reports');
      const data = await getDocs(reportsCollectionRef);
      setReports(data.docs.map((doc) => doc.data()));
    };

    getReports();
  }, []);

  return (
    <div className="min-h-screen font-montserrat bg-gradient-to-r from-[#FFEDCC] to-[#BFCFFF] m-0 p-0 flex items-center justify-center">
      <div className="bg-white w-full md:w-4/5 xl:w-3/4 2xl:w-2/3 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4">Reports</h1>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-400 p-4">Name</th>
                <th className="border border-gray-400 p-4">Contact</th>
                <th className="border border-gray-400 p-4">Location</th>
                <th className="border border-gray-400 p-4">Report</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, index) => (
                <tr key={index}>
                  <td className="border border-gray-400 p-4 text-justify">{report.name}</td>
                  <td className="border border-gray-400 p-4 text-justify">{report.contact}</td>
                  <td className="border border-gray-400 p-4 text-justify">{report.location}</td>
                  <td className="border border-gray-400 p-4 text-justify">{report.report}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RetrieveReports;
