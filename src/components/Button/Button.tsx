import { MouseEventHandler, ReactNode } from 'react';
import styles from './Button.module.css'

type Props = {
    content: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    className?: string;
    icon?: ReactNode;
};

function Button({ content, onClick, type, disabled, className, icon }: Props) {
    return (
        <button className={`${styles.button} ${className}`} name={content} type={type} onClick={onClick} disabled={disabled} >
            {icon && <span className={styles.icon}>{icon}</span>}
            {content}
        </button>
    );
}

export default Button;