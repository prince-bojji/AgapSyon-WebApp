import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '/src/firebase-config';

function Report() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  // const [location, setLocation] = useState('');
  const [house, setHouse] = useState('');
  const [street, setStreet] = useState('');
  const [block, setBlock] = useState('');
  const [report, setReport] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!name || !contact || !house || !street || !block || !report) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      // Insert the report data to the "reports" collection in Firestore
      const location = `${house}, ${street}, ${block}, Brgy.160, Caloocan`;
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
      setHouse('');
      setStreet('');
      setBlock('');
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
      <h1 className='text-5xl font-bold mt-10 mb-10 text-[#5d7468]'>Submit a Report</h1>
      <form onSubmit={handleSubmit} className='w-1/2 space-y-4'>
      <h5>Personal Information</h5>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
          className='w-full p-2 border border-gray-200 rounded-lg'
        />
        <input
          type='text'
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder='Contact'
          className='w-full p-2 border border-gray-200 rounded-lg'
        />
        {/* <input
          type='text'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder='Location'
          className='w-full p-2 border border-gray-200 rounded-lg'
        /> */}
        <h5>Location</h5>
        <div class="container" className='flex flex-wrap'>
          <input 
            type='text'
            value={house}
            onChange={(e) => setHouse(e.target.value)}
            className='p-2 border border-gray-200 rounded-lg flex-grow flex-shrink-0 flex-basis-300' 
            placeholder='House No.'/>
          <select 
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            className='p-2 border border-gray-200 rounded-lg flex-grow flex-shrink-0 flex-basis-300'>
            <option>Street</option>
            <option>Aquino St.</option>
            <option>Ana St.</option>
            <option>Bayanihan St.</option>
            <option>De Guzman St.</option>
            <option>Camia St.</option>
            <option>Ilang-Ilang St.</option>
            <option>Ignacio St.</option>
            <option>Julita St.</option>
            <option>Magdalena St.</option>
            <option>Salvador St.</option>
          </select>
          <select
            value={block} 
            onChange={(e) => setBlock(e.target.value)}
            className='p-2 border border-gray-200 rounded-lg flex-grow flex-shrink-0 flex-basis-300'>
            <option>Block</option>
            <option>Bukid</option>
            <option>East Libis</option>
            <option>Libis Baesa</option>
            <option>Riverside</option>
            <option>Tabing Sapa</option>
          </select>
          <input 
            type='text'
            className='p-2 border border-gray-200 rounded-lg flex-grow flex-shrink-0 flex-basis-300' disabled placeholder='Brgy. 160, Caloocan'/>
        </div>
        <h5>Report</h5>
        <textarea
          value={report}
          onChange={(e) => setReport(e.target.value)}
          placeholder='How can we help you?'
          className='w-full p-2 border border-gray-200 rounded-lg resize-none'
          rows='6'
        />
        <button
          type='submit'
          className='w-half p-2 px-5 mx-auto bg-green-500 text-white rounded-full flex flex-col items-center'>
          Submit Report
        </button>
      </form>
    </div>
  );
}

export default Report;
