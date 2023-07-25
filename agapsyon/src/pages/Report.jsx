import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '/src/firebase-config';

function Report() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [location, setLocation] = useState('');
  const [report, setReport] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Insert the report data to the "reports" collection in Firestore
      const reportsCollectionRef = collection(db, 'reports');
      await addDoc(reportsCollectionRef, {
        name,
        contact,
        location,
        report,
      });

      // Clear the form fields after successful submission
      setName('');
      setContact('');
      setLocation('');
      setReport('');

      // Show a success message to the user
      alert('Report submitted successfully!');
    } catch (error) {
      console.error('Error submitting report:', error);
      alert('Failed to submit report. Please try again.');
    }
  };

  return (
    <div className='font-montserrat flex flex-col items-center h-screen bg-gradient-to-r from-[#FFEDCC] to-[#BFCFFF]'>
      <h1 className='text-3xl font-bold mt-10 mb-5 text-[#5d7468]'>Submit a Report</h1>
      <form onSubmit={handleSubmit} className='w-1/2 space-y-4'>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
          className='w-full p-2 border border-gray-200 rounded'
        />
        <input
          type='text'
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder='Contact'
          className='w-full p-2 border border-gray-200 rounded'
        />
        <input
          type='text'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder='Location'
          className='w-full p-2 border border-gray-200 rounded'
        />
        <textarea
          value={report}
          onChange={(e) => setReport(e.target.value)}
          placeholder='Report'
          className='w-full p-2 border border-gray-200 rounded'
          rows='6'
        />
        <button
          type='submit'
          className='w-half p-2 mx-auto bg-green-500 text-white rounded flex flex-col items-center'>
          Submit Report
        </button>
      </form>
    </div>
  );
}

export default Report;
