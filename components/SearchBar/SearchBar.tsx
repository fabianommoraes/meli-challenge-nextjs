import Image from "next/image";
import styles from "./SearchBar.module.sass";

const SearchBar = () => {
  return (
    <form className={styles.searchBar}>
      <input placeholder="busca" />
      <button type="submit">
        <Image src="/ic_search.png" width={18} height={18} alt="buscar" />
      </button>
    </form>
  );
};

export default SearchBar;
