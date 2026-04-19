import { useEffect } from 'react';
import { X, AlertCircle, CheckCircle, Info } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
  onClose: () => void;
}

export default function Toast({ message, type = 'info', duration = 3000, onClose }: ToastProps) {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const icons = {
    success: <CheckCircle size={20} />,
    error: <AlertCircle size={20} />,
    info: <Info size={20} />
  };

  const colors = {
    success: '#10b981',
    error: '#ef4444',
    info: '#3b82f6'
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 9999,
        background: 'var(--panel-bg)',
        border: `2px solid ${colors[type]}`,
        borderRadius: '12px',
        padding: '16px 20px',
        boxShadow: 'var(--shadow-lg)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        minWidth: '300px',
        maxWidth: '500px',
        animation: 'slideIn 0.3s ease-out'
      }}
    >
      <div style={{ color: colors[type], flexShrink: 0 }}>
        {icons[type]}
      </div>
      <div style={{ flex: 1, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
        {message}
      </div>
      <button
        onClick={onClose}
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--text-secondary)',
          padding: '4px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <X size={18} />
      </button>
    </div>
  );
}
