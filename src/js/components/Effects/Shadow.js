import React from 'react';
import PropTypes from 'prop-types';


const Shadow = (props) =>  {
  const { name, value } = props;
    // Return
  return (
    <div className="col w-1/4 mt-4 text-center">
      <div className="w-20 h-20 rounded mx-auto" style={{ 'boxShadow': value }}></div>
      <span className="mt-4 block">{name}</span>
    </div>
  );
}

Shadow.propTypes = {
  name: PropTypes.string,
  css: PropTypes.string
};

export default Shadow;
