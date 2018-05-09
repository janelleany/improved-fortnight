import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Contest.css';

let style = {
  "max-width": "200px",
  "max-height": "200px",
}

let Contest = ({allContests, contestId}) => {
  let result = allContests.find(contest => contest.contestId === contestId);
  return (
      <div className="contest-container">
        <p>~~Pretend I am a slideshow of images~~ </p>
        <p>For now, look at this one:</p>
        <img src={result.images[0]} alt="inspiration" style={style}/>
        <p>zip: {result.zip}</p>
        <p>{result.numberOfSubmissions} submissions</p>
        <p>{result.daysLeft} days left</p>
        <p>Description: {result.description}</p>
        <p>Style: {result.style}</p>
        <p>Type: {result.type}</p>
        <p>Placement: {result.placement}</p>
        <p>Color: {result.color}</p>
        <p>Size: {result.size}</p>
        <p>Experience: {result.experience}</p>
        <Link to={"/new/submission"}><button>draw</button></Link>
      </div>
    );
  }

export default Contest;