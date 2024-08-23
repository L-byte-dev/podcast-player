import styles from './PlaybackBarControls.module.css'

function PlaybackBarControls() {
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
            <img
                className={styles.pauseIcon}
                title="Pause"
                loading="lazy"
                alt="Pause"
                src="./pause-icon.svg"
            />
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