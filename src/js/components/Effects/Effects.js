import React, {useGlobal} from 'reactn';
import { Link } from 'react-router-dom';
import Shadow from './Shadow';
import messages from '../../helpers/randomMessages';

const Effects = () => {
  console.log(messages);
  const [shadows, setShadows] = useGlobal('boxShadow');
  console.log(setShadows);
  return(
    <div className="row">
      <div className="col">
        <div className="w-full border-b border-gray-200 py-4">
          <h2 className="t-beta">Effects</h2>
          <p className="intro">Effect Styles we found in your Figma file</p>
        </div>
        <h3 className="t-gamma mt-4">Shadows</h3>
      </div>
      {Object.keys(shadows).map((i) => (
        <Shadow key={i} {...shadows[i]} />
      ))}
      <div className="col flex justify-between mt-8">
        <Link to="/typography" className="button button--green">
          Previous
        </Link>
        <Link to="/export" className="button button--green">
          Next
        </Link>
      </div>
    </div>
  )
}

export default Effects;
