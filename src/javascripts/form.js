

/** @jsx React.DOM */
var React = require('react');
var Cortex = require('cortexjs');
var Format = require('./input-format');
var Projection = require('./input-proj');
var Data = require('./input-data');


module.exports = React.createClass({


  /**
   * The source and target form inputs.
   */
  render: function() {
    return (
      <div className="forms">

        <form className="input">

          <Format
            label="Input Format"
            value={this.props.fields.input.format} />

          <Projection
            label="Input Projection"
            value={this.props.fields.input.projection} />

          <Data
            label="Input Data"
            value={this.props.fields.input.data} />

        </form>

        <hr />

        <form className="output">

          <Format
            label="Output Format"
            value={this.props.fields.output.format} />

          <Projection
            label="Output Projection"
            value={this.props.fields.output.projection} />

          <Data
            label="Output Data"
            value={this.props.fields.output.data} />

        </form>

        <button
          className="btn btn-lg btn-primary"
          onClick={this.onReproject}>
          Reproject!
        </button>

      </div>
    );
  },


  /**
   * When the "Reproject!" button is clicked.
   */
  onReproject: function() {
    console.log(this.props.fields.getValue());
  }


});
