import React from 'react';

const ShowCard = props => (
  <div className="show-card">
    <img src={`/public/img/posters/${props.poster}`} alt={`${props.title} Show Poster`} />
    <div>
      <h3>{props.title}</h3>
      <h4>{props.year}</h4>
      <p>{props.description}</p>
    </div>
  </div>
);

export default ShowCard;
