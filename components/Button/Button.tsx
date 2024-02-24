import styles from "./Button.module.sass";
import { ButtonProps } from "./Button.types";

const Button = ({ onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={styles.button}>
      Comprar
    </button>
  );
};

export default Button;
