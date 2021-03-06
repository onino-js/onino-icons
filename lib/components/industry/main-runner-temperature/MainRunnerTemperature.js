"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainRunnerTemperature = function (_Component) {
  _inherits(MainRunnerTemperature, _Component);

  function MainRunnerTemperature() {
    _classCallCheck(this, MainRunnerTemperature);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  MainRunnerTemperature.prototype.render = function render() {
    return _react2.default.createElement(
      "svg",
      { width: this.props.size, version: "1.1", viewBox: "0 0 500 500" },
      _react2.default.createElement("path", {
        id: this.props.id,
        fill: this.props.color,
        opacity: this.props.opacity,
        d: "m282.9 401.2c50.1-9.6 83.2-58.2 73.6-108.4-0.7-3.9-4.5-6.5-8.5-5.7-3.9 0.7-6.5 4.5-5.7 8.5 8.1 42.3-19.8 83.3-62.2 91.3-1.9 0.4-3.6 1.5-4.6 3.1-1 1.5-1.5 3.4-1.1 5.4 0.7 3.9 4.5 6.5 8.5 5.8m-22.8-83c-4.4-3-5.5-9-2.5-13.4 3-4.5 9-5.6 13.4-2.6s5.5 9 2.5 13.4-9 5.5-13.4 2.6m41.6-14.9c-0.7-4-4.5-6.5-8.5-5.8-3.9 0.7-6.5 4.5-5.7 8.5 2.3 12.1-5.7 23.8-17.8 26.1-2 0.4-3.6 1.5-4.6 3-1.1 1.6-1.5 3.5-1.1 5.5 0.7 3.9 4.5 6.5 8.4 5.7 20-3.7 33.1-23.1 29.3-43m27.2-5.2c-0.8-3.9-4.5-6.5-8.5-5.8-3.9 0.8-6.5 4.6-5.7 8.5 5.1 27.1-12.7 53.4-39.8 58.5-2 0.4-3.6 1.5-4.7 3-1 1.6-1.5 3.5-1.1 5.5 0.8 3.9 4.6 6.5 8.5 5.7 34.9-6.6 58-40.5 51.3-75.4m120.4 102.9v-174.9c0-16.6-12.7-29.2-29.2-29.2s-29.1 13.6-29.1 29.2v174.8c-11.7 8.8-19.4 23.4-19.4 38.9 0 27.2 21.3 48.6 48.5 48.6s48.6-21.4 48.6-48.6c0-15.5-7.8-30.1-19.4-38.8m-29.2 77.7c-21.4 0-38.8-17.4-38.8-38.8 0-14.6 7.7-27.2 19.4-34v-179.8c0-10.7 8.7-19.5 19.4-19.5s19.4 8.8 19.4 19.5v179.7c11.7 6.8 19.4 19.4 19.4 34 0.1 21.4-17.4 38.9-38.8 38.9m9.7-66.1v-1.9-97.2c0-5.8-3.8-9.7-9.7-9.7-5.8 0-9.7 4.9-9.7 9.7v97.2 1.9c-11.7 3.9-19.4 14.6-19.4 27.2 0 16.5 12.7 29.1 29.2 29.1s29.1-12.6 29.1-29.1c0-12.6-7.8-23.3-19.5-27.2m-123.9-401c1.9 0.38 3.4 2.13 3.3 4.14v164.2c0 0.7-0.1 1.3-0.4 1.9l-136.9 273.7c-0.7 1.4-2.2 2.3-3.7 2.3h-136.9c-0.01 0-0.01-8.3-0.01-8.3h134.3l135.4-270.7v-159c0-0.02-5.5-0.02-5.5-0.02v64.27 0.45 95.4c0 0.7-0.1 1.3-0.4 1.9l-123.2 246.3c-0.2 0.4-0.5 0.8-0.8 1.1l-13.7 13.7c-0.8 0.8-1.8 1.2-2.9 1.2h-27.1-96.11v-8.3h91.61v-87.5h-91.61v-8.3h93.31l80.5-161.1v-94.85c0-2.28 1.9-4.13 4.1-4.13h78.1v-60.14h-169.7v91.62c1.4 55.8-19.98 84.9-41.93 99.3-21.97 14.4-44.38 14.4-44.38 14.4v-8.3s20.04 0 39.86-13c19.81-13 39.55-38.6 38.15-92.2v-0.2-95.75c0-2.28 1.9-4.14 4.2-4.14h177.9 0.4 13.3 0.4 0.4m-18.6 76.67h-73.9v91.72c0 0.7-0.2 1.3-0.5 1.9l-81.7 163.5v90.5h21.6l12-12 122.5-245v-90.62"
      })
    );
  };

  return MainRunnerTemperature;
}(_react.Component);

MainRunnerTemperature.defaultProps = {
  id: "MainRunnerTemperature",
  color: "#666666",
  size: 50,
  opacity: 1
};

MainRunnerTemperature.propTypes = process.env.NODE_ENV !== "production" ? {
  id: _propTypes2.default.string.isRequired,
  color: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.number.isRequired,
  opacity: _propTypes2.default.number.isRequired
} : {};

exports.default = MainRunnerTemperature;
module.exports = exports["default"];