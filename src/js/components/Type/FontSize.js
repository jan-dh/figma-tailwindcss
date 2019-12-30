import React from 'react';
import PropTypes from 'prop-types';

const FontSize = (props) => {
  // const [baseFontSize, setBaseFontSize] = useState(false);
  const { name, value } = props;
  const remSize = value / 16;
  const fontSize = {
    fontSize: `${remSize}rem`
  };

  return (
    <div className="flex justify-between items-center">
      <p style={fontSize} className="text-code-white">
        {value}px<span className="ml-4 text-code-red">- {remSize}rem</span>
      </p>
      <span className="text-code-green">{name}</span>
    </div>
  );
};

export default FontSize;

FontSize.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string
};
