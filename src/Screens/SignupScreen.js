import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/App.css';

import SignupForm from '../Components/SignupForm';
import PublicHeader from '../Components/PublicHeader';

let SignupScreen = () => {
  return (
      <div className='signup-screen'>
          <PublicHeader />
          <SignupForm />
          <Link to="/login">login</Link>
      </div>
  );
}

export default SignupScreen;