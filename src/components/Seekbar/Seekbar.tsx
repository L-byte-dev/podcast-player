import React from 'react';
import styles from './Seekbar.module.css';

type Props = {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
};

function Seekbar({ currentTime, duration, onSeek }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    onSeek(newValue);
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <input
      type="range"
      className={styles.seekbar}
      min="0"
      max={duration || 0}
      value={currentTime}
      onChange={handleChange}
      style={{ '--seekbar-progress': `${progress}%` } as React.CSSProperties}
    />
  );
}

export default Seekbar;
