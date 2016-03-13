import React from 'react';
import ReactDOM from 'react-dom';

class LifeCycle extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {
      increasing: false
    };
  }

  update() {
    //console.log('updating');
    ReactDOM.render(
      <LifeCycle val={this.props.val + 1} />,
      document.getElementById('lifecycle-app')
    );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      increasing: nextProps.val > this.props.val
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    //only update component if val % 5
    return (nextProps.val % 5 === 0);
  }

  render() {
    //console.log('rendering');
    console.log(this.state.increasing);
    return (
      <button onClick={this.update}>
        LifeCycle_Update - {this.props.txt} - {this.props.val}
      </button>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
  }
}

LifeCycle.defaultProps = {
  val: 0,
  txt: 'Button'
};

ReactDOM.render(
  <LifeCycle />,
  document.getElementById('lifecycle-app')
);
export default LifeCycle;
