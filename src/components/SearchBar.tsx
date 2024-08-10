import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.search}>
      <img className={styles.icon} alt="" src="https://d1xzdqg8s8ggsr.cloudfront.net/66b410f1617e4f227cb1ee07/e85f615d-96cb-44f6-a07f-13127d09a857_1723076925819061338?Expires=-62135596800&Signature=uA12-9VC4u9JdSYTNPFxB6pIVo3CjuGb9D-PmXo7eLAV~M3dyDpg-9yEjPyh3USyh6yTQGc8N1EwfKIHvCRYDNNypjz0cnQilv-oVxe9VmTFRpHmr~XFrIC5strTBgyA4lLF05exLUbyBILNYb3SwSandiNHSzW0H047NovQlNcekIbsr-iIlQiv2uHcQALswrOip~adZmkV5Z0udUvi2W2NsROr9RsiJHCSZ30Deh-yOjc8usPkLDaapHchjJTJiUBMrGp4NtklZ-nrkYgtysSTj6ElKlBRS~jzv2SB1vFi34TfefChZ0PdpxulbnqMMTAWTNsx~dEDNsnYFT7uuQ__&Key-Pair-Id=K1P54FZWCHCL6J" />
      <input className={styles.input} placeholder="Search..." type="text" />
    </div>
  );
};

export default SearchBar;
