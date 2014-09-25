

/** @jsx React.DOM */
var React = require('react');


module.exports = React.createClass({


  /**
   * The spatial data.
   */
  render: function() {
    return (
      <div className="form-group">

        <label>{this.props.label}</label>

        <textarea
          className="form-control"
          onInput={this.onInput} />

      </div>
    );
  },


  /**
   * Apply the new value.
   *
   * @param {Object} event
   */
  onInput: function(event) {
    this.props.value.set(event.target.value);
  }


});
