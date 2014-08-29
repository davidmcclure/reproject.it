

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
          name={this.props.prefix+"-data"}
          className="form-control" />

      </div>
    );
  }


});
