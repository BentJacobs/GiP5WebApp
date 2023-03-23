import React from 'react';
import './AddRoom.css';

const BtnAddRoom = (props) => {

  return (

      <button className="AddRoom">{props.text}</button>

  );
}

export {BtnAddRoom};