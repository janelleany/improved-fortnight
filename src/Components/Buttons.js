import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/Buttons.css';



let Buttons = () => {
  return (
      <div className="buttons-container">
        <Link to={"/new/piece/1"}>Create a New Piece Button</Link>
      </div>
    );
  }

export default Buttons;