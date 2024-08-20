import styles from './Button.module.css'

type Props = {
    content: string;
};
  
function Button({ content }: Props) {
    return (
        <button className={styles.button} name={content}>
            {content}
        </button>
    );
}

export default Button;