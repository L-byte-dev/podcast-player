import styles from "./PlatformLogo.module.css";

function PlatformLogo() {
    return (
        <img
            className={styles.platformLogo}
            loading="lazy"
            alt=""
            src="/platform-logo.svg"
        />
    )
}

export default PlatformLogo;