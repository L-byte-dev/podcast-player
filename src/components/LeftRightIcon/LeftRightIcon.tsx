import styles from "./LeftRightIcon.module.css";

function LeftRightIcon() {
    return (
        <div className={styles.iconGroup}>
            <img
                className={styles.icon}
                alt="Left icon"
                src="./left-icon.png"
            />
            <img
                className={styles.icon}
                alt="Right icon"
                src="./right-icon.svg"
            />
        </div>
    );
}

export default LeftRightIcon;