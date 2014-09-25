

/** @jsx React.DOM */
var React = require('react');
var Format = require('./format');
var Projection = require('./projection');
var Data = require('./data');


module.exports = React.createClass({


  /**
   * The source and target form inputs.
   */
  render: function() {
    return (
      <div className="forms">

        <form className="input">
          <Format label="Input Format" prefix="i" />
          <Projection label="Input Projection" prefix="i" />
          <Data label="Input Data" prefix="i" />
        </form>

        <hr />

        <form className="output">
          <Format label="Output Format" prefix="o" />
          <Projection label="Output Projection" prefix="o" />
          <Data label="Output Data" prefix="o" />
        </form>

        <button className="btn btn-lg btn-primary">
          Reproject!
        </button>

      </div>
    );
  }


});
