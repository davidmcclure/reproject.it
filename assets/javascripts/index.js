

/** @jsx React.DOM */
var React = require('react');
var $ = require('jquery');
var Form = require('./form');


// Application.
var ReprojectIt = React.createClass({
  render: function() {
    return <Form />;
  }
});


// Startup.
$(function() {
  React.renderComponent(
    <ReprojectIt />,
    document.getElementById('primary')
  );
});
