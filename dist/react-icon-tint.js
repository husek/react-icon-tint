var ReactIconTint =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconTint = function (_Component) {
	  _inherits(IconTint, _Component);

	  function IconTint() {
	    _classCallCheck(this, IconTint);

	    return _possibleConstructorReturn(this, (IconTint.__proto__ || Object.getPrototypeOf(IconTint)).apply(this, arguments));
	  }

	  _createClass(IconTint, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      var _props = this.props;
	      var src = _props.src;
	      var color = _props.color;
	      var customRef = _props.customRef;
	      var width = _props.width;
	      var height = _props.height;

	      var canvas = this.refs[customRef || '_IconTint'];
	      var pic = new Image();
	      pic.src = src;
	      var tintCanvas = document.createElement('canvas');
	      var tintCtx = tintCanvas.getContext('2d');
	      var ctx = canvas.getContext('2d');
	      pic.onload = function () {
	        var result = _this2._scaleImage(pic.width, pic.height, width, height);
	        tintCanvas.width = result.width;
	        tintCanvas.height = result.height;
	        tintCtx.fillStyle = color;
	        tintCtx.fillRect(0, 0, result.width, result.height);
	        tintCtx.globalCompositeOperation = 'destination-atop';
	        tintCtx.drawImage(pic, 0, 0, result.width, result.height);
	        ctx.globalAlpha = 1;
	        ctx.drawImage(tintCanvas, 0, 0, result.width, result.height);
	      };
	    }
	  }, {
	    key: '_scaleImage',
	    value: function _scaleImage(srcWidth, srcHeight, maxWidth, maxHeight) {
	      var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
	      return { width: srcWidth * ratio, height: srcHeight * ratio };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var src = _props2.src;
	      var color = _props2.color;
	      var customRef = _props2.customRef;
	      var width = _props2.width;
	      var height = _props2.height;

	      return _react2.default.createElement('canvas', { width: width, height: height, ref: customRef || '_IconTint' });
	    }
	  }]);

	  return IconTint;
	}(_react.Component);

	exports.default = IconTint;


	IconTint.propTypes = {
	  src: _react.PropTypes.string.isRequired,
	  color: _react.PropTypes.string.isRequired,
	  customRef: _react.PropTypes.string,
	  width: _react.PropTypes.string,
	  height: _react.PropTypes.string
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ }
/******/ ]);