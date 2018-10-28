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

var EafFurnace = function (_Component) {
  _inherits(EafFurnace, _Component);

  function EafFurnace() {
    _classCallCheck(this, EafFurnace);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  EafFurnace.prototype.render = function render() {
    return _react2.default.createElement(
      "svg",
      { width: this.props.size, version: "1.1", viewBox: this.props.viewBox },
      _react2.default.createElement("path", {
        id: this.props.id,
        transform: this.props.transform,
        fill: this.props.color,
        opacity: this.props.opacity,
        d: "m20.99 278.1v4 200 4h4.02 450 4v-4-200-4h-4-25-4v4 171h-392c0.04 0 0.04-171 0.04-171v-4h-4.03-25-4.02m8.05 8h16.95v171 4h4.02 400 4v-4-171h17v192h-442c0.04 0 0.04-192 0.04-192m69.76-183l-1.05 0.7-75 49.9-1.76 1.3v2.1 100 4h4.02 108.2 4v-4-150-4h-4-33.2-1.2m2.4 8h27.9v142h-100.1c0.04 0 0.04-93.9 0.04-93.9l72.16-48.1m122.6-8v4l1.3 149.9 0.1 3.9h3.9c15.1 0 30.1 0.1 45.2 0.2h4.1v-4-150-4h-4.1-46.4-4.1m8.1 8h38.4v142c-12.4-0.1-24.8-0.2-37.2-0.2l-1.2-141.8m133-8l0.1 4 1.3 149.9v3.9h4c34.9 0.2 69.8 0.2 104.7 0.2h4v-4-75-1.6l-1.1-1.3-75-74.9-1.2-1.2h-1.7-31-4.1m8.2 8h25.3l72.6 72.6v69.4c-32.3 0-64.5 0-96.7-0.2l-1.2-141.8m-228.1-97.22h72.2v368.6s-14.2 28.1-37.1 29.6c-19.7 1.3-35.1-29.6-35.1-29.6v-368.6m141.9 1.14h72.2v368.7s-14.3 28.1-37.2 29.6c-19.6 1.3-35-29.6-35-29.6v-368.7m-132.5 396.1s-44.2-59.2-44.2-59.2l-5.4 30.1s-36.57-54.9-36.57-54.9 8.61 98 8.61 98l10.77-39.8 20.49 33.3 9.7-32.3 36.6 24.8m197.1-0.5s44.1-59.3 44.1-59.3l5.4 30.2 36.6-54.9s-8.6 98-8.6 98l-10.8-39.9s-20.4 33.4-20.4 33.4l-9.7-32.3-36.6 24.8"
      })
    );
  };

  return EafFurnace;
}(_react.Component);

EafFurnace.defaultProps = {
  id: "EafFurnace",
  color: "#666666",
  size: 50,
  opacity: 1,
  viewBox: "0 0 500 500"
};

EafFurnace.propTypes = process.env.NODE_ENV !== "production" ? {
  id: _propTypes2.default.string.isRequired,
  color: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.number.isRequired,
  opacity: _propTypes2.default.number.isRequired,
  transform: _propTypes2.default.string,
  viewBox: _propTypes2.default.string
} : {};

exports.default = EafFurnace;
module.exports = exports["default"];