

/** @jsx React.DOM */
var React = require('react');
var $ = require('jquery');
var Form = require('./form');
var ol = require('ol');

console.log(ol);


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
