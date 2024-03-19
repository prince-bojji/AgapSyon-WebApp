import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '/src/firebase-config';
import { useNavigate, Link } from 'react-router-dom';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(null);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const onSubmit = async e => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !address ||
      !email ||
      !password ||
      password !== confirmPassword
    ) {
      alert(
        'Please fill in all required fields and make sure passwords match.'
      );
      return;
    }

    try {
      await createUser();
      alert('User created successfully!');
      navigate('/UserLogin');
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Failed to create user. Please try again.');
    }
  };

  const createUser = async () => {
    const usersCollectionRef = collection(db, 'users');
    await addDoc(usersCollectionRef, {
      fname: firstName,
      mname: middleName,
      lname: lastName,
      address,
      contact: contactNumber,
      email,
      birthday: date.toISOString(),
      password,
    });
  };

  useEffect(() => {
    document.body.style.background =
      'linear-gradient(to right, #FFEDCC, #BFCFFF)';
    document.body.style.height = '100vh';
    return () => {
      document.body.style.background = null;
      document.body.style.height = null;
    };
  }, []);

  return (
    <div className='flex flex-col font-montserrat md:flex-row h-screen m-0 p-0 bg-gradient-to-r from-[#FFEDCC] to-[#BFCFFF]'>
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

      <div className='w-full md:w-1/2 h-full bg-gray-200 flex flex-col justify-center items-center p-2'>
        <form
          onSubmit={onSubmit}
          className='w-full space-y-4 flex flex-col items-center'>
          <input
            name='firstName'
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            placeholder='First name'
            className='w-2/3 p-2 border border-gray-200 rounded cursor-pointer'
          />
          <input
            name='middleName'
            value={middleName}
            onChange={e => setMiddleName(e.target.value)}
            placeholder='Middle name'
            className='w-2/3 p-2 border border-gray-200 rounded'
          />
          <input
            name='lastName'
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            placeholder='Last name'
            className='w-2/3 p-2 border border-gray-200 rounded'
          />
          <input
            name='address'
            value={address}
            onChange={e => setAddress(e.target.value)}
            placeholder='Address'
            className='w-2/3 p-2 border border-gray-200 rounded'
          />
          <input
            name='contactNumber'
            value={contactNumber}
            onChange={e => setContactNumber(e.target.value)}
            placeholder='Contact Number'
            className='w-2/3 p-2 border border-gray-200 rounded'
          />
          <input
            name='email'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Email address'
            className='w-2/3 p-2 border border-gray-200 rounded'
          />
          <div className='bg-white w-2/3 p-2 border border-[gray-200] rounded'>
            <DatePicker
              selected={date}
              onChange={date => setDate(date)}
              className='w-full'
              placeholderText='Date of birth'
            />
          </div>
          <input
            name='password'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='Password'
            className='w-2/3 p-2 border border-gray-200 rounded'
          />
          <input
            name='passwordConfirm'
            type='password'
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            placeholder='Confirm password'
            className='w-2/3 p-2 border border-gray-200 rounded '
          />
          <div className='flex flex-col items-center mt-4'>
            <button
              type='submit'
              className='w-half p-2 bg-green-500 text-white rounded mt-4'>
              Sign up
            </button>
            <div className='mt-2 text-blue-500'>
              <Link to='/UserLogin'>Already have an account? Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
