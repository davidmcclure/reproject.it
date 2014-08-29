

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

        <form className="source">
          <Format prefix="s" label="Source Format" />
          <Projection prefix="s" label="Source Projection" />
          <Data prefix="s" label="Source Data" />
        </form>

        <hr />

        <form className="target">
          <Format prefix="t" label="Target Format" />
          <Projection prefix="t" label="Target Projection" />
          <Data prefix="t" label="Target Data" />
        </form>

      </div>
    );
  }


});
