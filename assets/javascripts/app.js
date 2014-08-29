

/** @jsx React.DOM */
var React = require('react');
var $ = require('jquery');
var Form = require('./form');


var ReprojectIt = React.createClass({
  render: function() {
    return <Form prefix="source" />;
  }
});


$(function() {
  React.renderComponent(
    <ReprojectIt />,
    document.getElementById('reproject')
  );
});
