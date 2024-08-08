import AvatarIcon from "./AvatarIcon";
import PlatformLogo from "./PlatformLogo";
import SearchBar from "./SearchBar";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <PlatformLogo />
      </div>
      <div className={styles.searchContainer}>
        <div className={styles.searchBar}>
          <SearchBar />
          <div className={styles.avatarIcon}>
            <AvatarIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
