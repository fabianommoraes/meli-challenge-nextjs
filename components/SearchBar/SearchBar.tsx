import Image from "next/image";
import styles from "./SearchBar.module.sass";
import { useRef } from "react";
import { useRouter } from "next/router";

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    if (inputRef.current) {
      const value = inputRef.current.value;
      router.push(`/items?search=${value}`);
    }
  };

  return (
    <form className={styles.searchBar}>
      <input placeholder="busca" ref={inputRef} />
      <button type="submit" onClick={onClickHandler}>
        <Image src="/ic_search.png" width={18} height={18} alt="buscar" />
      </button>
    </form>
  );
};

export default SearchBar;
