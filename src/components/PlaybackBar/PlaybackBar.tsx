import { useRef, useState, useEffect } from 'react';
import styles from './PlaybackBar.module.css';
import Seekbar from '../Seekbar/Seekbar';
import LikeDislikeControls from '../LikeDislikeControls/LikeDislikeControls';
import PlaybackBarControls from '../PlaybackBarControls/PlaybackBarControls';
import PlaybackBarCard from '../PlaybackBarCard/PlaybackBarCard';
import { Podcast } from '../../Types';

type Props = {
  currentPodcast: Podcast;
  isPlaying: boolean;
  togglePlayPause: () => void;
};

function PlaybackBar({ currentPodcast, isPlaying, togglePlayPause }: Props) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
  
    useEffect(() => {
      const audioElement = audioRef.current;
    
      if (audioElement) {
        setCurrentTime(0);
        setDuration(0);
    
        const updateTime = () => setCurrentTime(audioElement.currentTime);
        const updateDuration = () => setDuration(audioElement.duration);
    
        audioElement.addEventListener('timeupdate', updateTime);
        audioElement.addEventListener('loadedmetadata', updateDuration);
    
        return () => {
          audioElement.removeEventListener('timeupdate', updateTime);
          audioElement.removeEventListener('loadedmetadata', updateDuration);
        };
      }
    }, [currentPodcast]); 
    
  
    useEffect(() => {
      const audioElement = audioRef.current;
  
      if (audioElement) {
        if (isPlaying) {
          audioElement.play();
        } else {
          audioElement.pause();
        }
      }
    }, [isPlaying]);
  
    useEffect(() => {
      const audioElement = audioRef.current;
  
      if (audioElement) {
        audioElement.pause(); 
        audioElement.currentTime = 0; 
        setCurrentTime(0); 
  
        if (isPlaying) {
          audioElement.play();
        }
      }
    }, [currentPodcast]);

    const onSeek = (time: number) => {
      const audioElement = audioRef.current;
      if (audioElement) {
        audioElement.currentTime = time;
        setCurrentTime(time); 
      }
    };
  
    const formatTime = (seconds: number) => {
      const minutes = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
      return `${minutes}:${secs}`;
    };

  return (
    <footer className={styles.footer}>
      <Seekbar 
        currentTime={currentTime} 
        duration={duration} 
        onSeek={onSeek} 
      />
      <div className={styles.footerInner}>
        <div className={styles.skipControlsParent}>
          <div className={styles.skipControls}>
            <div className={styles.skipButtons}>
              <PlaybackBarControls isPlaying={isPlaying} togglePlayPause={togglePlayPause} />
              <audio ref={audioRef} id="audio-player" src={currentPodcast.audio} />
              <div className={styles.skip}>
                <a className={styles.time}>
                  {formatTime(currentTime)} / {formatTime(duration)}
                </a>
              </div>
            </div>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.details}>
              <div className={styles.titleContainer}>
                <PlaybackBarCard currentPodcast={currentPodcast} />
                <div className={styles.actions}>
                  <div className={styles.actionButtons}>
                    <LikeDislikeControls />
                    <img
                      className={styles.optionsIcon}
                      loading="lazy"
                      alt="More vert"
                      src="./more-vert-icon.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.skip}>
            <div className={styles.playbackButtons}>
              <img
                className={styles.icons}
                title="Repeat off"
                loading="lazy"
                alt="Repeat off"
                src="./repeat-off-icon.svg"
              />
              <img
                className={styles.icons}
                title="Mute"
                loading="lazy"
                alt="Mute"
                src="./volume-icon.svg"
              />
              <img
                className={styles.icons}
                loading="lazy"
                alt="Arrow drop down"
                src="./arrow-drop-icon.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default PlaybackBar;
