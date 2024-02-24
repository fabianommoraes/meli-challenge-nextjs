import Image from "next/image";
import styles from "./ProductCard.module.sass";
import { ProductCardProps } from "./ProductCard.types";
import Link from "next/link";

const ProductCard = ({ item }: ProductCardProps) => {
  return (
    <Link href={`/items/${item.id}`} className={styles.productCard}>
      <div className={styles.productInfo}>
        <Image src={item.picture} width={180} height={180} alt="buscar" />
        <div>
          <div className={styles.price}>
            <span>$ {item.price.amount}</span>
            {item.free_shipping ? (
              <Image
                src="/ic_shipping.png"
                width={18}
                height={18}
                alt="buscar"
              />
            ) : null}
          </div>
          <div className={styles.description}> {item.title}</div>
        </div>
      </div>

      <div className={styles.location}>{item.id}</div>
    </Link>
  );
};

export default ProductCard;