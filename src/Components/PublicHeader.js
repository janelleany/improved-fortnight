import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PublicHeader.css';

let PublicHeader = () => {
  return (
      <div className='public-header'>
        <div><Link to={'/pricing'}>PRICING</Link></div>
        <div><Link to={'/faq'}>HOW IT WORKS</Link></div>
        <div><Link to={'/about'}>ABOUT US</Link></div>
        <div><Link to={'/contact'}>CONTACT</Link></div>
      </div>
    );
  }

export default PublicHeader;