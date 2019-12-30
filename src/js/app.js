import '../css/app.css';
import React, { setGlobal } from 'reactn';
import ReactDom from 'react-dom';
import App from './components/App';
import dummy from './helpers/dummy';

const theme = dummy;
setGlobal(theme);

ReactDom.render(<App />, document.getElementById('app'));

// onmessage = (event) => {
//   const theme = event.data.pluginMessage;
//   setGlobal(theme);
//   ReactDom.render(<App />, document.getElementById('app'));
//   onmessage = null;
// };
