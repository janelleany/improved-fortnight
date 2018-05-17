import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/App.css';

let style = {
  "max-width": "200px",
  "max-height": "200px",
}

let Single = ({id, all}) => {
  let result = all.find(piece => piece.id === id);
  return (
    <div className="single-container">
      <img src={result.img} alt="sketch" style={style}/>
      <p>Zip: {result.zip}</p>
      <p>{result.caption}</p>
      <p>Style: {result.style}</p>
      <p>Color: {result.color}</p>
      <p>Size: {result.size}</p>
      <p>Price: {result.price}</p>
      <p>Deposit: {result.deposit}</p>
      <Link to={"/new/reservation"}><button>reserve</button></Link>
    </div>
    );
  }

export default Single;