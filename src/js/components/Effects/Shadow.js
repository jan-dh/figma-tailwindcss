import React from 'react';
import PropTypes from 'prop-types';


const Shadow = (props) =>  {
  const { name, value } = props;
    // Return
  return (
    <div className="col w-1/4 mt-4">
      <span className="block text-gray-700">{name}</span>
      <div className="w-20 h-20 rounded mt-4 " style={{ 'boxShadow': value }}></div>
    </div>
  );
}

Shadow.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string
};

export default Shadow;
