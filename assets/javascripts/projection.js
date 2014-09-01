

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
          name={this.props.prefix+"-projection"}
          className="form-control"
          onInput={this.props.onInput} />

      </div>
    );
  }


});
