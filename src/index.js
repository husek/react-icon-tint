import React, { Component, PropTypes } from 'react';

export default class IconTint extends Component {
  componentDidMount() {
    const { src, color, customRef, width, height } = this.props;
    const canvas = this.refs[customRef || '_IconTint'];
    const pic = new Image();
    pic.src = src;
    const tintCanvas = document.createElement('canvas');
    const tintCtx = tintCanvas.getContext('2d');
    const ctx = canvas.getContext('2d');
    pic.onload = () => {
      const result = this._scaleImage(pic.width, pic.height, width, height);
      tintCanvas.width = result.width;
      tintCanvas.height = result.height;
      tintCtx.fillStyle = color;
      tintCtx.fillRect(0, 0, result.width, result.height);
      tintCtx.globalCompositeOperation = 'destination-atop';
      tintCtx.drawImage(pic, 0, 0, result.width, result.height);
      ctx.globalAlpha = 1;
      ctx.drawImage(tintCanvas, 0, 0, result.width, result.height);
    };
  };

  _scaleImage(srcWidth, srcHeight, maxWidth, maxHeight) {
    const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
    return { width: srcWidth * ratio, height: srcHeight * ratio };
  };

  render() {
    const { src, color, customRef, width, height } = this.props;
    return (
      <canvas width={width} height={height} ref={customRef || '_IconTint'} />
    );
  }
}

IconTint.propTypes = {
  src: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  customRef: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};
