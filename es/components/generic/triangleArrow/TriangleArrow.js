function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";

var TriangleArrow = function (_Component) {
  _inherits(TriangleArrow, _Component);

  function TriangleArrow() {
    _classCallCheck(this, TriangleArrow);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  TriangleArrow.prototype.render = function render() {
    return React.createElement(
      "svg",
      { width: this.props.size, version: "1.1", viewBox: "0 0 500 500" },
      React.createElement("circle", {
        id: "path4138",
        strokeLinejoin: "round",
        opacity: this.props.opacity,
        strokeWidth: "40",
        strokeLinecap: "round",
        stroke: this.props.color,
        cy: "250",
        cx: "250",
        r: "211",
        fill: "none"
      }),
      React.createElement("path", {
        id: "path4148",
        opacity: this.props.opacity,
        transform: "rotate(" + this.props.rotation.toString() + " 250 250)",
        fill: this.props.color,
        d: "m110 280l140-100 140 100h-280"
      })
    );
  };

  return TriangleArrow;
}(Component);

TriangleArrow.defaultProps = {
  color: "#666666",
  size: 50,
  opacity: 1,
  rotation: 0
};

TriangleArrow.propTypes = process.env.NODE_ENV !== "production" ? {
  id: PropTypes.string,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
  rotation: PropTypes.number.isRequired
} : {};

export default TriangleArrow;