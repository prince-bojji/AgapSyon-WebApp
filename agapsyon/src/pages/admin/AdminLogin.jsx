import React, { useState, useEffect } from 'react';
import { db } from '/src/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPrompt, setShowPrompt] = useState(false); // State variable to control prompt display
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    // Check if the email and password are not empty
    if (!email || !password) {
      alert('Please fill in both email and password.');
      return;
    }

    // Fetch the admin data from the database
    const adminsCollectionRef = collection(db, 'admin');
    const adminData = await getDocs(adminsCollectionRef);
    const admins = adminData.docs.map((doc) => doc.data());

    // Check if the provided email and password match any admin's credentials
    const matchingAdmin = admins.find(
      (admin) => admin.email === email && admin.password === password
    );

    if (matchingAdmin) {
      // Admin found, proceed with admin login logic
      console.log('Admin login successful!');
      // Add your admin login logic here, e.g., setting an admin login state in your app
      navigate('/Weather'); // Navigate to the WeatherUpdate page after successful login
    } else {
      // Admin not found, show prompt
      setShowPrompt(true);
    }
  };

  useEffect(() => {
    document.body.style.background = 'linear-gradient(to right, #FFEDCC, #BFCFFF)';
    document.body.style.height = '100vh';
    return () => {
      document.body.style.background = null;
      document.body.style.height = null;
    };
  }, []);

  return (
    <div className='flex flex-col font-montserrat md:flex-row h-screen m-0 p-0' style={{ background: 'linear-gradient(to right, #FFEDCC, #BFCFFF)' }}>
      {/* Left side */}
      <div className='w-full md:w-1/2 h-full flex flex-col justify-center items-center p-10'>
        <img
          src='/src/images/logo.png'
          alt='Logo'
          className='h-[225px] w-[225px] m-0 mt-[20px] self-center cursor-pointer'
          onClick={() => navigate('/')}
        />
        <h1 className='text-2xl md:text-3xl font-bold m-0 mt-5 text-center'>
          AgapSyon: Paghanda at Pag-aksyon sa mga Sakuna
        </h1>
      </div>

      {/* Right side */}
      <div className='w-full md:w-1/2 h-full bg-gray-200 flex flex-col items-center justify-center p-10'>
        <form
          onSubmit={onSubmit}
          className='w-full space-y-4 flex flex-col items-center'>
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
          {showPrompt && (
            <p className='text-red-500'>
              Username and password don't match. Please try again.
            </p>
          )}
          <div className='flex flex-col items-center mt-4'>
            <button
              type='submit'
              className='w-half p-2 bg-green-500 text-white rounded mt-4'
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;