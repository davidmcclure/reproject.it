

/** @jsx React.DOM */
var React = require('react');
var $ = require('jquery');
var Cortex = require('cortexjs');
var Form = require('./form');


// Form fields.
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


// Root component.
var app = React.renderComponent(
  <Form fields={data} />,
  document.getElementById('primary')
);

data.on('update', function(updated) {
  app.setProps({ fields: updated });
});
