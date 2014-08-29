

/** @jsx React.DOM */
var React = require('react');
var $ = require('jquery');
var Form = require('./form');


// TODO|dev
var ReprojectIt = React.createClass({
  render: function() {
    return <Form prefix="source" />;
  }
});


// TODO|dev
React.renderComponent(
  <ReprojectIt />,
  document.getElementById('primary')
);
