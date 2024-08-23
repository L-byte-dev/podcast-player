import styles from "./Seekbar.module.css";

function Seekbar() {
  return (
    <div className={styles.seekbar}>
      <div className={styles.barProgressed} />
      <div className={styles.seeker} />
    </div>
  );
};

export default Seekbar;