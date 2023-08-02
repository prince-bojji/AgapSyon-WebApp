import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '/src/firebase-config';

function InsertHotlines() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields (e.g., check if name and contact are not empty)
    if (!name || !contact) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      // Add the new hotline data to the "hotlines" collection in the database
      await addDoc(collection(db, 'hotlines'), {
        name,
        contact,
      });

      // Clear input fields after successful submission
      setName('');
      setContact('');

      alert('Hotline added successfully!');
    } catch (error) {
      console.error('Error adding hotline:', error);
      alert('An error occurred while adding the hotline.');
    }
  };

  return (
    <div className="min-h-screen font-montserrat bg-gradient-to-r from-[#FFEDCC] to-[#BFCFFF] m-0 p-10 flex justify-center">
      <div className="w-full md:w-4/5 xl:w-3/4 2xl:w-2/3 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl text-[#5D7468] font-bold mb-4">Insert Hotlines</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-[#5D7468] text-lg font-semibold mb-2" htmlFor="name">
              Contact Name
            </label>
            <input
              className="w-full border border-gray-400 p-1 rounded-lg focus:outline-none focus:border-[#5D7468]"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#5D7468] text-lg font-semibold mb-2" htmlFor="contact">
              Contact Information
            </label>
            <input
              className="w-full border border-gray-400 p-1 rounded-lg focus:outline-none focus:border-[#5D7468]"
              type="text"
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#5D7468] text-white px-4 py-2 rounded-lg hover:bg-opacity-80 transition duration-300"
            >
              Add Hotline
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InsertHotlines;
