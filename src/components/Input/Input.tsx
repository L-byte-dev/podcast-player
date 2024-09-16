import { ChangeEvent } from "react";
import styles from "./Input.module.css"

type Props = {
    label?: string;
    id?: string;
    name: string;
    type: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    placeholder?: string;
    className?: string;
};

function Input({ label, id, name, type, value, onChange, placeholder, className}: Props) {
    return(
        <div className={styles.inputForm}>
            {label && <label htmlFor={id}>{label}:</label>}
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`${styles.input} ${className}`}
            />
        </div>
    )
}

export default Input