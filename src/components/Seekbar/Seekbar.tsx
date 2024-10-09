import React, { useState, useRef } from 'react';
import styles from './Seekbar.module.css';

type Props = {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
};

const Seekbar = ({ currentTime, duration, onSeek }: Props) => {
  const [isDragging, setIsDragging] = useState(false);
  const seekbarRef = useRef<HTMLDivElement | null>(null);
  const percent = duration ? (currentTime / duration) * 100 : 0;

  const handleSeek = (clientX: number) => {
    if (!seekbarRef.current) return;
    const rect = seekbarRef.current.getBoundingClientRect();
    const clickPosition = clientX - rect.left;
    const newTime = Math.max(0, Math.min(clickPosition / rect.width, 1)) * duration;
    onSeek(newTime);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    handleSeek(e.clientX);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsDragging(true);
    handleSeek(e.clientX); 
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      handleSeek(e.clientX); 
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false); 
  };

  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={seekbarRef}
      className={styles.timeline}
      onClick={handleClick}
      onMouseDown={handleMouseDown} 
      style={{
        '--progress-position': `${percent}%`,
      } as React.CSSProperties}
    >
      <div
        className={styles.thumbIndicator}
        onMouseDown={handleMouseDown}
      />
    </div>
  );
};

export default Seekbar;
