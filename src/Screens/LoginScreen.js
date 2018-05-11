import React from 'react';
import { Link } from 'react-router-dom';

let LoginScreen = () => {
  return (
    <div>
        <p>The LoginScreen has rendered</p>
        <Link to="/all"><p>Ok great pretend like I logged in now take me to the site.</p></Link>
    </div>
  );
}

export default LoginScreen;