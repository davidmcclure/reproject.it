

/** @jsx React.DOM */
var React = require('react');


module.exports = React.createClass({


  /**
   * The projection definition.
   */
  render: function() {
    return (
      <div className="form-group">

        <label>{this.props.label}</label>

        <textarea
          className="form-control"
          value={this.props.value.getValue()}
          onChange={this.onChange} />

      </div>
    );
  },


  /**
   * Apply the new value.
   *
   * @param {Object} event
   */
  onChange: function(event) {
    this.props.value.set(event.target.value);
  }


});
