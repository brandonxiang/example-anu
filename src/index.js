require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('core-js/fn/object/assign');

const React = require('react');
const ReactDOM = require('react-dom');

const oldData = {
  hello: 'World',
};

const newData = Object.assign({}, oldData, {
  hello: 'New World',
});

ReactDOM.render(
  <h1>{newData.hello}</h1>,
  document.getElementById('app')
)