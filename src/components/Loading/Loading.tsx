import styles from './Loading.module.css'

function Loading() {
    return (
      <div className={styles.loaderContainer}>
        <img src='./loading-icon.svg' alt='Loading Icon'/>
      </div>
    );
  }
  
export default Loading;
   