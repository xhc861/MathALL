import { useState } from 'react';
import { X, RotateCw, ZoomIn, ZoomOut } from 'lucide-react';

interface ImageViewerProps {
  imageUrl: string;
  onClose: () => void;
}

export default function ImageViewer({ imageUrl, onClose }: ImageViewerProps) {
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  console.log('ImageViewer rendered with imageUrl:', imageUrl);

  const handleRotate = (e: React.MouseEvent) => {
    e.stopPropagation();
    setRotation((prev) => (prev + 90) % 360);
  };

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div
      className="image-viewer-overlay"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.95)',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'fadeIn 0.2s ease-out',
        pointerEvents: 'auto'
      }}
    >
      <div
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          display: 'flex',
          gap: '12px',
          background: 'rgba(0, 0, 0, 0.7)',
          padding: '8px 12px',
          borderRadius: '8px',
          backdropFilter: 'blur(10px)',
          zIndex: 100002
        }}
      >
        <button
          onClick={handleZoomOut}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            padding: '6px',
            display: 'flex',
            alignItems: 'center'
          }}
          title="缩小"
        >
          <ZoomOut size={20} />
        </button>
        <button
          onClick={handleZoomIn}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            padding: '6px',
            display: 'flex',
            alignItems: 'center'
          }}
          title="放大"
        >
          <ZoomIn size={20} />
        </button>
        <button
          onClick={handleRotate}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            padding: '6px',
            display: 'flex',
            alignItems: 'center'
          }}
          title="旋转"
        >
          <RotateCw size={20} />
        </button>
        <button
          onClick={handleClose}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            padding: '6px',
            display: 'flex',
            alignItems: 'center'
          }}
          title="关闭"
        >
          <X size={20} />
        </button>
      </div>

      <img
        src={imageUrl}
        alt="查看图片"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '90vw',
          maxHeight: '90vh',
          objectFit: 'contain',
          transform: `rotate(${rotation}deg) scale(${scale})`,
          transition: 'transform 0.3s ease',
          borderRadius: '8px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          cursor: 'move'
        }}
      />
    </div>
  );
}
