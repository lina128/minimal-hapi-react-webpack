if (process.env.NODE_ENV !== 'development') {
  throw new Error('ERROR: Sandbox is only intended for dev environment');
}

// React must be in scope when using JSX because JSX is translated into React.createElement(...)
const React = require('react');
const ReactDOM = require('react-dom');
const Counter = require('./components/counter');

require('./main-sandbox.css');

function mainSandbox() {
  ReactDOM.render(
    <Counter />,
    document.getElementById('appContainer'),
  );
}

document.addEventListener('DOMContentLoaded', mainSandbox);
