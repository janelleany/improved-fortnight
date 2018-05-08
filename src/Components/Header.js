import React from 'react';
import '../styles/Header.css';
import NavBack from './NavBack';

// props.match.path === '/contests/:contestId'

let Header = ({path}) => {
  if (path === '/contests/:contestId') {
    return (
      <div className="header">
        <p>The Header Component has rendered.</p>
        <NavBack />
      </div>
    );
  }
  else {
    return (
      <div className="header">
        <p>The Header Component has rendered.</p>
      </div>
    );
  }
  }

export default Header;