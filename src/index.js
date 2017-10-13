require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('core-js/fn/object/assign');

const React = require('react');
const ReactDOM = require('react-dom');

const App = require('./components/header');
const Home = require('./routes/home').default;
const Profile = require('./routes/profile').default;
const { Router, Route, hashHistory, IndexRoute } = require('react-router');

console.log(App)

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/home" component={Home}/>
      <Route path="/profile/:user" component={Profile}/>
    </Route>
  </Router>,
	document.getElementById('app')
)
