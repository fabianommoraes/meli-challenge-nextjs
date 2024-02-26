import styles from "./SearchResults.module.sass";
import { SearchResultsProps } from "./SearchResults.types";
import ProductCard from "../ProductCard/ProductCard";

const SearchResults = ({ searchResultItems }: SearchResultsProps) => {
  return (
    <div className={styles.searchResults}>
      <div className={styles.grid}>
        <div className={styles.content}>
          {searchResultItems.map((item, i) => (
            <div key={item.id}>
              <ProductCard item={item} key={item.id} />
              {i !== searchResultItems.length - 1 ? <hr /> : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
