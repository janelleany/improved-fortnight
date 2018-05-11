import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Single.css';

let style = {
  "max-width": "200px",
  "max-height": "200px",
}

let Single = ({id, all}) => {
  let result = all.find(query => query.queryId === id);
  return (
    <div className="single-container">
      <p>~~Pretend I am a slideshow of images~~ </p>
      <p>For now, just look at this one:</p>
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

export default Single;