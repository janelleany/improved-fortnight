import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

let PublicHeader = () => {
  return (
      <div className='public-header'>
        <Link to={'/pricing'}>PRICING</Link>
        <Link to={'/faq'}>HOW IT WORKS</Link>
        <Link to={'/about'}>ABOUT US</Link>
        <Link to={'/contact'}>CONTACT</Link>
      </div>
    );
  }

export default PublicHeader;