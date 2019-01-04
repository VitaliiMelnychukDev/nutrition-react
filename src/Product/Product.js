import React from 'react';
import './Person.css';
const product = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>Product name is {props.name}</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default product;