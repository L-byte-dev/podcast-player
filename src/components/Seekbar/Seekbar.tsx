import React from 'react';
import styles from './Seekbar.module.css';

type Props = {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
};

const Seekbar = ({ currentTime, duration, onSeek }: Props) => {
  const percent = duration ? (currentTime / duration) * 100 : 0;

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const newTime = (clickPosition / rect.width) * duration;
    onSeek(newTime);
  };

  return (
    <div
      className={styles.timeline}
      onClick={handleClick}
      style={{
        '--progress-position': `${percent}%`,
      } as React.CSSProperties}
    >
      <div className={styles.thumbIndicator} />
    </div>
  );
};

export default Seekbar;
