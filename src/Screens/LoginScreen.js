import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/App.css';

import PublicHeader from '../Components/PublicHeader';
import LoginForm from '../Components/LoginForm';


let LoginScreen = () => {
  return (
    <div>
        <PublicHeader />
        <LoginForm />
        <Link to="/forgot">forgot password?</Link>
    </div>
  );
}

export default LoginScreen;