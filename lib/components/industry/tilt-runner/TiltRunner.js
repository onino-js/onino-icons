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

var TiltRunner = function (_Component) {
  _inherits(TiltRunner, _Component);

  function TiltRunner() {
    _classCallCheck(this, TiltRunner);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  TiltRunner.prototype.render = function render() {
    return _react2.default.createElement(
      "svg",
      { width: this.props.size, version: "1.1", viewBox: "0 0 500 500" },
      _react2.default.createElement("path", {
        id: this.props.id,
        fill: this.props.color,
        opacity: this.props.opacity,
        d: "m188 5.85l-1.1 1.541-84.2 120.3-0.6 0.9v1.1 60.2h-32.51v120.2h32.51v60.2 1.1l0.6 0.9 84.2 120.3 1.1 1.5h1.9 33.6 53 33.6 1.9l1.1-1.5 84.2-120.3 0.6-0.9v-1.1-60.2h32.5v-120.2h-32.5v-60.2-1.1l-0.6-0.9-84.2-120.3c0-0.009-1.1-1.55-1.1-1.55h-1.9-21.4-65.2-33.6-1.9m3.7 7.22h28.9l-46.1 115.3s-0.3 0.7-0.3 0.7v0.6 240.6 0.6s0.3 0.7 0.3 0.7l46.1 115.3h-28.9l-82.4-117.8v-238.2l82.4-117.8v-0.03m36.7 0h55l35.2 117.2v239.3l-47 117.3h-43.2l-47-117.3v-239.2l47-117.3v-0.03m62.5 0h17.4l82.4 117.8v238.2l-82.4 117.8h-28.9l46.1-115.3s0.3-0.7 0.3-0.7v-0.6-240.6-0.5l-0.2-0.5-34.7-115.6v-0.03"
      })
    );
  };

  return TiltRunner;
}(_react.Component);

TiltRunner.defaultProps = {
  id: "TiltRunner",
  color: "#666666",
  size: 50,
  opacity: 1
};

TiltRunner.propTypes = process.env.NODE_ENV !== "production" ? {
  id: _propTypes2.default.string.isRequired,
  color: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.number.isRequired,
  opacity: _propTypes2.default.number.isRequired
} : {};

exports.default = TiltRunner;
module.exports = exports["default"];