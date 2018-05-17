import React from 'react';
import '../styles/Header.css';


let Header = ({alias}) => {
  return (
    <div className="header">
      <p>{`In the header it'll say something like: Hello, ${alias}.`}</p>
    </div>
  );
}

export default Header;