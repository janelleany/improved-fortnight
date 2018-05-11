import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/Buttons.css';



let Buttons = () => {
  return (
      <div className="buttons-container">
        <p>The Buttons Component has rendered.</p>
        <Link to={"/new/query/1"}>Create a New Query Button</Link>
      </div>
    );
  }

export default Buttons;