

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

          <Format
            label="Input Format"
            prefix="i"
            onInput={this.onInput} />

          <Projection
            label="Input Projection"
            prefix="i"
            onInput={this.onInput} />

          <Data
            label="Input Data"
            prefix="i"
            onInput={this.onInput} />

        </form>

        <hr />

        <form className="output">

          <Format
            label="Output Format"
            prefix="o"
            onInput={this.onInput} />

          <Projection
            label="Output Projection"
            prefix="o"
            onInput={this.onInput} />

          <Data
            label="Output Data"
            prefix="o"
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
