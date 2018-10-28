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

var Mudgun = function (_Component) {
  _inherits(Mudgun, _Component);

  function Mudgun() {
    _classCallCheck(this, Mudgun);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Mudgun.prototype.render = function render() {
    return _react2.default.createElement(
      "svg",
      { width: this.props.size, version: "1.1", viewBox: "0 0 500 500" },
      _react2.default.createElement("path", {
        id: this.props.id,
        fill: this.props.color,
        opacity: this.props.opacity,
        d: "m238.4 199.2s-19.5 0-19.5 13.6 19.5 13.6 19.5 13.6h77.6s19.4 0 19.4-13.6-19.4-13.6-19.4-13.6h-77.6m54.7 3.4h25.5s12.8 0 12.8 10-12.8 10-12.8 10h-25.5c0.7-7.3 0.7-10.3 0-20m-251.4 71.7v-19.4h19.75l16.82-15.8h271.1l-1.6 64.4h-227.1l-59.23-29.2h-19.75m104.4-114.7c-2.6 0-5 2.4-5 5v15.1h-25.1c-1.3 0-2.6 0.5-3.5 1.5l-58.81 58.8h-28.06c-2.63 0-5.02 2.3-5.02 5v40.1h-0.03l5.05 5.1h28.94l59.23 29.6c0.7 0.3 1.4 0.5 2.2 0.5h25.1v15.1c0 2.6 2.4 5 5 5h50.3c2.6 0 5-2.4 5-5v-15.1h140.6v15.1c0 2.6 2.4 5 5 5h50.2c2.6 0 5-2.4 5-5v-15.1h45.2c2.6 0 5-2.4 5-5v-50.2h27v-30.2h-27v-50.2c0-2.6-2.4-5-5-5h-45.2v-15.1c0-2.6-2.4-5-5-5h-50.2c-2.6 0-5 2.4-5 5v15.1h-140.6v-15.1c0-2.6-2.4-5-5-5h-50.3m5.1 10.1h40.1v15c0 2.7 2.4 5 5.1 5h150.6c2.6 0 5-2.3 5-5v-15h40.2v15c0 2.7 2.4 5 5 5h45.2v45.2h-53.4v-40.1h-30.1v110.4h30.1v-40.1h53.4v45.2h-45.2c-2.6 0-5 2.3-5 5v15h-40.2v-15c0-2.7-2.4-5-5-5h-150.6c-2.7 0-5.1 2.3-5.1 5v15h-40.1v-15c0-2.7-2.4-5-5.1-5h-28.9l-59.18-29.6c-0.7-0.4-1.48-0.6-2.26-0.6h-25.11v-30.1h25.11c1.31 0 2.62-0.5 3.55-1.5 0 0 58.79-58.8 58.79-58.8h28c2.7 0 5.1-2.3 5.1-5v-15"
      })
    );
  };

  return Mudgun;
}(_react.Component);

Mudgun.defaultProps = {
  id: "mudgun",
  color: "#666666",
  size: 50,
  opacity: 1
};

Mudgun.propTypes = process.env.NODE_ENV !== "production" ? {
  id: _propTypes2.default.string.isRequired,
  color: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.number.isRequired,
  opacity: _propTypes2.default.number.isRequired
} : {};

exports.default = Mudgun;
module.exports = exports["default"];