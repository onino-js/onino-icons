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

var MainRunnerTop = function (_Component) {
  _inherits(MainRunnerTop, _Component);

  function MainRunnerTop() {
    _classCallCheck(this, MainRunnerTop);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  MainRunnerTop.prototype.render = function render() {
    return _react2.default.createElement(
      "svg",
      { width: this.props.size, version: "1.1", viewBox: "0 0 500 500" },
      _react2.default.createElement("path", {
        id: this.props.id + "casing",
        d: "m192.3 5.563l-0.6 1.232-56.4 112.6-0.2 0.5v0.6 371.7 2.2h2.3 56.3 2.2v-2.2-360.5c0-12.4 7.1-26.1 17.6-36.51 10.4-10.44 24.1-17.53 36.5-17.53s26.1 7.09 36.5 17.53c10.5 10.41 17.6 24.11 17.6 36.51v360.5 2.2h2.2 56.3 2.3v-2.2-371.7-0.6l-0.2-0.5-56.4-112.6c0-0.005-0.6-1.237-0.6-1.237h-1.4-112.6-1.4",
        fillRule: "evenodd",
        stroke: this.props.color,
        strokeWidth: "10",
        fill: "none"
      }),
      _react2.default.createElement("path", {
        id: this.props.id + "poutre",
        d: "m134.2 120.1v374.7h63.3v-374.7h-63.3m168.3 0v374.7h63.3v-374.7h-63.3",
        stroke: "none",
        strokeWidth: "10",
        fill: this.props.type === "poutre" ? this.props.color : "none"
      }),
      _react2.default.createElement("path", {
        id: this.props.id + "skimmer",
        d: "m202.7 341.8h94.6v55.9h-94.6v-55.9",
        stroke: this.props.color,
        strokeWidth: "10",
        fill: "none"
      }),
      _react2.default.createElement("path", {
        id: this.props.id + "after-skimmer",
        d: "m202.7 404.2h94.6v89.7h-94.6v-89.7",
        stroke: "none",
        strokeWidth: "10",
        fill: this.props.type === "after-skimmer" ? this.props.color : "none"
      }),
      _react2.default.createElement("path", {
        id: this.props.id + "before-skimmer",
        d: "m202.7 245.7h94.6v89.7h-94.6v-89.7",
        stroke: "none",
        strokeWdth: "10",
        fill: this.props.type === "before-skimmer" ? this.props.color : "none"
      }),
      _react2.default.createElement("path", {
        id: this.props.id + "impact",
        d: "m300.7 135.3c0 13.4-5.4 26.3-14.9 35.8s-22.4 14.8-35.8 14.8-26.3-5.3-35.8-14.8-14.9-22.4-14.9-35.8c0-13.5 5.4-26.4 14.9-35.89 9.5-9.51 22.4-14.85 35.8-14.85s26.3 5.34 35.8 14.85c9.5 9.49 14.9 22.39 14.9 35.89",
        stroke: "none",
        strokeWdth: "10",
        fill: this.props.type === "impact" ? this.props.color : "none"
      })
    );
  };

  return MainRunnerTop;
}(_react.Component);

MainRunnerTop.defaultProps = {
  id: "MainRunnerTop",
  color: "#666666",
  size: 50,
  opacity: 1
};

MainRunnerTop.propTypes = process.env.NODE_ENV !== "production" ? {
  id: _propTypes2.default.string.isRequired,
  color: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.number.isRequired,
  opacity: _propTypes2.default.number.isRequired,
  type: _propTypes2.default.string
} : {};

exports.default = MainRunnerTop;
module.exports = exports["default"];