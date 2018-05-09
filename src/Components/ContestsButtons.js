import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/ContestsButtons.css';



let ContestsButtons = () => {
  return (
      <div className="contests-buttons-container">
        <p>The ContestsButtons Component has rendered.</p>
        <Link to={"/new/contest"}><button>Create a New Contest</button></Link>
      </div>
    );
  }

export default ContestsButtons;