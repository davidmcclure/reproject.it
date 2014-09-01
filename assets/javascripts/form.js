

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

          <Format
            label="Source Format"
            prefix="s"
            onInput={this.onInput} />

          <Projection
            label="Source Projection"
            prefix="s"
            onInput={this.onInput} />

          <Data
            label="Source Data"
            prefix="s"
            onInput={this.onInput} />

        </form>

        <hr />

        <form className="target">

          <Format
            label="Target Format"
            prefix="t"
            onInput={this.onInput} />

          <Projection
            label="Target Projection"
            prefix="t"
            onInput={this.onInput} />

          <Data
            label="Target Data"
            prefix="t"
            onInput={this.onInput} />

        </form>

        <button className="btn btn-lg btn-primary">
          Reproject!
        </button>

      </div>
    );
  },


  /**
   * When fields are changed.
   *
   * @param {Object} event
   */
  onInput: function(event) {
    console.log('form change', event);
  }


});
