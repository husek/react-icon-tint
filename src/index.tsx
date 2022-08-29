import React, {
  memo,
  ReactElement,
  useEffect,
  useRef,
  useState
} from 'react';

interface IconTintProps {
  fallback?: ReactElement;
  src: string;
  color: string;
  maxWidth?: number;
  maxHeight?: number;
}

interface DimensionsI {
  width: number;
  height: number;
}

const IconTint: React.FunctionComponent<IconTintProps> = ({
  fallback = <span />,
  src,
  color,
  maxWidth,
  maxHeight,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [size, setSize] = useState<DimensionsI>({
    width: 100,
    height: 100,
  });

  const _scaleImage = (srcWidth, srcHeight, maxWidth, maxHeight): DimensionsI => {
    if ((maxWidth && !maxHeight) || (!maxWidth && maxHeight)) throw new Error('If you are going to provide width, make sure to provide height as well');

    if (!maxWidth && !maxHeight) return { width: srcWidth, height: srcHeight }
    const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
    return { width: srcWidth * ratio, height: srcHeight * ratio };
  }

  useEffect(() => {
    const { current: canvas } = canvasRef;
    const pic = new Image();
    pic.src = src;
    const tintCanvas = document.createElement('canvas');
    const tintCtx = tintCanvas.getContext('2d');
    const ctx = canvas.getContext('2d');
    pic.onload = () => {
      const { width, height } = _scaleImage(pic.width, pic.height, maxWidth, maxHeight);
      setSize({ width, height });

      // Clear previous render
      tintCtx.clearRect(0, 0, width, height);
      ctx.clearRect(0, 0, width, height);

      tintCanvas.width = width;
      tintCanvas.height = height;
      tintCtx.fillStyle = color;
      tintCtx.fillRect(0, 0, width, height);
      tintCtx.globalCompositeOperation = 'destination-atop';
      tintCtx.drawImage(pic, 0, 0, width, height);
      ctx.globalAlpha = 1;
      ctx.drawImage(tintCanvas, 0, 0, width, height);
    };
  }, [src, color, maxWidth, maxHeight, canvasRef?.current]);

  if (typeof window !== 'undefined' && window.document && window.document.createElement) {
    return <canvas width={size.width} height={size.height} ref={canvasRef} {...props} />;
  }
  return fallback;
};


export default memo(IconTint);
