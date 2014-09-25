

/** @jsx React.DOM */
var React = require('react');
var $ = require('jquery');
var Cortex = require('cortexjs');
var Form = require('./form');


var data = new Cortex({
  input: {
    format: 'kml',
    projection: null,
    data: null
  },
  output: {
    format: 'wkt',
    projection: null,
    data: null
  }
});


// Startup.
$(function() {
  React.renderComponent(
    <Form fields={data} />,
    document.getElementById('primary')
  );
});
