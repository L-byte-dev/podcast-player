import styles from "./PlatformLogo.module.css";

function PlatformLogo() {
    return (
        <img
            className={styles.platformLogo}
            loading="lazy"
            alt="Platform logo"
            src="./platform-logo.svg"
        />
    )
}

export default PlatformLogo;