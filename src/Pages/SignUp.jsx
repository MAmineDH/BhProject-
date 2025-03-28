import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import BhPhoto from '../assets/BH-Bank.jpg';
import { validateEmail, validateCin ,validateRip} from '../functions/validate';
const SignUp = () => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [Cin, setCin] = useState('');
  const [Rip, setRip] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      let emailError = '';
      let CinError = '';
      let RipError = '';
  
      
      if (!validateEmail(email)) {
        emailError = 'Invalid email address';
      }
  
      
      if (!validateCin(Cin)) {
        CinError = 'Cin must contain only numbers and be exactly 8 characters long.';
      }
  
      
      if (emailError || CinError || RipError) {
        setErrors({ email: emailError, Cin: CinError, Rip: RipError });
  
        
        if (emailError) toast.error(emailError);
        if (CinError) toast.error(CinError);
        if (RipError) toast.error(RipError);
  
        return;
      }
  
      
      await toast.success('Sign-up successful!', { autoClose: 3000 });
      await navigate('/signIn'); // Redirect after success
  
    } catch (error) {
      
      console.error('Sign-up error:', error);
      toast.error(error.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <img src={BhPhoto} alt="BH Bank Logo" className="w-32 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-center mb-8">Sign Up </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Cin</label>
            <input
              type="number"
              placeholder="Enter your Cin"
              value={Cin}
              maxLength={8}
              minLength={8}
              onChange={(e) => setCin(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {errors.Cin && <p className="text-red-500 text-sm mt-1">{errors.Cin}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Confirm Cin</label>
            <input
              type="number"
              placeholder="Enter your Rip"
              value={Rip}
              //-------------------------- hethyy lzm raja3 fiha el bank  ----------------------------------------
              maxLength={8}
              minLength={8}
              onChange={(e) => setRip(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {errors.Rip && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmRip}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{' '}
          <Link to="/signin" className="text-red-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;