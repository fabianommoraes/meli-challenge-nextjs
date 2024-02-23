import Image from "next/image";
import styles from "./Header.module.sass";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.grid}>
        <div className={styles.content}>
          <Image
            src="/logo_ml.png"
            alt="Logo Mercado Livre"
            width={53}
            height={36}
          />
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
