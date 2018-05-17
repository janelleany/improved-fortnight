import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/AllContainer.css';

let AllContainer = ({all}) => {
  return (
    <div className="all-container">
      {
        all.map(piece => {
          return (
            <Link key={piece.id} to={`/pieces/${piece.id}`}>
              <div className="piece-thumbnail-container">
                <div className="piece-thumbnail-image-container"><img src={piece.img} alt="sketch"/></div>
                <p>{piece.tattooeralias}</p>
                <p>price: {piece.price}</p>
                <p>deposit: {piece.deposit}</p>
                </div>
            </Link>
          );
        })
      }
    </div>
    );
  }

export default AllContainer;