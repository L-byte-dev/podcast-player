import { ComponentProps } from "react";
import styles from "./Input.module.css"

type Props = ComponentProps<"input"> & {
    label?: string;
    className?: string;
};

function Input({ label, className, ...delegated}: Props) {

    const finalClassName = className ? `${styles.input} ${className}` : `${styles.input}`

    return(
        <div className={styles.inputForm}>
            {label && <label htmlFor={delegated.id}>{label}:</label>}
            <input
                {...delegated}
                className={finalClassName}
            />
        </div>
    )
}

export default Input