import styles from './Button.module.css'

type Props = {
    content: string;
};
  
function Button({ content }: Props) {
    return (
        <button className={styles.button} name={content}>
            <div className={styles.buttonDiv}>
                <p className={styles.buttonContent}>
                    {content}
                </p>
            </div>
        </button>
    );
}

export default Button;