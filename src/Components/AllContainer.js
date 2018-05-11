import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/AllContainer.css';

let AllContainer = ({all}) => {
  return (
    <div className="all-container">
      {
        all.map(query => {
          return (
            <Link key={query.queryId} to={`/all/${query.queryId}`}>
              <div className="query-thumbnail-container">
                <div className="query-thumbnail-image-container"><img src={query.images[0]} alt="inspiration"/></div>
                <p>{query.description}</p>
                <p>Style: {query.style}</p>
                <p>Type: {query.type}</p>
                <p>Zip: {query.zip}</p>
                <p>{query.daysLeft} days left</p>
                </div>
            </Link>
          );
        })
      }
    </div>
    );
  }

export default AllContainer;