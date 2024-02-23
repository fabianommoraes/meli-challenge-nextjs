import styles from "./Container.module.sass";
import { ContainerProps } from "./Container.types";

const Container = ({ children }: ContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
