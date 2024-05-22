import React from 'react';
import PropTypes from 'prop-types';

const BorderRadius = (props) => {
  const { name, value } = props;
  // Return
  return (
    <div className="col w-1/4 mt-4">
      <span className="block text-gray-700">{name}</span>
      <div
        className="w-20 h-20 rounded mt-4 bg-gray-200 border"
        style={{ borderRadius: value }}
      ></div>
    </div>
  );
};

BorderRadius.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string
};

export default BorderRadius;
