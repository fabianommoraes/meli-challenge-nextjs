import Image from "next/image";
import styles from "./ProductCard.module.sass";
import { ProductCardProps } from "./ProductCard.types";
import Link from "next/link";
import { formatCurrencyToArg } from "../../shared/utils";

const ProductCard = ({ item }: ProductCardProps) => {
  return (
    <Link href={`/items/${item.id}`} className={styles.productCard}>
      <div className={styles.productInfo}>
        <Image src={item.picture} width={180} height={180} alt={item.title} />
        <div>
          <div className={styles.price}>
            <span>$ {formatCurrencyToArg(item.price.amount)}</span>
            <span
              data-testid="decimals"
              className={styles.decimals}
              aria-hidden
            >
              {item.price.decimals}
            </span>
            {item.free_shipping ? (
              <Image
                src="/ic_shipping.png"
                width={18}
                height={18}
                alt="Frete grátis"
              />
            ) : null}
          </div>
          <h2 className={styles.title} aria-hidden>
            {item.title}
          </h2>
        </div>
      </div>

      <div className={styles.location}>{item.state}</div>
    </Link>
  );
};

export default ProductCard;
