import styles from './Loading.module.css'

function Loading() {
    return (
      <div className={styles.loaderContainer}>
        <img src='./loading-icon.svg'/>
      </div>
    );
  }
  
export default Loading;
   