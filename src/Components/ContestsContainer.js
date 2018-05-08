import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/ContestsContainer.css';

let ContestsContainer = ({allContests}) => {
  return (
      <div><span>...and a list of contests...which will each have the following data:</span>
      <div className="contests-container">
      {
          allContests.map(contest => {
              return (
                  <Link to={`/contests/${contest.contestId}`}>
                  <div key={contest.contestId} className="contest-thumbnail-container">
                        <div className="contest-thumbnail-image-container"><img src={contest.images[0]} alt="inspiration"/></div>
                        <p>{contest.description}</p>
                        <p>Style: {contest.style}</p>
                        <p>Type: {contest.type}</p>
                        <p>Zip: {contest.zip}</p>
                        <p>{contest.daysLeft} days left</p>
                    </div>
                  </Link>
          );
      })
    }
      </div>
      </div>
    );
  }

export default ContestsContainer;