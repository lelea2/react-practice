import React from 'react';
import ReactDOM from 'react-dom';

/*class App extends React.Component {
  render() {
    //return React.createElement('h1', null, 'Hello World');
    //return <h1>Hello World<h1>; //jsx style
    return (
      <div>
        <h1>Hello World</h1>
        <b>Bold</b>
      </div>
    );
  }
}
export default App;

*/
//Create stateless component
//const App = () => <h1>Hello World<h/h1>

class App extends React.Component {

  /**
   * Set up constructore
   */
  constructor() {
    super();
    /*this.state = {
      //txt: 'this is the state txt',
      txt: '',
      cat: 0
    };*/
    this.state = {
      blue: 0,
      green: 0,
      red: 0
    },
    this.update = this.update.bind(this);
  }

  /**
   * Manage your state
   * @param  {[type]} e [description]
   * @return {[type]}   [description]
   */
  update(e) {
    this.setState({
      /*txt: e.target.value*/
      red: ReactDOM.findDOMNode(this.refs.red).value,
      blue: ReactDOM.findDOMNode(this.refs.blue).value,
      green: ReactDOM.findDOMNode(this.refs.green).value,
    });
  }

  // render() {
  //   let txt = this.props.txt;
  //   return <h1>{txt}</h1>;
  // }
  render() {
    //console.log('testing');
/*    return (
       <div>
         <input type="text" onChange={this.update.bind(this)} />
         <h1>{this.state.txt}</h1>
       </div>
    );*/
    /*return (
      <div>
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
      </div>
    );*/
    return (
      <div>
        <Slider ref="red" update={this.update} />
        {this.state.red}
        <br />
        <Slider ref="green" update={this.update} />
        {this.state.green}
        <br />
        <Slider ref="blue" update={this.update} />
        {this.state.blue}
        <br />
      </div>
    );
  }
};

class Slider extends React.Component {
  render() {
    return (
      <input type="range" min="0" max="255" onChange={this.props.update} />
    );
  }
}

/**
 * Create statelist component
 * Notice: "props" is datae passed with jsx syntax widget is called
 */
const Widget = (props) => {
  return (
    <div>
      <input type="text" onChange={props.update} />
      <h1>{props.txt}</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

// App.propTypes = {
// txt: React.PropTypes.string,
// cat: React.PropTypes.number.isRequired
// }

// ReactDOM.render(
// <App cat={5} txt="this is the props value" />
// document.getElementById('app');
// );

