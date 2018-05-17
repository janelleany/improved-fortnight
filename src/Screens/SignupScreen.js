import React from 'react';
import { Link } from 'react-router-dom';

import SignupForm from '../Components/SignupForm';
import PublicHeader from '../Components/PublicHeader';

let SignupScreen = () => {
  return (
      <div>
          <PublicHeader />
          <SignupForm />
          <Link to="/login">login</Link>
      </div>
  );
}

export default SignupScreen;