import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Single.css';

let style = {
  "max-width": "200px",
  "max-height": "200px",
}

let Single = ({id, all}) => {
  let result = all.find(query => query.queryid === id);
  return (
    <div className="single-container">
      <p>~~Pretend I am a slideshow of images~~ </p>
      <p>For now, just look at this one:</p>
      <img src={result.images[0]} alt="inspiration" style={style}/>
      <p>zip: {result.zip}</p>
      <p>{result.numberofsubmissions} submissions</p>
      <p>{result.daysleft} days left</p>
      <p>Description: {result.querydescription}</p>
      <p>Style: {result.style}</p>
      <p>Type: {result.querytype}</p>
      <p>Placement: {result.placement}</p>
      <p>Color: {result.color}</p>
      <p>Size: {result.size}</p>
      <p>Experience: {result.experience}</p>
      <Link to={"/new/submission"}><button>draw</button></Link>
    </div>
    );
  }

export default Single;