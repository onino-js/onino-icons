function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";

var WorkSite = function (_Component) {
  _inherits(WorkSite, _Component);

  function WorkSite() {
    _classCallCheck(this, WorkSite);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  WorkSite.prototype.render = function render() {
    return React.createElement(
      "svg",
      { width: this.props.size, version: "1.1", viewBox: "0 0 500 500" },
      React.createElement("path", {
        id: this.props.id,
        fill: this.props.color,
        opacity: this.props.opacity,
        d: "m463.2 338.6s-12.9 20.5-23.9 44.4c-16.8-91.6-61.5-106-61.5-106s-11.3 14.3-25.1 35.6l-68.4-33.4c0.9-5.5-0.3-11.6-4.7-17-26.8-32.9-32.4-80.1-54.3-116.2-0.9-1.4-1.8-2.7-2.9-3.8-8.5-16.2-28.5-24.6-45.5-21.4-55.1-15.6-102.8-0.6-128 53.8-10.93 23.6 23.16 44.3 35.11 22.4l44.59 21.7c-5.9 15.2-12.6 30.1-20.3 44.7-27.5 45-62.71 85.3-97.17 125.1-17.43 20.1 11.82 49.5 29.35 29.3 28.17-32.5 56.92-65.5 82.02-100.8 2.6 1.7 5.3 3.1 8.2 4.1 1.8 1.3 3.9 2.5 6.3 3.3 18.3 6 34.6 15.9 49.7 27.6-10.4 24.6-20.5 49.4-36.7 70.8-16.1 21.4 20 42 35.9 20.9 19.8-26.2 30.5-57.7 43.8-87.4 3.6-8.1 4.3-18.6-3.3-25.1-14.9-12.9-30.6-24.3-47.7-33.5 7.5-14.6 14.3-29.5 20.5-44.6l37.3 18.2c4 7 8.5 13.8 13.7 20.2 8.7 10.7 20.7 8 27.9 0.1l67.2 32.7c-19.8 32.4-41.3 75.6-41.3 110.5h120.1s70 0.8 70 0.8c-3.2-29.3-30.9-97-30.9-97m-329.8-132.9l-43.23-21.1c6.2-11.4 14.23-21.9 26.83-26.7 9.9-3.8 20.5-3.5 30.9-1.7-4 16.9-8.8 33.3-14.5 49.5m70.8 34.5c2.9-7.8 5.6-15.6 8.2-23.5 4.4 11.5 8.8 23 13.8 34.2l-22-10.7m-26.7-157.8c0 19.11 15.4 34.51 34.6 34.51 17.2 0 31.5-12.7 34.1-29.18l23.1 6.45s1.8-6.65 1.8-6.65-17.8-4.99-17.8-4.99c2.1-19.29-10-37.83-29.3-43.24-21.6-6.02-44 6.54-50 28.03l6.1 1.71c-1.7 4.11-2.6 8.62-2.6 13.36"
      })
    );
  };

  return WorkSite;
}(Component);

WorkSite.defaultProps = {
  id: "WorkSite",
  color: "#666666",
  size: 50,
  opacity: 1
};

WorkSite.propTypes = process.env.NODE_ENV !== "production" ? {
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired
} : {};

export default WorkSite;