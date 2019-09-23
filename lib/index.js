'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconTint = (0, _react.memo)(function (_ref) {
  var _ref$fallback = _ref.fallback,
      fallback = _ref$fallback === undefined ? _react2.default.createElement('span', null) : _ref$fallback,
      src = _ref.src,
      color = _ref.color,
      maxWidth = _ref.maxWidth,
      maxHeight = _ref.maxHeight;

  var canvasRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      size = _useState2[0],
      setSize = _useState2[1];

  var _scaleImage = function _scaleImage(srcWidth, srcHeight, maxWidth, maxHeight) {
    if (maxWidth && maxHeight) {
      var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
      return { width: srcWidth * ratio, height: srcHeight * ratio };
    }
    if (maxWidth && !maxHeight || !maxWidth && maxHeight) {
      throw new Error('If you are going to provide width, make sure to provide height as well');
    }
    return { width: srcWidth, height: srcHeight };
  };

  (0, _react.useEffect)(function () {
    var canvas = canvasRef.current;
    // eslint-disable-next-line no-undef
    var pic = new Image();
    pic.src = src;
    var tintCanvas = document.createElement('canvas');
    var tintCtx = tintCanvas.getContext('2d');
    var ctx = canvas.getContext('2d');
    pic.onload = function () {
      var result = _scaleImage(pic.width, pic.height, maxWidth, maxHeight);
      setSize(result);
      tintCanvas.width = result.width;
      tintCanvas.height = result.height;
      tintCtx.fillStyle = color;
      tintCtx.fillRect(0, 0, result.width, result.height);
      tintCtx.globalCompositeOperation = 'destination-atop';
      tintCtx.drawImage(pic, 0, 0, result.width, result.height);
      ctx.globalAlpha = 1;
      ctx.drawImage(tintCanvas, 0, 0, result.width, result.height);
    };
  }, []);

  if (typeof window !== 'undefined' && window.document && window.document.createElement) {
    return _react2.default.createElement('canvas', { width: size.width, height: size.height, ref: canvasRef });
  }
  return fallback;
});

IconTint.propTypes = {
  src: _propTypes2.default.string.isRequired,
  color: _propTypes2.default.string.isRequired,
  fallback: _propTypes2.default.node,
  maxWidth: _propTypes2.default.string,
  maxHeight: _propTypes2.default.string
};

exports.default = IconTint;