#### Set up for react working with ES6

```
sudo npm i babel webpack webpack-dev-server -g
```

Webpack and babel transpiler to transform ES6

```
npm i react react-dom --save
npm i babel-loader babel-core babel-preset-es2015 babel-preset-react
```

###### State vs. stateless component

* Render method
Only allow to return one single node

```jsx
//Create State component
class App extends React.Component {
  render() {
    return <h1>Hello World<h1>; //jsx style
  }
}

//Create stateless component
const App = () => <h1>Hello World<h/h1>
```

###### React props
Passing element when rendering react component

###### Define react proptype
```javascript
App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}
```

###### Define default property
```javascript
App.defaultProps = {
  txt: 'this is the default text'
};
```

###### Passing state to React app component
```javascript
ReactDOM.render(
  <App cat={5} txt="this is the props value" />
  document.getElementById('app');
);
```

###### State Basics
Collection of value that supposed to be mananged by component itself

###### States vs. Props
* State changed in component, component will automatically rendered and changed the effective node. If no state change, it won't do it at all
```
render() {
  setTimeout(() => {
    this.setState({name: "Bob"});
  }, 1000);
  return (
    <div>{this.state.name}</div>
  );
}
```

* Important: How to access props from other layout ==> remmember to always use bind() to you event handling
```
render() {
  return (
    <input onChange={this.handleChange.bind(this)} />
  );
}
}
```

###### Owner vs. Ownee relationship
When one component render another component in react, we call this owner/ownee relationship. Parent component also called "Composite component"

```javascript
const Widget = (props) => {
  return (
    <div>
      <input type="text" onChange={props.update} />
      <h1>{props.txt}</h1>
    </div>
  );
}

```

###### Using Refs to access component (refs won't work with stateless component)
Need ReactDOM to read refs value
```javascript
  update(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red).value
    });
  }
```

```javascript

Pass refs value in .jsx component render
```javascript
return (
  <div>
    <Slider ref="red" update={this.update} />
    {this.state.red}
    <br />
  </div>
);
```

```javascript
//Handle for nested ref
update(e) {
  this.setState({
    red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
  });
}

//In this case, your component as following
return (
  <div>
    <input refs="inp" type="range" onChange={this.props.update} />
  </div>
);
```

* Accessing child properties of your react markup ==> using this.props.children

###### Component Lifecyle -- Mounting Basic

* Read: http://busypeoples.github.io/post/react-component-lifecycle/

When component is added/removed from DOM, it's called mounting or umounting component. Include 3 stage:

1. componentWillMount

2. componentDidMount ==> We will have access to actually DOM at this stage. So can find dom component by ReactDOM.findDOMNode(this)

3. componentWillUnmount

```javascript
 /**
   * Component life cycle
   */
  componentWillMount() {
    //component all prepared and ready to mount
    console.log('mounting');
  }

  render() {
    console.log('rendering');
    return (
      <button onClick={this.update}>{this.state.val}</button>
    );
  }

  componentDidMount() {
    //after component placed in DOM
    console.log('mounted');
  }

  componentWillUnmount() {
    console.log('bye');
  }
```

###### How to use component lifecyle
1. componentWillMount ==> can set up extra state value for DOM accessing here

2. componentDidMount ==> at this stage you already have access to DOM (ReactDOM.findDOMNode), at this stage, we could start execute function, update DOM in interval for eg

3. componentWillUmount ==> at this stage, we can clear whatever we set up in componentDidMount

###### Update life cycle of a component

1. componentWillReceiveProps(nextProps)

2. shouldComponentUpdate(nextProps, prevState)

3. componentDidUpdate(prevProps, prevState)

###### Higher Order Components (Mixins ES6)

```javascript
//Defined mixins
let Mixin = InnerComponent => class extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    },
    this.update = this.update.bind(this);
  }

  render() {
    return <InnerComponent update={this.update} {...this.state} {...this.props} />
  }
}
};
const Button = (props) => {
  return (
    <button onClick={props.update}>{props.txt} - {props.val}</button>
  );
}

let ButtonMixed = Mixin(Button);
```

###### Composable/Reusable Components

```javascript
//Define your component dynamically as below
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
```

###### Dynamically Generated Components
Note: each child should have unique "key" prop (check Dynamic.js)

```javascript
return <PersonRow key={person.id} data={person} />;
```

###### Build jsx transpiler
-- Notice: By the time I try this, seem like babel-cor 6.x version does not make "babel" global object. So this experiment still use 5.x

-- Note: react not support if statement too well

The following snippet code can be experiment in .jsx transform code that I am writing
```jsx
const App = (props) => {
  return (
    <div>
      <a href="#" notrender="x" onClick={update}>{ /* comment */ }this is the text
      {i>1 ? 'More than one' : 'one'}
      {i>1 && 'More than one'}
      </a>
    </div>
  );
}
```

```javascript

"use strict";

var App = function App(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "a",
      { href: "#", notrender: "x", onClick: update },
      "this is the text",
      i > 1 ? 'More than one' : 'one',
      i > 1 && 'More than one'
    )
  );
};
/* comment */
```

###### Pre-compile JSX
Use babel-cli
```
sudo npm i babel-cli -g
```

Transform command
```
babel --presets react src.js -o dist.js --watch
```

If your component is simple, React.createElement() will work, as thing get more complicated, using JSX is recommended

* React developer tool (Chrome add-on)

###### How to handle tenary (if;else)
```
author={comment.added_by != null ? comment.added_by.username : 'Anonymous'}
```

```javascript
var CommentList = React.createClass({
  var commentNodes = this.props.comments.map(function(comment) {
    return (<Comment blurb={comment.blurb} author={comment.added_by != null ? comment.added_by.username : 'Anonymous'}></Comment>);
  });

  return (
    <div className="commentList">{commentNodes}</div>
  );
})

```

###### How to style inline element
```javascript
render: function() {
  var inlineStyle = {color: "pink", fontSize: "32px"};
  return (
    <div className="commentBox">
      <h1 style={inlineStyle}>Comment</h1>
      <CommentList comments={this.state.comments} />
    </div>
  );
}

```

###### Handle routing
```
import { Router, Route, Link, browserHistory } from 'react-router'
```

```javascript
<Route path="/" component={Layout}>
  <Route path="archives:article" name="archive" component={Article} />
</Route>

//In archive component
console.log(this.props); ==> give you this.props.params and this.props.location.query
```

```javascripts
var React = require('React');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
  </Route>
);

//Rendering in Main
<div className="container">
  {this.props.children} //contains content of your route
</div>
```

###### class in React
Javascript preserved word "class", therefore we will need to use "className". We could use class in reactJs if we are using **"react-html-attrs"**, which ill transform class to className in React code

###### Flux
Pattern to building React component

* Components -> Actions -> Dispatcher -> Stores -> Components

* Store will only react to the component it care about

```
Dispatcher.dispatch({
  type: "CREATE_TODO",
  title: "Somce title"
});

Dispatcher.dispatch({
  type: "DELETE_TODO",
  id: 4124
});
```

* Actions – Helper methods that facilitate passing data to the Dispatcher
* Dispatcher – Receives actions and broadcasts payloads to registered callbacks
* Stores – Containers for application state & logic that have callbacks registered to the dispatcher
* Controller Views – React Components that grab the state from Stores and pass it down via props to child components.

It is important to register key when you have to manage mutiple dispatcher and store

###### Components
Need to maintain relationship between parent and children components


