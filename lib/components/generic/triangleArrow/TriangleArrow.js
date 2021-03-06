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

var TriangleArrow = function (_Component) {
  _inherits(TriangleArrow, _Component);

  function TriangleArrow() {
    _classCallCheck(this, TriangleArrow);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  TriangleArrow.prototype.render = function render() {
    return _react2.default.createElement(
      "svg",
      { width: this.props.size, version: "1.1", viewBox: "0 0 500 500" },
      _react2.default.createElement("circle", {
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
      _react2.default.createElement("path", {
        id: "path4148",
        opacity: this.props.opacity,
        transform: "rotate(" + this.props.rotation.toString() + " 250 250)",
        fill: this.props.color,
        d: "m110 280l140-100 140 100h-280"
      })
    );
  };

  return TriangleArrow;
}(_react.Component);

TriangleArrow.defaultProps = {
  color: "#666666",
  size: 50,
  opacity: 1,
  rotation: 0
};

TriangleArrow.propTypes = process.env.NODE_ENV !== "production" ? {
  id: _propTypes2.default.string,
  color: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.number.isRequired,
  opacity: _propTypes2.default.number.isRequired,
  rotation: _propTypes2.default.number.isRequired
} : {};

exports.default = TriangleArrow;
module.exports = exports["default"];