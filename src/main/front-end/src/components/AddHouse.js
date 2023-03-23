import React from 'react';
import './AddHouse.css';

const BtnAddHouse = (props) => {

  return (
      <button className="AddHouse">{props.text}</button>
  );
}

export {BtnAddHouse};