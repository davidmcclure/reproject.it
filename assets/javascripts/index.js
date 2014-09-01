

/** @jsx React.DOM */
var React = require('react');
var $ = require('jquery');
var Form = require('./form');


// Application.
var ReprojectIt = React.createClass({
  render: function() {
    return (
      <div id="reproject">
        <Form />
      </div>
    );
  }
});


// Startup.
$(function() {
  React.renderComponent(
    <ReprojectIt />,
    document.getElementById('primary')
  );
});
