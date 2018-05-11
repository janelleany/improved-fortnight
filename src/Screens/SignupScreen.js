import React from 'react';
import { Link } from 'react-router-dom';

let SignupScreen = () => {
    return (
        <div>
            <p>The SignupScreen has rendered</p>
            <Link to="/all"><p>Ok great pretend like I signed up now take me to the site.</p></Link>
            <Link to="/login"><p>I have an account. I want to login.</p></Link>
        </div>
    );
}

export default SignupScreen;