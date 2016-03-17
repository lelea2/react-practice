var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos')
var UserProfile = require('./Github/UserProfile')
var Notes = require('./Notes/Notes');
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');

var Profile = React.createClass({

  mixins: [ReactFireMixin],

  getInitialState: function() {
    return {
      notes: [1,2,3],
      bio: {
        name: 'Tyler McGinnis'
      },
      repos: ['a', 'b', 'c']
    }
  },

  //Call after your component mount the view
  //Handle ajax call, firebase call here
  componentDidMount: function() {
    this.ref = new Firebase('https://github-notetaker-khanh.firebaseio.com/');
    //console.log(this.ref);
    var childRef = this.ref.child(this.props.params.username);
    this.bindAsArray(childRef, 'notes');
  },

  componentWillUnMount: function() {
    this.unbind('notes');
  },

  render: function(){
    //console.log(this.props)
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes username={this.props.params.username} notes={this.state.notes} />
        </div>
      </div>
    )
  }
})

module.exports = Profile;
