import React, { Component } from "react";
import PropTypes from "prop-types";

class TriangleArrow extends Component {
  render() {
    return (
      <svg width={this.props.size} version="1.1" viewBox="0 0 500 500">
        <circle
          id="path4138"
          strokeLinejoin="round"
          opacity={this.props.opacity}
          strokeWidth="40"
          strokeLinecap="round"
          stroke={this.props.color}
          cy="250"
          cx="250"
          r="211"
          fill="none"
        />
        <path
          id="path4148"
          opacity={this.props.opacity}
          transform={`rotate(${this.props.rotation.toString()} 250 250)`}
          fill={this.props.color}
          d="m110 280l140-100 140 100h-280"
        />
      </svg>
    );
  }
}

TriangleArrow.defaultProps = {
  color: "#666666",
  size: 50,
  opacity: 1,
  rotation: 0,
};

TriangleArrow.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
  rotation: PropTypes.number.isRequired,
};

export default TriangleArrow;
