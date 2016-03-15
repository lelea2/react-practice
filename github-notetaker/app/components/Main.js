var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        Hello World
      </div>
    );
  }
});

//This is rendering it on client side, instead of server side
ReactDOM.render(<Main />, document.getElementById('app'));
