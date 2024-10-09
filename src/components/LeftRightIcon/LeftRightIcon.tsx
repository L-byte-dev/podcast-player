import styles from "./LeftRightIcon.module.css";

type Props = {
    onPrev: ()=> void;
    onNext: ()=> void;
}

function LeftRightIcon({onPrev, onNext}: Props) {
    return (
        <div className={styles.iconGroup}>
            <img
                className={styles.icon}
                alt="Left icon"
                src="./left-icon.png"
                onClick={onPrev}
                role="button"
            />
            <img
                className={styles.icon}
                alt="Right icon"
                src="./right-icon.svg"
                onClick={onNext}
                role="button"
            />
        </div>
    );
}

export default LeftRightIcon;