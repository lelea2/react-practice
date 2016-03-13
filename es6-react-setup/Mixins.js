import React from 'react';
import ReactDOM from 'react-dom';

let Mixin = InnerComponent => class extends React.Component {
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
  componentWillMount() {
    //component all prepared and ready to mount
    console.log('mounting');
  }

  render() {
    return (
      <InnerComponent update={this.update} {...this.state} {...this.props} />
    );
  }

  componentDidMount() {
    //after component placed in DOM
    console.log('mounted');
  }

  componentWillUnmount() {
    console.log('bye');
  }
}

const Button = (props) => {
  return (
    <button onClick={props.update}>{props.txt} - {props.val}</button>
  );
}

const Label = (props) => {
  return (
    <label onMouseMove={props.update}>{props.txt} - {props.val}</label>
  );
}

let ButtonMixed = Mixin(Button);
let LabelMixed = Mixin(Label);

class Mixins extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <p>Mixins Example</p>
        <ButtonMixed txt="Button" />
        <LabelMixed txt="Label" />
      </div>
    );
  }
}

ReactDOM.render(<Mixins />, document.getElementById('mixin-app'));

export default Mixins;
