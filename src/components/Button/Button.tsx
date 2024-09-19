import { MouseEventHandler, ReactNode } from 'react';
import styles from './Button.module.css'

type Props = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    className?: string;
    children: ReactNode;
};

function Button({ onClick, type, disabled, className, children }: Props) {
    return (
        <button className={`${styles.button} ${className}`} type={type} onClick={onClick} disabled={disabled} >
            {children}
        </button>
    );
}

export default Button;