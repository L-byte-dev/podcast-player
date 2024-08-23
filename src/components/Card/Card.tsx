import { ReactNode } from 'react';
import styles from './Card.module.css'

type Props = {
    title: string;
    subtitle: string;
    children: ReactNode;
    className?: string; 
    centeredText?: boolean;
};
  
function Card({ title, subtitle, children, className, centeredText  }: Props) {
    return (
        <div className={className}>
            {children}
            <div className={centeredText ? styles.centered : styles.container}>
                <b className={styles.title}>{title}</b>
                <div>
                    <div className={styles.subtitle}>{subtitle}</div>
                </div>
            </div>
        </div>
    );
}

export default Card;