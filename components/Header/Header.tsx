import Image from "next/image";
import styles from "./Header.module.sass";
import SearchBar from "../SearchBar/SearchBar";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.grid}>
        <div className={styles.content}>
          <Link className={styles.link} href={"/"} aria-label="Página Inicial">
            <Image
              src="/logo_ml.png"
              alt="Logo Mercado Libre"
              width={53}
              height={36}
              priority
            />
          </Link>
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
