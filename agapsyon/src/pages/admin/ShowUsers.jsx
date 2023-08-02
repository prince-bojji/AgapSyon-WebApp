import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '/src/firebase-config';

const ShowUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Read data from the "users" collection in the database
    const getUsers = async () => {
      const usersCollectionRef = collection(db, 'users');
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => doc.data()));
    };

    getUsers();
  }, []);

  return (
    <div className="min-h-screen font-montserrat bg-gradient-to-r from-[#FFEDCC] to-[#BFCFFF] m-0 p-10 flex items-center justify-center">
      <div className="bg-white w-full md:w-4/5 xl:w-3/4 2xl:w-2/3 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4">Users</h1>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-400 p-4">First Name</th>
                <th className="border border-gray-400 p-4">Middle Name</th>
                <th className="border border-gray-400 p-4">Last Name</th>
                <th className="border border-gray-400 p-4">Address</th>
                <th className="border border-gray-400 p-4">Contact</th>
                <th className="border border-gray-400 p-4">Email</th>
                <th className="border border-gray-400 p-4">Birthday</th>
                <th className="border border-gray-400 p-4">Password</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="border border-gray-400 p-4 text-justify">{user.fname}</td>
                  <td className="border border-gray-400 p-4 text-justify">{user.mname}</td>
                  <td className="border border-gray-400 p-4 text-justify">{user.lname}</td>
                  <td className="border border-gray-400 p-4 text-justify">{user.address}</td>
                  <td className="border border-gray-400 p-4 text-justify">{user.contact}</td>
                  <td className="border border-gray-400 p-4 text-justify">{user.email}</td>
                  <td className="border border-gray-400 p-4 text-justify">{user.birthday}</td>
                  <td className="border border-gray-400 p-4 text-justify">{user.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowUsers;
