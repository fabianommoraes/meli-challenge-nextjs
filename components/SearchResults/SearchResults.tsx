import styles from "./SearchResults.module.sass";
import { SearchResultsProps } from "./SearchResults.types";
import ProductCard from "../ProductCard/ProductCard";

const SearchResults = ({ items }: SearchResultsProps) => {
  return (
    <div className={styles.searchResults}>
      <div className={styles.grid}>
        <div className={styles.content}>
          {items.map((item, i) => (
            <div key={item.id}>
              <ProductCard item={item} key={item.id} />
              {i !== items.length - 1 ? <hr /> : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
