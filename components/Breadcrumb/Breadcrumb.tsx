import Container from "../Container/Container";
import styles from "./Breadcrumb.module.sass";

const array = [
  "Eletronica, Audio e Video",
  "iPod",
  "Reproductores",
  "iPod touch",
  "32 GB"
];

const Breadcrumb = () => {
  return (
    <div className={styles.breadcrumb}>
      <div className={styles.grid}>
        <div className={styles.content}>
          {array.map((a, i) => (
            <>
              <span className={`${i === array.length - 1 && styles.bold}`}>
                {a}
              </span>
              {i !== array.length - 1 ? <span>{" > "}</span> : null}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
