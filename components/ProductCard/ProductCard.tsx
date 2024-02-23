import Image from "next/image";
import styles from "./ProductCard.module.scss";

const ProductCard = () => {
  return (
    <div className={styles.productCard}>
      <div>
        <Image src="/thumbnail.jpg" width={180} height={180} alt="buscar" />
        <div>
          <div className={styles.price}>
            <span>$ 1980</span>
            <Image src="/ic_shipping.png" width={18} height={18} alt="buscar" />
          </div>
          <div className={styles.description}>
            <div>Apple Ipod Touch 5g</div>
            <div>Completo Único!</div>
          </div>
        </div>
      </div>

      <div className={styles.location}>Capital Federal</div>
    </div>
  );
};

export default ProductCard;
