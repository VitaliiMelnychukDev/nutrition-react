import React from 'react';

const ingridient = function (props) {
  return (
    <div>
      {props.name} : {props.value}
    </div>
  );
};

export default ingridient;