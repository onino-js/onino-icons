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

var Tamping = function (_Component) {
  _inherits(Tamping, _Component);

  function Tamping() {
    _classCallCheck(this, Tamping);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Tamping.prototype.render = function render() {
    return _react2.default.createElement(
      "svg",
      { width: this.props.size, version: "1.1", viewBox: "0 0 500 500" },
      _react2.default.createElement("path", {
        id: this.props.id,
        fill: this.props.color,
        opacity: this.props.opacity,
        d: "m188.1 34.08c-2.1-0.03-4.1 1.11-5.2 2.98s-1.1 4.19 0 6.06 3.1 3.01 5.2 2.98h58.3v66.1h-46.2v96.1h10.2v84.2h-10.2v12h10.2v30h-43.8l-22.3-22.2c-1.1-1.2-2.7-1.9-4.3-1.9-2.5 0-4.7 1.5-5.6 3.8s-0.3 4.9 1.4 6.6l24.1 24c1.1 1.1 2.6 1.8 4.2 1.8h180.3c1.6 0 3.1-0.7 4.2-1.8l24.1-24c1.6-1.5 2.3-3.8 1.8-6-0.6-2.1-2.3-3.8-4.4-4.3-2.2-0.6-4.4 0.1-5.9 1.8l-22.3 22.2h-43.8v-30h10.2v-12h-10.2v-84.2h10.2v-96.1h-46.2v-66.1h58.2c2.2 0.03 4.2-1.11 5.3-2.98s1.1-4.19 0-6.06-3.1-3.01-5.3-2.98h-132.2m61.9 12.02h8.5v66.1h-8.5v-66.1m-36 162.2h8.4v84.2h-8.4v-84.2m12 0h20.4v84.2h-20.4v-84.2m24 0h8.5v84.2h-8.5v-84.2m12.1 0h20.4v84.2h-20.4v-84.2m24 0h8.4v84.2h-8.4v-84.2m-72.1 96.2h8.4v30h-8.4v-30m12 0h20.4v30h-20.4v-30m24 0h8.5v30h-8.5v-30m12.1 0h20.4v30h-20.4v-30m24 0h8.4v30h-8.4v-30m136.3 12.2c-1.2 0-2.5 0-3.8 0.2-12.5 2.1-24.5 14.6-33.9 26.3-8.5 10.7-14.1 20.1-15.1 21.8h-237.2c-0.6-2.5-2.8-11.8-8.1-22.6-2.9-6.1-6.8-12.3-11.6-17.1-4.9-4.9-11-8.3-18.15-8.4-10.99-0.2-17.27 6.7-22.05 12.8-2.38 3.1-4.53 6-6.76 8.1-2.22 2-4.35 3.1-7.28 3.1-2.96 0-5.59-1.1-8.26-3.2-2.68-2-5.3-4.9-8-7.9-5.4-5.9-11.2-12.7-19.72-12.9-5.98-0.2-10.28 3.7-12.58 8.7-2.304 5-3.164 11.2-3.422 17.4-0.503 12.1 1.408 23.8 1.503 24.4 0 0-0.001 0 0 0v96.1 2.4h2.399 480.7 2.4v-2.4-96-0.1c0-0.2 0.7-14.6-2.1-25.5-0.7-2.7-1.7-5.3-3.1-7.4-1.3-2-3.3-3.8-5.8-4.2-2.6-0.5-5.3 0.3-8.1 2.3-2.6 1.7-5.3 4.5-8.4 8.3-3.5 0.4-6.8-0.6-10.2-2.6-3.6-2.2-7.4-5.4-11.2-8.8s-7.6-6.8-11.9-9.3c-3.2-1.9-6.6-3.3-10.3-3.5m-3 5c3.7-0.6 7.2 0.5 10.9 2.6 3.6 2.2 7.4 5.5 11.2 8.8 3.8 3.4 7.6 6.9 11.9 9.4 4.2 2.5 8.9 4 14.1 3.2l0.9-0.2s0.6-0.7 0.6-0.7c3.2-4.2 5.9-6.8 8.1-8.3 2.1-1.4 3.5-1.7 4.5-1.5 0.9 0.2 1.8 0.8 2.7 2.2s1.8 3.5 2.4 5.9c2.6 9.7 2 24.2 2 24.2v0.1 93.7h-475.9c-0.01 0-0.01-93.7-0.01-93.7v-0.2l-0.04-0.2s-1.95-12-1.46-23.8c0.24-5.9 1.13-11.6 2.96-15.6s4.04-6 8.08-5.9c5.92 0.2 10.93 5.4 16.34 11.4 2.7 3 5.45 6 8.63 8.4 3.19 2.4 6.89 4.2 11.16 4.2 4.28 0 7.75-1.9 10.51-4.4 2.77-2.5 5.01-5.7 7.33-8.6 4.63-6 9.14-11.1 18.18-11 5.62 0.1 10.52 2.7 14.82 7 4.3 4.2 7.9 10 10.7 15.8 5.7 11.7 8.2 23.4 8.2 23.4l0.4 1.9h2 240.3 1.4l0.7-1.2s6.4-11 15.5-22.4 21.1-22.9 30.9-24.5"
      })
    );
  };

  return Tamping;
}(_react.Component);

Tamping.defaultProps = {
  id: "Tamping",
  color: "#666666",
  size: 50,
  opacity: 1
};

Tamping.propTypes = process.env.NODE_ENV !== "production" ? {
  id: _propTypes2.default.string.isRequired,
  color: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.number.isRequired,
  opacity: _propTypes2.default.number.isRequired
} : {};

exports.default = Tamping;
module.exports = exports["default"];