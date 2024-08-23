import styles from './LikeDislikeControls.module.css'

function LikeDislikeControls() {
    return (
        <>
            <img
            className={styles.thumbIcon}
            loading="lazy"
            alt="Thumb down"
            src="./thumb-down.svg"
            />
            <img
            className={styles.thumbIcon}
            loading="lazy"
            alt="Thumb up"
            src="./thumb-up.svg"
            />
      </>
    )
}

export default LikeDislikeControls