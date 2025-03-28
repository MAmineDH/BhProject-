import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import BhPhoto from '../assets/BH-Bank.jpg';
import { validateCin , validateRip } from '../functions/validate';
const SignIn = () => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [Cin, setCin] = useState('');
  const [Rip, setRip] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    let CinError = '';
    let RipError = '';

    
    if (!validateCin(Cin)) {
      CinError = 'Cin must be exactly 8 digits.';
    }

    
    if (!validateRip(Rip)) {
      RipError = 'Rip must be exactly 8 digits and match Cin.';
    }

   
    if (CinError || RipError) {
      setErrors({ Cin: CinError, Rip: RipError });

      
      if (CinError) toast.error(CinError);
      if (RipError) toast.error(RipError);

      return;
    }
    await toast.success('Sign-in successful!');
    await navigate('/dashboard');
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <img src={BhPhoto}  srcSet="" />
        <h2 className="text-xl font-bold text-center mb-3 ">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">CIN</label>
            <input
              type="number"
              placeholder="Enter your CIN"
              value={Cin}
              maxLength={8}
              onChange={(e) => setCin(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {errors.Cin && <p className="text-red-500 text-sm mt-1">{errors.Cin}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">RIP</label>
            <input
              type="number"
              placeholder="Enter your RIP"
              value={Rip}
              onChange={(e) => setRip(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {errors.Rip && <p className="text-red-500 text-sm mt-1">{errors.Rip}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account?{' '}
          <Link to="/signUp" className="text-red-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;