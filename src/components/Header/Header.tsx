import AvatarIcon from "../AvatarIcon/AvatarIcon";
import PlatformLogo from "../PlatformLogo/PlatformLogo";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.css";

type Props = {
  toggleSidebar: () => void;
};

function Header({ toggleSidebar }: Props) {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <div className={styles.menu}>
            <img className={styles.menuIcon} alt="Menu icon" src="./menu-icon.svg" onClick={toggleSidebar} role="button"/>
        </div>
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
