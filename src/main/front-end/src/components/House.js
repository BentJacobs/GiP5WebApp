import './House.css';
import React from 'react';

function House(props) {

  return (
    <>
    <div className="container" onClick={() => props.onClick (props.house)}> 
      <h2>{props.house.name}</h2>
      <p class="description">{props.house.address}</p>
    </div>
    </>
  );
};

export default House;