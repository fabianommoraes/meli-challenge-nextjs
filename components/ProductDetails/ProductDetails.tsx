import Image from "next/image";
import styles from "./ProductDetails.module.sass";
import Button from "@/components/Button/Button";
import { ProductDetailsProps } from "./ProductDetails.types";

const ProductDetails = ({ productDetails }: ProductDetailsProps) => {
  const description = productDetails.item.description.replace(/\n/g, "<br />");

  const onClickHandler = () => {
    console.log("comprou!");
  };

  return (
    <div className={styles.productDetails}>
      <div className={styles.grid}>
        <div className={styles.content}>
          <Image
            className={styles.image}
            src={productDetails.item.picture}
            alt={productDetails.item.title}
            width={680}
            height={680}
            sizes="100vw"
          />
          <div className={styles.details}>
            <div
              className={styles.buyers}
            >{`${productDetails.item.condition} - ${productDetails.item.sold_quantity} vendidos`}</div>
            <h1>{productDetails.item.title}</h1>
            <div className={styles.priceContainer}>
              <span className={styles.price}>
                $ {productDetails.item.price.amount}
              </span>{" "}
              <span className={styles.decimal}>
                {productDetails.item.price.decimals}
              </span>
            </div>
            <Button onClick={onClickHandler} />
          </div>
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.descriptionContent}>
          <div className={styles.description}>
            <h2>Descripcion del producto</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: description
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;