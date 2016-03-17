var React = require('React');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Profile = require('../components/Profile');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="profile/:username" component={Profile} />
  </Route>
);
