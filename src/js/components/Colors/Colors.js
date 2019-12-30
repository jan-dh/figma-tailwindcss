import React, { useGlobal } from 'reactn';
import { Link } from 'react-router-dom';
import Color from './Color';
import NewColor from './NewColor';
import messages from '../../helpers/randomMessages';

const Colors = () => {
  const [colors, setColors] = useGlobal('colors');
  const nextIndex = colors.length + 1;
  const hasColor = Object.keys(colors).length > 0;
  const feedbackItem =
    messages.emptyColors[
      Math.floor(Math.random() * messages.emptyColors.length)
    ];

  const updateColor = (color, i) => {
    const newColors = colors;
    newColors[i] = color;
    setColors(newColors);
  };

  const removeColor = (i) => {
    const newColors = colors;
    delete newColors[i];
    setColors(newColors);
  };

  return (
    <div className="row">
      <div className="col">
        <div className="w-full border-b border-gray-200 py-4">
          <h2 className="t-beta">Colors</h2>
          <p className="intro">Pick and choose the colors you want to use</p>
        </div>
        <div className="my-8 richtext">
          <p>
            Colors are taken from the Figma Local Paint Styles. Colors can be
            grouped in the export step. If you want to group codes, prefix them
            with the same name.
          </p>
        </div>
        {hasColor ? (
          colors.map((color, i) => (
            <Color
              key={i}
              index={i}
              onChange={updateColor}
              removeColor={removeColor}
              {...color}
            />
          ))
        ) : (
          <div className="richtext">
            <p>{feedbackItem}</p>
          </div>
        )}

        <NewColor key={nextIndex} index={nextIndex} onChange={updateColor} />
        <div className="flex justify-end mt-8">
          <Link to="/typography" className="button button--green">
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Colors;
