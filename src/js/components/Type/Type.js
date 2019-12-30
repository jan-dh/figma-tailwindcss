import React, { useGlobal } from 'reactn';
import { Link } from 'react-router-dom';
import FontFamilies from './FontFamilies';
import FontSizes from './FontSizes';
import messages from '../../helpers/randomMessages';

const Type = () => {
  const [fontSizes] = useGlobal('fontSize');
  const [fontFamilies] = useGlobal('fontFamily');
  const [baseFontSize] = useGlobal('baseFontSize');
  const hasFamilies = Object.keys(fontFamilies).length > 0;
  const hasSizes = Object.keys(fontSizes).length > 0;

  const emptyFamily =
    messages.emptyFamilies[
      Math.floor(Math.random() * messages.emptyFamilies.length)
    ];

  const emptySize =
    messages.emptySizes[Math.floor(Math.random() * messages.emptySizes.length)];

  const validateFontSize = (e) => {
    if (!baseFontSize && Object.keys(fontSizes).length > 0) {
      e.preventDefault();
    }
  };

  const buttonClass = baseFontSize
    ? 'button button--green'
    : 'button button--green opacity-50';

  return (
    <div className="row">
      <div className="col">
        <div className="w-full border-b border-gray-200 py-4">
          <h2 className="t-beta">Typography</h2>
          <p className="intro">Some type intro here</p>
        </div>
        <h3 className="t-gamma mt-4">Font families</h3>
        {hasFamilies ? (
          <FontFamilies />
        ) : (
          <div className="richtext mt-4">
            <p>{emptyFamily}</p>
          </div>
        )}
      </div>
      <div className="col mt-8">
        <h3 className="t-gamma">Font sizes</h3>
        {hasSizes ? (
          <FontSizes />
        ) : (
          <div className="richtext mt-4">
            <p>{emptySize}</p>
          </div>
        )}
      </div>
      <div className="col flex justify-between mt-8">
        <Link to="/" className="button button--green">
          Previous
        </Link>
        <Link to="/export" className={buttonClass} onClick={validateFontSize}>
          Next
        </Link>
      </div>
    </div>
  );
};
export default Type;
