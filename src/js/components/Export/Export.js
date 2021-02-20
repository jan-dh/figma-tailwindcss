import React, { useGlobal } from 'reactn';
import { Link } from 'react-router-dom';
import Highlight, { defaultProps } from 'prism-react-renderer';
import util from 'util';
import { saveAs } from 'file-saver';
import { cleanupTheme } from '../../helpers/helpers';

const Export = () => {
  const [theme] = useGlobal();
  const cleanTheme = cleanupTheme(theme);
  const [grouped, setGrouped] = useGlobal('groupColor');

  const groupColors = () => {
    const toggle = !(grouped !== false);
    setGrouped(toggle);
  };

  const exportTheme = () => {
    const fileContent = `const theme = ${util.inspect(cleanTheme, {
      depth: null
    })}; export default theme;`;
    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'theme.js');
  };

  const markup = `${JSON.stringify(cleanTheme, null, ' ')}`.trim();
  // const buttonText = grouped ? 'Ungroup colors' : 'Group colors';
  const switchClass = grouped ? 'bg-green-400 active' : 'bg-gray-400';

  return (
    <div className="row">
      <div className="col flex">
        <div className="w-full border-b border-gray-200 py-4">
          <h2 className="t-beta">Export theme</h2>
          <p className="intro">Almost there...</p>
        </div>
      </div>
      <div className="col mt-8 relative">
        <Highlight {...defaultProps} code={markup} language="javascript">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
        <div
          className="absolute top-0 right-0 mr-4 mt-4 flex items-center"
          onClick={groupColors}
        >
          <div
            className={`switch w-12 h-6 rounded-full cursor-pointer mr-4 ${switchClass}`}
          >
            <div className="w-1/2 h-full rounded-full shadow bg-white"></div>
          </div>
          <span className="text-gray-200 text-sm">Group colors</span>
        </div>
      </div>
      <div className="col mt-4">
        <button className="button button--grey mt-4 mr-4" onClick={exportTheme}>
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          Create file
        </button>
      </div>
      <div className="col flex justify-between mt-8">
        <Link to="/effects" className="button button--green">
          Previous
        </Link>
        <Link to="/info" className="button button--green">
          Next
        </Link>
      </div>
    </div>
  );
};

export default Export;
