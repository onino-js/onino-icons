function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";

var VibratingCast = function (_Component) {
  _inherits(VibratingCast, _Component);

  function VibratingCast() {
    _classCallCheck(this, VibratingCast);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  VibratingCast.prototype.render = function render() {
    return React.createElement(
      "svg",
      { width: this.props.size, version: "1.1", viewBox: "0 0 500 500" },
      React.createElement("path", {
        id: this.props.id,
        fill: this.props.color,
        opacity: this.props.opacity,
        d: "m365.7 123.2c-0.8 0.1-1.5 0.9-1.5 1.7v23.2c0 1 0.8 1.8 1.7 1.8h35.4c0.9 0 1.8-0.8 1.8-1.8v-23.2c0-0.9-0.9-1.7-1.8-1.7h-35.4-0.2m2 3.5h31.9v19.7h-31.9v-19.7m-13.7 19.7c-0.9 0.1-1.6 0.9-1.6 1.7v23.2c0 1 0.8 1.8 1.7 1.8h59c0.9 0 1.8-0.8 1.8-1.8v-23.2c0-0.9-0.9-1.7-1.8-1.7h-59-0.1m1.9 3.5h55.4v19.7h-55.4v-19.7m8.3 19.7v1.7 116 0.2 0.2s1.1 4.8 3.2 10.2c2 5.3 4.9 11.4 9.4 14.1 4 2.5 9.6 2.5 13.6 0 4.6-2.7 7.4-8.8 9.5-14.1 2-5.4 3.2-10.2 3.2-10.2v-0.2-0.2-116-1.7h-1.8-35.4-1.7m3.5 3.5h31.9v113.9c-0.1 0.2-1.1 4.6-3 9.6-2 5.1-5 10.7-8 12.5-2.7 1.6-7.3 1.6-9.9 0-3-1.8-6-7.4-8-12.5-2-5-3-9.4-3-9.6v-113.9m9.9-51.2s2.5-50.08 31.6-78.7c29.4-28.92 84.4-37.25 84.4-37.25v11.6s-48.1 6.79-74 31.93c-29.4 28.56-30.4 72.42-30.4 72.42h-11.6m-359.3-91.7l-11.6 11.6c-0.003 0 48.01 65.9 58 104.4 9.69 37.4 0 69.6-11.6 104.4-3.67 11-23.2 11.6-23.2 11.6l92.83 185.6 11.6 23.2h208.8l11.6-23.2 92.8-185.6h-34.8-9.9v23.2 0.2 0.2s-1.1 4.7-3.2 10.1c-2 5.4-4.8 11.4-9.2 14.2-4 2.4-9.5 2.4-13.5 0-4.4-2.8-7.2-8.8-9.2-14.2-2.1-5.4-3.1-10.1-3.1-10.1l-0.1-0.2v-0.2-23.2h-33s-11.6 81.2-92.8 81.2-92.8-81.2-92.8-81.2-46.44 7.7-46.44-11.6c0-34.8-1.27-78.7-11.6-116-12.03-43.46-69.59-104.4-69.59-104.4m398 234.1h0.3c0.5 0.1 0.8 0.3 0.9 0.6s0 0.6-0.3 0.8l-6.9 5 6.9 4.9c0.5 0.4 0.5 0.9 0 1.2l-6.9 5 6.9 4.9c0.5 0.4 0.5 0.9 0 1.2l-6.9 5 6.9 4.9c0.2 0.2 0.4 0.4 0.4 0.6s-0.2 0.5-0.4 0.6l-7.7 5.6c-0.5 0.3-1.2 0.3-1.7-0.1-0.4-0.3-0.4-0.8 0-1.1l7-5-7-4.9c-0.2-0.2-0.3-0.4-0.3-0.6 0-0.3 0.1-0.5 0.3-0.6l7-5-7-5c-0.4-0.3-0.4-0.8 0-1.1l7-5-7-4.9c-0.4-0.4-0.4-0.9 0-1.2l7.8-5.6c0.2-0.1 0.4-0.2 0.7-0.2m-67.3 0.6c0.4-0.1 0.7 0 1 0.2l7.7 5.6c0.3 0.1 0.4 0.3 0.4 0.6 0 0.2-0.1 0.4-0.4 0.6l-6.9 4.9 6.9 5c0.5 0.3 0.5 0.8 0 1.2l-6.9 4.9 6.9 5c0.5 0.3 0.5 0.8 0 1.2l-6.9 4.9 6.9 5c0.3 0.2 0.5 0.5 0.3 0.8-0.1 0.3-0.4 0.5-0.8 0.6s-0.8 0-1.1-0.2l-7.8-5.6c-0.2-0.1-0.3-0.3-0.3-0.6 0-0.2 0.1-0.4 0.3-0.6l6.9-4.9-6.9-5c-0.4-0.3-0.4-0.8 0-1.2l6.9-4.9-6.9-5c-0.4-0.3-0.4-0.8 0-1.1l6.9-5-6.9-5c-0.3-0.2-0.4-0.5-0.3-0.8s0.5-0.5 0.9-0.6h0.1m-193.3-120.4v1.7 116c0 34.5 35.7 71.3 83 71.3s82.9-36.8 82.9-71.3v-116-1.7h-1.7-162.4-1.8m3.5 3.4h158.9v114.3c0 32-34 67.8-79.4 67.8-45.5 0-79.5-35.8-79.5-67.8v-114.3m-152.5 114.3l116 232h232l116-232v-116h-11.6v116l-104.4 208.8-11.6 11.6h-208.8l-11.6-11.6-104.4-208.8c-0.03 0-0.03-116-0.03-116h-11.6c-0.003 0-0.003 116-0.003 116"
      })
    );
  };

  return VibratingCast;
}(Component);

VibratingCast.defaultProps = {
  id: "VibratingCast",
  color: "#666666",
  size: 50,
  opacity: 1
};

VibratingCast.propTypes = process.env.NODE_ENV !== "production" ? {
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired
} : {};

export default VibratingCast;