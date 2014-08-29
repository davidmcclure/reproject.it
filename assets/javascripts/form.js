

/** @jsx React.DOM */
var React = require('react');


module.exports = React.createClass({


  /**
   * Render the conversion form.
   */
  render: function() {
    return (

      <form className={this.props.prefix}>

        <div className="form-group">

          <label>Source Format</label>

          <select
            name={this.props.prefix+"-format"}
            className="form-control">

            <option value="gml">GML</option>
            <option value="gpx">GPX</option>
            <option value="geojson">GeoJSON</option>
            <option value="igc">IGC</option>
            <option value="kml">KML</option>
            <option value="osmxml">OSMXML</option>
            <option value="topojson">Topojson</option>
            <option value="wfs">WFS</option>
            <option value="wkt">WKT</option>

          </select>

        </div>

      </form>

    );
  }


});
