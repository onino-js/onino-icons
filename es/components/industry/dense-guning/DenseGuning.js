function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";

var DenseGuning = function (_Component) {
  _inherits(DenseGuning, _Component);

  function DenseGuning() {
    _classCallCheck(this, DenseGuning);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  DenseGuning.prototype.render = function render() {
    return React.createElement(
      "svg",
      { width: this.props.size, version: "1.1", viewBox: "0 0 500 500" },
      React.createElement("path", {
        id: this.props.id,
        fill: this.props.color,
        opacity: this.props.opacity,
        d: "m175.3 172.7c-3.1 3.6-11.7 1.3-19.1-5.2-7.5-6.4-11-14.6-7.9-18.2 3.1-3.5 11.7-1.2 19.1 5.2 7.5 6.5 11 14.6 7.9 18.2m-48.1 99.1c10.1-2.2 19-0.4 20 4 0.9 4.5-6.4 9.8-16.5 12-10 2.2-19 0.4-19.9-4-1-4.5 6.4-9.8 16.4-12m274.1-47.3h84.8v37.1h-84.8v-37.1m-146.9-15.3c0 3-2.9 5.4-6.5 5.4s-6.5-2.4-6.5-5.4c0-2.9 2.9-5.3 6.5-5.3s6.5 2.4 6.5 5.3m-111.7-9.4c-1.6 2.2-5.2 2.2-8.2 0.1s-4.1-5.5-2.6-7.7c1.6-2.2 5.3-2.3 8.2-0.2 3 2.1 4.1 5.6 2.6 7.8m3.4 108.6c1.5 3.2-2.4 8.1-8.8 11.1-6.3 2.9-12.6 2.7-14-0.5-1.5-3.1 2.4-8.1 8.7-11s12.6-2.7 14.1 0.4m26.6-72.5c-5.4 2.4-14.2-1.6-19.7-8.9-5.5-7.4-5.7-15.2-0.3-17.6s14.2 1.7 19.7 9 5.7 15.2 0.3 17.5m82.8 32.3c1.9 3.8-1.6 9.4-7.8 12.4-6.1 3-12.7 2.3-14.6-1.6s1.6-9.5 7.8-12.5 12.7-2.2 14.6 1.7m-22.9 37.7c0 2.9-3.3 5.3-7.2 5.3-4 0-7.3-2.4-7.3-5.3 0-3 3.3-5.3 7.3-5.3 3.9 0 7.2 2.3 7.2 5.3m48-68.9s-8.1 0.7-12.1 0c-12.6-2-25-6.2-36.3-12.1-17.9-9.4-30.4-45.3-48.4-36.3-24.2 12.1 12.1 30.4 12.1 48.4 0 24.2-31.7 2.8-36.3 12.1-7.6 15.4 11.8 43.1 24.2 48.4 10.5 4.5 18.8-1.2 24.2-12.1 12.9-25.5 27.9-35.7 60.5-36.3h12.1v-12.1m24.3 12.1h-12.1v-12.1h12.1v12.1m98.6-38.4l-2 0.3-82.7 11.8v-10-1.8h-1.8-12.1-1.9v1.8 60.5 1.8h1.9 12.1 1.8v-1.8-10l82.7 11.8 2 0.3v-2.1-60.5-2.1m-96.8 3.9h8.5v10.3 2.1l2-0.3 82.7-11.8v56.3l-82.7-11.8-2-0.3v2.1 10.3h-8.5v-56.9m-268.6-207.2h48.43s24.24 90.91 24.24 108.9c0 27.1-16.47 46-12.14 72.7 4.54 28.2 13.24 31.8 12.14 48.4-1.5 21.7-23.49 34.9-24.24 60.6-0.88 29.9 23.44 63.5 24.24 96.8 0.5 20.6 4.5 39.2-12.14 60.5-16.64 21.4-60.53 36.4-60.53 36.4v-302.7-181.6m-24.22-0.013v484.3h12.11v-484.3c0-0.013-12.11-0.013-12.11-0.013"
      })
    );
  };

  return DenseGuning;
}(Component);

DenseGuning.defaultProps = {
  id: "DenseGuning",
  color: "#666666",
  size: 50,
  opacity: 1
};

DenseGuning.propTypes = process.env.NODE_ENV !== "production" ? {
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired
} : {};

export default DenseGuning;