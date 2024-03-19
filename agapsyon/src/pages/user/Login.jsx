import React, { useState, useEffect } from 'react';
import { db } from '/src/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, 'users');
  const navigate = useNavigate();

  const onSubmit = async e => {
    e.preventDefault();

    const matchingUser = users.find(
      user => user.email === email && user.password === password
    );

    if (matchingUser) {
      alert('Login Successful!');
      navigate('/Home');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div className='flex flex-col font-montserrat md:flex-row h-screen bg-gradient-to-r from-[#FFEDCC] to-[#BFCFFF] m-0 p-0'>
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

      <div className='w-full md:w-1/2 h-full bg-gray-200 flex flex-col items-center justify-center p-10'>
        <form
          onSubmit={onSubmit}
          className='w-full space-y-4 flex flex-col items-center'>
          <input
            name='email'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Email address'
            className='w-2/3 p-2 border border-gray-200 rounded'
          />
          <input
            name='password'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='Password'
            className='w-2/3 p-2 border border-gray-200 rounded'
          />
          <div className='flex flex-col items-center mt-4'>
            <button
              type='submit'
              className='w-half p-2 bg-green-500 text-white rounded mt-4'>
              Login
            </button>
            <div className='mt-4 text-blue-500'>
              <Link to='/UserSignUp'>Don't have an account? Sign up</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
