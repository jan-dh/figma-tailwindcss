import React from 'react';
import PropTypes from 'prop-types';

const Family = (props) => {
  const { name, value } = props;
  return (
    <div className="flex justify-between">
      <span className="">{name}</span>
      <span className="text-code-green">{value}</span>
    </div>
  );
};

Family.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string
};

export default Family;
