function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";

var CameraIr = function (_Component) {
  _inherits(CameraIr, _Component);

  function CameraIr() {
    _classCallCheck(this, CameraIr);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  CameraIr.prototype.render = function render() {
    return React.createElement(
      "svg",
      { width: this.props.size, version: "1.1", viewBox: "0 0 500 500" },
      React.createElement("path", {
        id: this.props.id,
        fill: this.props.color,
        opacity: this.props.opacity,
        d: "m145.3 98.45c0-0.46-0.1-0.93-0.2-1.38-0.1-0.46-0.2-0.91-0.3-1.36-0.2-0.44-0.3-0.88-0.5-1.31s-0.4-0.86-0.6-1.27c-0.2-0.4-0.4-0.8-0.7-1.19s-0.5-0.77-0.8-1.12c-0.3-0.36-0.7-0.72-1-1.05s-0.7-0.65-1-0.94c-0.4-0.29-0.8-0.57-1.1-0.83-0.4-0.25-0.8-0.5-1.2-0.72-0.5-0.22-0.9-0.42-1.3-0.59-0.4-0.18-0.9-0.34-1.3-0.47-0.5-0.14-0.9-0.25-1.4-0.34-0.4-0.09-0.9-0.17-1.4-0.21-0.9-0.1-1.8-0.1-2.8 0-0.4 0.04-0.9 0.12-1.3 0.21-0.5 0.09-1 0.2-1.4 0.34-0.4 0.13-0.9 0.29-1.3 0.47-0.4 0.17-0.9 0.37-1.3 0.59s-0.8 0.47-1.2 0.72c-0.4 0.26-0.7 0.54-1.1 0.83s-0.7 0.61-1 0.94c-0.4 0.33-0.7 0.69-1 1.05-0.3 0.35-0.5 0.73-0.8 1.12s-0.5 0.79-0.7 1.19c-0.2 0.41-0.4 0.84-0.6 1.27s-0.3 0.87-0.5 1.31c-0.1 0.45-0.2 0.9-0.3 1.36-0.1 0.45-0.2 0.92-0.2 1.38-0.1 0.46-0.1 0.94-0.1 1.4 0 0.45 0 0.95 0.1 1.35 0 0.5 0.1 1 0.2 1.4 0.1 0.5 0.2 0.9 0.3 1.4 0.2 0.4 0.3 0.9 0.5 1.3s0.4 0.8 0.6 1.3c0.2 0.4 0.4 0.8 0.7 1.2 0.3 0.3 0.5 0.7 0.8 1.1 0.3 0.3 0.6 0.7 1 1 0.3 0.4 0.6 0.7 1 1s0.7 0.5 1.1 0.8 0.8 0.5 1.2 0.7 0.9 0.4 1.3 0.6 0.9 0.3 1.3 0.5c0.4 0.1 0.9 0.2 1.4 0.3 0.4 0.1 0.9 0.2 1.3 0.2 0.5 0.1 1 0.1 1.4 0.1 0.5 0 1 0 1.4-0.1 0.5 0 1-0.1 1.4-0.2 0.5-0.1 0.9-0.2 1.4-0.3 0.4-0.2 0.9-0.3 1.3-0.5l1.2-0.6c0.5-0.2 0.9-0.4 1.3-0.7 0.3-0.3 0.7-0.5 1.1-0.8 0.3-0.3 0.7-0.6 1-1l1-1c0.3-0.4 0.5-0.8 0.8-1.1 0.2-0.4 0.5-0.8 0.7-1.2 0.2-0.5 0.4-0.9 0.6-1.3s0.3-0.9 0.5-1.3c0.1-0.5 0.2-0.9 0.3-1.4 0.1-0.4 0.2-0.9 0.2-1.4 0.1-0.4 0.1-0.9 0.1-1.35 0-0.46 0-0.94-0.1-1.4m324.3-14.75h-32l3.6-12.32c1.8-6.04 0.7-12.66-3.1-17.71s-9.8-8.07-16.1-8.07h-327.9c-11.03 0-20.03 9-20.03 20.07v148.4c0 11 9 20 20.06 20h76.87s-29.4 83.1-29.4 83.1c-1.8 1.1-3.4 2.3-5 3.6h-102.2c-15.13 0-27.43 12.2-27.43 27.4 0.003 0 0.003 33.5 0.003 33.5 0 15.1 12.3 27.4 27.41 27.4h103.4c9.4 7.1 21 11.3 33.7 11.3 30.8 0 55.9-25.1 55.9-55.9 0-6.1-0.9-11.9-2.7-17.3l40-113.1h113.2c8.9 0 16.8-5.9 19.3-14.3l6.5-21.9h1.6 64.3c12.9 0 23.4-10.4 23.4-23.3v-67.5c0-12.92-10.5-23.4-23.4-23.4m-434.1 296.9v-31.3h82.12c-1.4 4.8-2.1 9.9-2.1 15.2 0 5.6 0.8 11 2.4 16.1h-82.42m136 11.3c-15.2 0-27.5-12.3-27.5-27.4 0-15.2 12.3-27.5 27.5-27.5 15.1 0 27.4 12.3 27.4 27.5 0 15.1-12.3 27.4-27.4 27.4m32.9-72.7c-8.4-6.1-18.6-9.9-29.6-10.6l26.4-74.5h33.3s-30.1 85.1-30.1 85.1m167.3-113.6h-96.9-93.8-78.4v-131.5c0 0.01 308.1 0.01 308.1 0.01l-39 131.5m92.8-36.2h-52.4l17-57.2h35.4v57.2m-5.3 240.5v-144c0-13.6-10.4-24-24-24s-24 11.2-24 24v144c-9.7 7.2-16 19.2-16 32 0 22.4 17.6 40 40 40s40-17.6 40-40c0-12.8-6.4-24.8-16-32m-24 64c-17.6 0-32-14.4-32-32 0-12 6.4-22.4 15.9-28v-148c0-8.8 7.2-16 16-16s16 7.2 16 16v148c9.6 5.6 16 16 16 28 0.1 17.6-14.3 32-31.9 32m8-54.4v-1.6-80c0-4.8-3.2-8-8-8s-8 4-8 8v80 1.6c-9.6 3.2-16 12-16 22.3 0 13.6 10.4 24.1 24 24.1s24-10.5 24-24.1c0-10.3-6.4-19.1-16-22.3"
      })
    );
  };

  return CameraIr;
}(Component);

CameraIr.defaultProps = {
  id: "CameraIr",
  color: "#666666",
  size: 50,
  opacity: 1
};

CameraIr.propTypes = process.env.NODE_ENV !== "production" ? {
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired
} : {};

export default CameraIr;