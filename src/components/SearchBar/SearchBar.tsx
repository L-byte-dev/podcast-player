import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.search}>
      <img className={styles.icon} alt="Search icon" src="./search-icon.svg" />
      <input className={styles.input} placeholder="Search..." type="text" />
    </div>
  );
};

export default SearchBar;
