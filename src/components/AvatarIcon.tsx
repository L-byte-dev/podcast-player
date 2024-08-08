import styles from "./AvatarIcon.module.css";

function AvatarIcon() {
  return (
    <div className={styles.avatarContainer}>
      <img className={styles.avatarIcon} alt="" src="/avatar-icon.png" />
    </div>
  );
};

export default AvatarIcon;
