import React from 'react';
import ReactDOM from 'react-dom';

class ButtonApp extends React.Component {
  render() {
    return (
      <Button> I <Heart /> React</Button>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <button>{this.props.children}</button>
    );
  }
}

const Heart = () => {
  return (
    <span className="glyphicon glyphicon-heart"></span>
  );
}

ReactDOM.render(<ButtonApp />, document.getElementById('button-app'));
