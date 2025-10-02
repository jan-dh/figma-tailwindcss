import React, { Fragment } from 'reactn';
import { Link } from 'react-router-dom';
// import messages from '../../helpers/randomMessages';

const Preferences = () => {
  // const [colors, setColors] = useGlobal('colors');
  // const [gradients] = useGlobal('gradientColors');

  return (
    <Fragment>
      <div className="w-full border-b border-gray-200 py-4">
        <h2 className="t-beta">Preferences</h2>
        <p className="intro">Tailwind version, color preferences, ...</p>
      </div>
      <div className="my-8 richtext">
        <p>Pick the options on how you want to export your config</p>
      </div>
      <div className="flex justify-end mt-8">
        <Link to="/typography" className="button button--green">
          Next
        </Link>
      </div>
    </Fragment>
  );
};

export default Preferences;
