import React from 'reactn';
import { Link } from 'react-router-dom';

const Info = () => {
  const theme = `'./theme'`;
  const overWrite = `module.exports = {
  theme: {
    colors: {
      theme.colors
    }`;
  const extend = `module.exports = {
  theme: {
    colors: {
      gray: {
        100: #f7fafc',
        200: '#edf2f7',
      },
      ...theme.colors
    }
  `;
  return (
    <div className="row">
      <div className="col flex">
        <div className="w-full border-b border-gray-200 py-4">
          <h2 className="t-beta">Usage</h2>
          <p className="intro">
            Everything you need to know to get you started
          </p>
        </div>
      </div>
      <div className="col mt-8">
        <div className="richtext">
          <p>
            Import the <code>theme.js</code> file in to your{' '}
            <code>tailwind.config.js</code>
            configuration file to use it:
          </p>
          <pre>
            <code>import theme from {theme};</code>
          </pre>
          <h3 className="t-gamma">Overriding the default theme</h3>
          <p>
            To override an option in the default theme, create a theme section
            in your config and add the key you would like to override.
          </p>
          <pre>
            <code>{overWrite}</code>
          </pre>
          <h3 className="t-gamma">Add to current values</h3>
          <p>
            Using the spread operator at the end of each property you can add
            your theme values to an existing config or to the default tailwind
            config.
          </p>
          <pre>
            <code>{extend}</code>
          </pre>
        </div>
      </div>
      <div className="col flex justify-between mt-8">
        <Link to="/export" className="button button--green">
          Previous
        </Link>
      </div>
    </div>
  );
};

export default Info;
