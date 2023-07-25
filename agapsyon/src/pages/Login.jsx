import React, { useState, useEffect } from 'react';
import { db } from '/src/firebase-config';
import { collection, getDocs } from 'firebase/firestore';

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const onSubmit = async (e) => {
    e.preventDefault();

    // Check if the email and password match any user in the database
    const matchingUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchingUser) {
      // User found, proceed with login logic
      console.log('Login successful!');
      // Add your login logic here, e.g., setting a login state in your app
    } else {
      // User not found, show error message
      console.log('Invalid credentials. Please try again.');
      // You can add a state variable to show an error message on the UI if needed.
    }
  };

  useEffect(() => {
    // Read users data from the database
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-r from-[#FFEDCC] to-[#BFCFFF] m-0 p-0">
      {/* Left side */}
      <div className='w-full md:w-1/2 h-full flex flex-col items-center p-10'>
        <img
          src='/src/images/logo.png'
          alt='Logo'
          className='h-[225px] w-[225px] m-0 mt-[20px] self-center'
        />
        <h1 className='text-2xl md:text-3xl font-bold m-0 mt-5 text-center'>
          AgapSyon: Paghanda at Pag-aksyon sa mga Sakuna
        </h1>
      </div>

      {/* Right side */}
      <div className='w-full md:w-1/2 h-full bg-gray-200 flex flex-col items-center justify-center p-10'>
        <form onSubmit={onSubmit} className='w-full space-y-4 flex flex-col items-center'>
          <input
            name='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email address'
            className='w-2/3 p-2 border border-gray-200 rounded'
          />
          <input
            name='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            className='w-2/3 p-2 border border-gray-200 rounded'
          />
          <div className='flex flex-col items-center mt-4'>
            <button type='submit' className='w-half p-2 bg-green-500 text-white rounded mt-4'>
              Login
            </button>
            <div className='mt-4 text-blue-500'>
              <a href='/signup'>Don't have an account? Sign up</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
