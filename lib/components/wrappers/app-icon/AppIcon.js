"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppButton = function (_Component) {
  _inherits(AppButton, _Component);

  function AppButton(props) {
    _classCallCheck(this, AppButton);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.attr = {
      fill: props.fill || "none",
      size: _this.props.size - _this.props.size * 0.3
    };
    _this.state = {
      color: _this.props.color,
      boxStrokeColor: _this.props.boxStrokeColor,
      boxFill: _this.props.boxFill
    };
    return _this;
  }

  AppButton.prototype.componentDidMount = function componentDidMount() {};

  AppButton.prototype.mouseOver = function mouseOver(e) {
    this.setState({
      color: this.props.hoverColor,
      boxStrokeColor: this.props.hoverBoxStrokeColor,
      boxFill: this.props.hoverBoxFill
    });
  };

  AppButton.prototype.mouseOut = function mouseOut(e) {
    this.setState({
      color: this.props.color,
      boxStrokeColor: this.props.boxStrokeColor,
      boxFill: this.props.boxFill
    });
  };

  AppButton.prototype.render = function render() {
    var _this2 = this;

    var Wrapped = this.props.icon;
    return _react2.default.createElement(
      "div",
      {
        id: "svg2",
        style: {
          height: this.props.size,
          width: this.props.size,
          cursor: "pointer",
          position: "relative"
        },
        onMouseOver: function onMouseOver(e) {
          return _this2.mouseOver(e);
        },
        onMouseOut: function onMouseOut(e) {
          return _this2.mouseOut(e);
        },
        onClick: this.props.onClick
      },
      this.props.showBox ? _react2.default.createElement(
        "svg",
        { viewBox: "0 0 500 500" },
        _react2.default.createElement("path", {
          id: "contour",
          d: "M 30,30 C 40.000001,20.000002 176.36425,9.9999999 249.99999,9.9999996 323.63573,9.9999993 459.99998,19.999999 470,30 480,39.999981 489.99998,176.36425 489.99998,249.99999 489.99998,323.63573 480.00002,460.00002 470,470 459.99998,479.99998 323.63573,489.99998 249.99999,489.99998 176.36425,489.99998 39.999981,480 30,470 19.999999,459.99998 9.9999993,323.63573 9.9999996,249.99999 9.9999999,176.36425 19.999999,39.999998 30,30 z",
          fill: this.state.boxFill,
          stroke: this.state.boxStrokeColor,
          strokeWidth: "20px"
        })
      ) : _react2.default.createElement("path", null),
      _react2.default.createElement(
        "div",
        {
          style: {
            height: this.props.size,
            width: this.props.size,
            position: "absolute",
            top: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }
        },
        _react2.default.createElement(Wrapped, _extends({}, this.attr, { color: this.state.color }))
      )
    );
  };

  return AppButton;
}(_react.Component);

AppButton.defaultProps = {
  size: 50,
  showBox: true,
  color: "#666666",
  boxStrokeColor: "#666666",
  boxFill: "#FFFFFF",
  hoverColor: "#000000",
  hoverBoxFill: "#FFFFFF",
  hoverBoxStrokeColor: "#000000"
};
AppButton.propTypes = process.env.NODE_ENV !== "production" ? {
  showBox: _propTypes2.default.bool.isRequired,
  hoverColor: _propTypes2.default.string.isRequired,
  hoverBoxStrokeColor: _propTypes2.default.string.isRequired,
  hoverBoxFill: _propTypes2.default.string.isRequired,
  boxFill: _propTypes2.default.string.isRequired,
  boxStrokeColor: _propTypes2.default.string.isRequired,
  color: _propTypes2.default.string.isRequired,
  onClick: _propTypes2.default.func
} : {};

exports.default = AppButton;
module.exports = exports["default"];