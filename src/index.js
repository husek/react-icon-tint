import React, {
  memo,
  useEffect,
  useRef,
  useState
} from 'react';
import PropTypes from 'prop-types';

const IconTint = memo(({
   fallback = <span />,
   src,
   color,
   maxWidth,
   maxHeight
 }) => {
  const canvasRef = useRef(null);
  const [size, setSize] = useState({});

  const _scaleImage = (srcWidth, srcHeight, maxWidth, maxHeight) => {
    if (maxWidth && maxHeight) {
      const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
      return { width: srcWidth * ratio, height: srcHeight * ratio };
    }
    if ((maxWidth && !maxHeight) || (!maxWidth && maxHeight)) {
      throw new Error('If you are going to provide width, make sure to provide height as well');
    }
    return { width: srcWidth, height: srcHeight };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    // eslint-disable-next-line no-undef
    const pic = new Image();
    pic.src = src;
    const tintCanvas = document.createElement('canvas');
    const tintCtx = tintCanvas.getContext('2d');
    const ctx = canvas.getContext('2d');
    pic.onload = () => {
      const result = _scaleImage(pic.width, pic.height, maxWidth, maxHeight);
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
    return (<canvas width={size.width} height={size.height} ref={canvasRef} />);
  }
  return fallback;
});

IconTint.propTypes = {
  src: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  fallback: PropTypes.node,
  maxWidth: PropTypes.number,
  maxHeight: PropTypes.number
};

export default IconTint;
