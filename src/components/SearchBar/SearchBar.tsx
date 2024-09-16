import styles from "./SearchBar.module.css";
import Input from "../Input/Input";

function SearchBar() {
  return (
    <div className={styles.search}>
      <img className={styles.icon} alt="Search icon" src="./search-icon.svg" />
      <Input name="Search bar" type="text" placeholder="Search..." className={styles.input} />
    </div>
  );
};

export default SearchBar;
