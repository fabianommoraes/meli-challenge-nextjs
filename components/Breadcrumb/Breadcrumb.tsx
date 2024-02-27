import styles from "./Breadcrumb.module.sass";
import { BreadcrumbProps } from "./Breadcrumb.types";

const Breadcrumb = ({ categories }: BreadcrumbProps) => {
  return (
    <div className={styles.breadcrumb}>
      <div className={styles.grid}>
        <ol className={styles.content}>
          {categories ? (
            categories.map((category, i) => (
              <li key={category} data-testid="breadcrumb">
                <span
                  className={`${styles.focusable} ${i === categories.length - 1 && styles.bold}`}
                  // tabIndex={0} // se for um link real
                >
                  {category}
                </span>
                {i !== categories.length - 1 ? (
                  <span className={styles.margin}>{">"}</span>
                ) : null}
              </li>
            ))
          ) : (
            <span>&nbsp;</span>
          )}
        </ol>
      </div>
    </div>
  );
};

export default Breadcrumb;
