import styles from "./Breadcrumb.module.sass";
import { BreadcrumbProps } from "./Breadcrumb.types";

const Breadcrumb = ({ categories }: BreadcrumbProps) => {
  return (
    <div className={styles.breadcrumb}>
      <div className={styles.grid}>
        <div className={styles.content}>
          {categories.map((category, i) => (
            <span key={category} data-testid="breadcrumb">
              <span
                className={`${styles.focusable} ${i === categories.length - 1 && styles.bold}`}
                tabIndex={0}
              >
                {category}
              </span>
              {i !== categories.length - 1 ? <span>{" > "}</span> : null}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
