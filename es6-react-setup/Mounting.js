import React from 'react';
import ReactDOM from 'react-dom';

class Mount extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({
      val: this.state.val + 1
    });
  }

  /**
   * Component life cycle
   */
  componentWillMount() {
    //component all prepared and ready to mount
    console.log('mounting');
    this.setState({
      m: 2
    });
  }

  render() {
    console.log('rendering');
    return (
      <button onClick={this.update}>{this.state.val * this.state.m}</button>
    );
  }

  componentDidMount() {
    //after component placed in DOM
    console.log('mounted');
    //see actual HTML in DOM, only in this method, when you have access to DOM
    console.log(ReactDOM.findDOMNode(this));
    //Set interval for react when component already mount
    //Ex: set for your clock?
    this.inc = setInterval(this.update, 500);
  }

  componentWillUnmount() {
    console.log('bye');
    clearInterval(this.inc);
  }
}

class Wrapper extends React.Component {
  constructor() {
    super();
  }
  mount() {
    ReactDOM.render(<Mount />, document.getElementById('a'));
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  }
  render() {
    return(
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="a"></div>
      </div>
    );
  }
}

//ReactDOM.render(<Mount />, document.getElementById('mount-app'));
//export default Mount;

ReactDOM.render(<Wrapper />, document.getElementById('mount-app'));
