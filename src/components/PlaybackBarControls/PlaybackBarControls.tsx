import styles from './PlaybackBarControls.module.css'

type Props = {
    isPlaying: boolean;
    togglePlayPause: () => void;
}

function PlaybackBarControls({isPlaying, togglePlayPause}: Props) {

    return (
    <>
        <div className={styles.skip}>
            <img
                className={styles.skipIcon}
                title="Previous"
                loading="lazy"
                alt="Previous"
                src="./previous-icon.svg"
                />
        </div>
        <div className={styles.controlButton}>
            <img
                className={isPlaying ? styles.pauseIcon : styles.playIcon}
                onClick={togglePlayPause}
                title={isPlaying ? "Pause" : "Play"}
                loading="lazy"
                alt={isPlaying ? "Pause" : "Play"}
                src={isPlaying ? "./pause-icon.svg" : "./play-icon.svg"}
                role="button"
             />
        </div>
        <div className={styles.skip}>
            <img
                className={styles.skipIcon}
                title="Next"
                loading="lazy"
                alt="Next"
                src="./next-icon.svg"
            />
        </div>
    </>
    )
}

export default PlaybackBarControls;