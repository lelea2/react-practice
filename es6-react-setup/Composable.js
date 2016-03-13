import React from 'react';
import ReactDOM from 'react-dom';

class ComposableApp extends React.Component {

  constructor() {
    super();
    this.state = {
      blue: 0
    },
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
    });
  }

  render() {
    return (
      <div>
        <NumberInput
          ref="blue"
          min={0}
          max={255}
          step={1}
          val={+this.state.blue}
          type="range"
          label="Red"
          update={this.update} />
      </div>
    );
  }
};

class NumberInput extends React.Component {
  render() {
    let label = (this.props.label !== '') ? <label>{this.props.label} - {this.props.val}</label> : '';
    return (
      <div>
        <input ref="inp"
               type={this.props.type}
               min={this.props.min}
               max={this.props.max}
               step={this.props.step}
               defaultValue={this.props.val}
               onChange={this.props.update} />
        {label}
      </div>
    );
  };
}

NumberInput.propsTypes = {
  mix: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  val: React.PropTypes.number,
  label: React.PropTypes.string,
  update: React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf['number', 'range']
},

NumberInput.defaultProps = {
  min: 0,
  max: 0,
  step: 1,
  val: 0,
  label: '',
  type: 'range'
};

ReactDOM.render(<ComposableApp />, document.getElementById('composable-app'));

export default ComposableApp;
