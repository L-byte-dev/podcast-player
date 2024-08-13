import styles from './PlaybackBar.module.css'
import Seekbar from '../Seekbar/Seekbar'
import LikeDislikeControls from '../LikeDislikeControls/LikeDislikeControls'
import PlaybackBarControls from '../PlaybackBarControls/PlaybackBarControls'
import PlaybackBarCard from '../PlaybackBarCard/PlaybackBarCard'

function PlaybackBar() {
  return (
      <footer className={styles.footer}>
          <Seekbar />
          <div className={styles.footerInner}>
              <div className={styles.skipControlsParent}>
                  <div className={styles.skipControls}>
                      <div className={styles.skipButtons}>
                        <PlaybackBarControls />    
                        <div className={styles.skip}>
                          <a className={styles.time}>0:10 / 3:41</a>
                        </div>
                      </div>
                  </div>
                  <div className={styles.cardContainer}>
                      <div className={styles.details}>
                          <div className={styles.titleContainer}>
                              <PlaybackBarCard />
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


export default PlaybackBar