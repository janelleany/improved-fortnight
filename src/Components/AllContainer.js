import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/AllContainer.css';

let AllContainer = ({all}) => {
  return (
    <div className="all-container">
      {
        all.map(query => {
          return (
            <Link key={query.queryid} to={`/all/${query.queryid}`}>
              <div className="query-thumbnail-container">
                <div className="query-thumbnail-image-container"><img src={query.images[0]} alt="inspiration"/></div>
                <p>{query.querydescription}</p>
                <p>Style: {query.style}</p>
                <p>Type: {query.querytype}</p>
                <p>Zip: {query.zip}</p>
                <p>{query.daysleft} days left</p>
                </div>
            </Link>
          );
        })
      }
    </div>
    );
  }

export default AllContainer;